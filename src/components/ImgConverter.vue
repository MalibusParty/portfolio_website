<template>
    <KeepAlive>
        <div>
            <div id="pixelPic">
                <div class="pixelP" v-for="pixx in pixelCount" v-bind:key="pixx"></div>
            </div>
            <canvas hidden id="myTestCanvas"></canvas>
        </div>
    </KeepAlive>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { scaleImgDown } from '@/services/imgScaleLib';

const props = defineProps<{
    xDimension: number,
    imgPath: string,
    color: string
}>();

const pixelCount = checkForSmallScreen();
const dimension = dimensionChecker();

let pixelArr: Array<HTMLElement>;
const newImg = new Image();

onMounted(() => {
    newImg.onload = () => {
        const scaleFactor = dimension / newImg.width;
        const canvas: any = document.getElementById('myTestCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = newImg.width;
        canvas.height = newImg.height;
        ctx.drawImage(newImg, 0, 0);
        const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data: Uint8ClampedArray = imgData.data;
        const pixArr = blackWhiteImg(data);
        createGrid(scaleImgDown(pixArr, canvas.width * scaleFactor, canvas.height * scaleFactor, canvas.width, canvas.height));
    }
});

function blackWhiteImg(imgData: Uint8ClampedArray) {
    const outputArray: Array<number> = new Array(imgData.length / 4);
    const imgDataLen = imgData.length;
    let counter = 0;
    for(let i = 0; i < imgDataLen; i += 4) {
        const bwCol = (imgData[i] * 0.299 + imgData[i+1] * 0.587 + imgData[i+2] * 0.114) | 0;
        outputArray[counter] = bwCol;
        counter += 1;
    }
    return outputArray;
}

newImg.src = props.imgPath;

function createGrid(imgData: number[]) {
    pixelArr = Array.from(document.querySelectorAll('.pixelP'));
    const finalArr = [];
    let arrCounter = 0;
    for(let i = 1; i <= dimension; i++) {
        for(let j = 1; j <= dimension; j++) {
            const ele: HTMLElement = pixelArr[arrCounter];
            const widthFromColor = calcWidthFromColor(imgData[arrCounter], 9, 1);
            if(imgData[arrCounter++] > 0) {
                ele.style.gridArea = `${j} / ${i} / span 1 / span 1`;
                ele.style.backgroundColor = props.color;
                ele.style.width = `${widthFromColor}px`;
                ele.style.height = `${widthFromColor}px`;
                finalArr.push(ele);
            } else {
                ele.style.gridArea = `${j} / ${i} / span 1 / span 1`;
                ele.hidden = true;
            }
        }
    }
    pixelArr = finalArr;
}

function calcWidthFromColor(color: number, maxWidth: number, minWidth: number) {
    const percentOfColRange = color / 255;
    return ((maxWidth * percentOfColRange) + minWidth) | 0;
}

function checkForSmallScreen() {
    if(window.innerWidth < 490) {
        return props.xDimension * props.xDimension / 2;
    }
    return props.xDimension * props.xDimension;
}

function dimensionChecker() {
    if(window.innerWidth < 490) {
        return props.xDimension / 2;
    }
    return props.xDimension;
}

</script>


<style scoped>

@media (min-width: 993px) {
    #pixelPic {
        max-width: fit-content;
        display: grid;
        align-items: center;
        justify-items: center;
        gap: 0.25vw;
        grid-auto-rows: 0.12vw;
        grid-auto-columns: 0.12vw;
    }
    
    .pixelP {
        border-radius: 50%;
    }
}


</style>
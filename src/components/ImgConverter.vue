<template>
    <div>
        <div id="pixelPic">
            <div class="pixel" v-for="pix in pixels" v-bind:key="pix"></div>
        </div>
        <canvas hidden id="myTestCanvas"></canvas>
    </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { scaleImgDown } from '@/services/imgScaleLib';

const props = defineProps<{
    xDimension: number,
    imgPath: string
}>();

const pixels = props.xDimension * props.xDimension;

let pixelArr: Array<HTMLElement>;
let newImg = new Image();

onMounted(() => {
    newImg.onload = () => {
        const scaleFactor = props.xDimension / newImg.width;
        const canvas: any = document.getElementById('myTestCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = newImg.width;
        canvas.height = newImg.height;
        ctx.drawImage(newImg, 0, 0);
        let imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data: Uint8ClampedArray = imgData.data;
        let pixArr = blackWhiteImg(data);
        createGrid(scaleImgDown(pixArr, canvas.width * scaleFactor, canvas.height * scaleFactor, canvas.width, canvas.height));
    }
});

function blackWhiteImg(imgData: Uint8ClampedArray) {
    let outputArray: Array<number> = new Array(imgData.length / 4);
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
    pixelArr = Array.from(document.querySelectorAll('.pixel'));
    let finalArr = [];
    let arrCounter = 0;
    for(let i = 1; i <= props.xDimension; i++) {
        for(let j = 1; j <= props.xDimension; j++) {
            let ele: HTMLElement = pixelArr[arrCounter];
            const widthFromColor = calcWidthFromColor(imgData[arrCounter], 10, 1);
            if(imgData[arrCounter++] > 0) {
                ele.style.gridArea = `${j} / ${i} / span 1 / span 1`;
                ele.style.backgroundColor = "white";
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

</script>


<style scoped>
#pixelPic {
    max-width: fit-content;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 0.25vw;
    grid-auto-rows: 0.15vw;
    grid-auto-columns: 0.15vw;
}

.pixel {
    border-radius: 50%;
}
</style>
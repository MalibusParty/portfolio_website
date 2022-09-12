<template>
    <canvas hidden id="testCanvas" width="500" height="400"></canvas>
    <div ref="pixelGrid" id="pixGrid">
        <div class="pixel" v-for="pix in pixels" v-bind:key="pix"></div>
    </div>
</template>


<script setup lang="ts">
import { nextTick, onMounted, onUnmounted } from 'vue';
import { createBinaryImg, scaleImgDown } from '@/services/imgScaleLib';

const props = defineProps<{
        xDimension: number,
        yDimension: number
}>()

const pixels = props.xDimension * props.yDimension;

let pixelArr: Array<HTMLElement>;
let pixArr;
let newImg: number[];
let posOfEle: number[][];
let pixelMaxWidth = (window.innerWidth / 320) | 0;
const MIN_PIXEL_SIZE = 3;

nextTick(() =>{
    pixArr = createBinaryImg('testCanvas');
    const canvas = document.getElementById('testCanvas') as HTMLCanvasElement;
    if(canvas !== null) {
        newImg = scaleImgDown(pixArr, props.xDimension, props.yDimension, canvas.width, canvas.height);
        createGrid();
        getPositions();
    }
});

function createGrid() {
    pixelArr = Array.from(document.querySelectorAll('.pixel'));
    let finalArr = []
    let arrCounter = 0;
    for(let i = 1; i <= props.xDimension; i++) {
        for(let j = 1; j <= props.yDimension; j++) {
            let ele = pixelArr[arrCounter] as HTMLElement;
            if(newImg[arrCounter++] === 1) {
                ele.style.gridArea = `${j} / ${i} / span 1 / span 1`;
                ele.style.backgroundColor = "white";
                ele.style.width = `${MIN_PIXEL_SIZE}px`;
                ele.style.height = `${MIN_PIXEL_SIZE}px`;
                finalArr.push(ele);
            } else {
                ele.style.gridArea = `${j} / ${i} / span 1 / span 1`;
                ele.hidden = true;
            }
        }
    }
    pixelArr = finalArr;
}

function getPositions() {
    let posArr = [];
    for(let i = 0; i < pixelArr.length; i++) {
        let position = pixelArr[i].getBoundingClientRect();
        const pos: number[] = [position.left, position.top];
        posArr.push(pos);
    }
    posOfEle = posArr;
}

function update(event: MouseEvent) {
    for(let i = 0; i < pixelArr.length; i++) {
        let ele = pixelArr[i] as HTMLElement;
        const xDiff = Math.abs(posOfEle[i][0] - event.pageX);
        const yDiff = Math.abs(posOfEle[i][1] - event.pageY);
        const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        let maxDistanceDistance = 70 / distance;
        if(maxDistanceDistance > 1) {
            maxDistanceDistance = 1;
        }
        //const zIndex = calcZIndex(maxDistanceDistance, 10, 0);
        const newWidth = calcWidth(maxDistanceDistance, pixelMaxWidth, MIN_PIXEL_SIZE);
        ele.style.width = `${newWidth}px`;
        ele.style.height = `${newWidth}px`;
        //ele.style.zIndex = `${zIndex}`;
    }
}

function calcZIndex(distanceNum: number, maxZ: number, minZ: number) {
    // bitwise truncating may introduce errors
    return (maxZ - (maxZ * distanceNum) + minZ) | 0;
}

function calcWidth(distanceNum: number, maxW: number, minW: number) {
    return ((maxW * distanceNum) + minW) | 0;
}

function resizeCalculations(event: UIEvent) {
    getPositions();
    pixelMaxWidth = (window.innerWidth / 320) | 0;
}

onMounted(() => {
    window.addEventListener('mousemove', update);
    window.addEventListener('resize', resizeCalculations);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', update);
    window.removeEventListener('resize', resizeCalculations);
});

</script>


<style scoped>

#pixGrid {
    max-width: fit-content;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 0.25vw;
    grid-auto-rows: 0.12vw;
    grid-auto-columns: 0.12vw;
}

.pixel {
    border-radius: 50%;
}

#mousePos {
    font-size: 18pt;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

</style>
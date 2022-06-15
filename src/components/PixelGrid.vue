<template>
    <canvas v-once hidden id="testCanvas" width="300" height="300"></canvas>
    <div v-once ref="pixelGrid" id="pixGrid">
        <div class="pixel" v-for="i in pixels" v-bind:key="i"></div>
    </div>
</template>


<script setup lang="ts">
import { nextTick, onMounted, onUnmounted } from 'vue';
import { createBinaryImg, scaleImgDown, getPixel } from '../services/imgScaleLib';

const props = defineProps<{
        xDimension: number,
        yDimension: number
}>()

const pixels = props.xDimension * props.yDimension;

let pixelArr: Array<HTMLElement>;
let pixArr;
let newImg: number[];
let posOfEle: number[][];
//const gridElement = document.getElementById('pixelGrid');

nextTick(() =>{
    pixArr = createBinaryImg('testCanvas');
    newImg = scaleImgDown(pixArr, props.xDimension, props.yDimension, 300, 300);
    createGrid();
    getPositions();
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
    //let currTime = Date.now();
    for(let i = 0; i < pixelArr.length; i++) {
        let ele = pixelArr[i] as HTMLElement;
        const xDiff = Math.abs(posOfEle[i][0] - event.pageX);
        const yDiff = Math.abs(posOfEle[i][1] - event.pageY);
        const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        // if(distance > 600) {
        //     ele.style.width = '5px';
        //     ele.style.height = '5px';
        //     continue;
        // } 
        let maxDistanceDistance = 70 / distance;
        if(maxDistanceDistance > 1) {
            maxDistanceDistance = 1;
        }
        //const zIndex = calcZIndex(maxDistanceDistance, 10, 0);
        const newWidth = calcWidth(maxDistanceDistance, 15, 3);
        ele.style.width = `${newWidth}px`;
        ele.style.height = `${newWidth}px`;
        //ele.style.zIndex = `${zIndex}`;
        // if(distance > 150) {
        //     ele.style.width = '5px';
        //     ele.style.height = '5px';
        // } else if(distance <= 150 && distance > 70) {
        //     ele.style.width = '20px';
        //     ele.style.height = '20px';
        // } else {
        //     ele.style.width = '30px';
        //     ele.style.height = '30px';
        // }
    }
    //console.log(Date.now() - currTime);
}

//TODO: implement function to determine z index and w/h through a given distance
function calcZIndex(distanceNum: number, maxZ: number, minZ: number) {
    //const gridWidth: number = gridElement?.clientWidth;
    // bitwise truncating may introduce errors
    return (maxZ - (maxZ * distanceNum) + minZ) | 0;
}

function calcWidth(distanceNum: number, maxW: number, minW: number) {
    return ((maxW * distanceNum) + minW) | 0;
}


onMounted(() => window.addEventListener('mousemove', update));
onUnmounted(() => window.removeEventListener('mousemove', update));

</script>


<style scoped>

#pixGrid {
    max-width: fit-content;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 10px;
    grid-auto-rows: 0.5vh;
    grid-auto-columns: 0.5vh;
}

.pixel {
    margin: 15px;
    border-radius: 50%;
}

#mousePos {
    font-size: 18pt;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

</style>
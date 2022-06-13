<template>
    <canvas hidden id="testCanvas" width="300" height="300"></canvas>
    <div id="pixGrid">
        <div class="pixel" v-for="i in pixels" v-bind:key="i"></div>
    </div>
    <p id="mousePos">Mouse is at: {{xPos}} || {{yPos}}</p>
</template>


<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { createBinaryImg, scaleImgDown, getPixel } from '../services/imgScaleLib';


const props = defineProps<{
        xDimension: number,
        yDimension: number
}>()

const pixels = props.xDimension * props.yDimension;


let pixelArr;
let pixArr;
let newImg;

nextTick(() =>{
    pixArr = createBinaryImg('testCanvas');
    newImg = scaleImgDown(pixArr, props.xDimension, props.yDimension, 300, 300);
    createGrid();
});

function createGrid() {
    pixelArr = document.querySelectorAll('.pixel');
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

const xPos = ref(0);
const yPos = ref(0);

function update(event: MouseEvent) {
    //let currTime = Date.now();
    xPos.value = event.pageX;
    yPos.value = event.pageY;
    for(let i = 0; i < pixelArr.length; i++) {
        let ele = pixelArr[i] as HTMLElement;
        const position = ele.getBoundingClientRect();
        const xDiff = Math.abs(position.left - event.pageX);
        const yDiff = Math.abs(position.top - event.pageY);
        const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        if(distance < 70) {
            ele.style.width = '30px';
            ele.style.height = '30px';
        } else if(distance < 125) {
            ele.style.width = '20px';
            ele.style.height = '20px';
        } else {
            ele.style.width = '5px';
            ele.style.height = '5px';
        }
    }
    //console.log(Date.now() - currTime);
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
    grid-auto-rows: 25px;
    grid-auto-columns: 25px;
}

.pixel {
    width: 5px;
    height: 5px;
    background-color: gray;
    margin: 15px;
    border-radius: 5px;
}

.pixel:hover {
    margin: 5px;
    width: 15px;
    height: 15px;
}

#mousePos {
    font-size: 18pt;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

</style>
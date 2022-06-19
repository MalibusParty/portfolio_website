<template>
    <div id="indicatorGrid">
        <div class="circleItem" v-for="page in pages" v-bind:key="page"></div>
        
    </div>
</template>


<script setup lang="ts">
import { nextTick,  onMounted,  watchEffect } from 'vue';


const props = defineProps<{
    pageCount: number,
    currentPage: number
}>();

const pages = props.pageCount * 4;
let circleArray: Array<HTMLElement>;


nextTick(() => {
    createIndicatorGrid();
    watchEffect(() => changeIndicator(props.currentPage))
});



function createIndicatorGrid() {
    circleArray = Array.from(document.querySelectorAll('.circleItem'));
    let ele: HTMLElement;
    for(let i = 0; i < circleArray.length; i++) {
        ele = circleArray[i] as HTMLElement;
        const rowNum = ((i / 4) + 1) | 0;
        ele.style.gridArea = `${rowNum} / ${(i % 4) + 1} / span 1 / span 1`;
        if(rowNum != (props.currentPage + 1) && (i % 4) >= 1) {
            ele.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        } else {
            ele.style.backgroundColor = 'rgba(255, 255, 255, 255)'
        }
    }
}

function changeIndicator(currentPageIndex: number) {
    let ele: HTMLElement;
    for(let i = 0; i < circleArray.length; i++) {
        ele = circleArray[i];
        const rowNum = ((i / 4) + 1) | 0;
        if(rowNum != (currentPageIndex + 1) && (i % 4) >= 1) {
            ele.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        } else {
            ele.style.backgroundColor = 'rgba(255, 255, 255, 255)'
        }

        if(ele.classList.contains('blendInAnimation')) {
            ele.classList.remove('blendInAnimation');
        }

        if(rowNum == (currentPageIndex + 1)) {
            ele.classList.add('blendInAnimation');
        }
    }
}


</script>


<style scoped>

@keyframes blendIn1{
    from {background-color: rgba(255, 255, 255, 0)};
    to {background-color: rgba(255, 255, 255, 255)};
}

#indicatorGrid {
    display: grid;
    align-items: center;
    justify-items: center;
}

.circleItem {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin-left: 10px;
    margin-top: 20px;
}

.blendInAnimation {
    animation-name: blendIn1;
    animation-duration: 500ms;
    animation-delay: 500ms;
}


</style>
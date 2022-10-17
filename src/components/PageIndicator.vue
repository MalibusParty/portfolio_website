<template>
    <div id="indicatorGrid">
        <div class="circleItem" v-for="page in pages" v-bind:key="page"></div>
    </div>
</template>


<script setup lang="ts">
import { nextTick, watchEffect } from 'vue';

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
            if(ele.classList.contains('blendInAnimation')) {
                ele.classList.remove('blendInAnimation');
                ele.classList.add('blend-out');
                const currEle = ele;
                switch(i % 4) {
                    case 3:
                        setTimeout(() => {
                            currEle.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                        }, 150);
                        break;
                    case 2:
                        setTimeout(() => {
                            currEle.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                        }, 300);
                        break;
                    case 1:
                        setTimeout(() => {
                            currEle.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                        }, 450);
                        break;
                }
            }
            //ele.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        } else {
            ele.classList.add('blendInAnimation');
            const currEle = ele;
            switch(i % 4) {
                case 1:
                    setTimeout(() => {
                        currEle.style.backgroundColor = 'rgba(255, 255, 255, 255)'
                    }, 150);
                    break;
                case 2:
                    setTimeout(() => {
                        currEle.style.backgroundColor = 'rgba(255, 255, 255, 255)'
                    }, 300);
                    break;
                case 3:
                    setTimeout(() => {
                        currEle.style.backgroundColor = 'rgba(255, 255, 255, 255)'
                    }, 450);
                    break;
            }
            
        }
    }
}


</script>


<style scoped>

@keyframes blendIn1{
    from {background-color: rgba(255, 255, 255, 0)};
    to {background-color: rgba(255, 255, 255, 255)};
}

@keyframes blend-out {
    from {background-color: rgba(255, 255, 255, 255)};
    to {background-color: rgba(255, 255, 255, 0)};
}

#indicatorGrid {
    display: grid;
    align-items: center;
    justify-items: center;
}

.circleItem {
    border-radius: 50%;
    height: 5px;
    width: 5px;
    margin-left: 8px;
    margin-top: 8px;
}

.blendInAnimation {
    animation-name: blendIn1;
    animation-duration: 150ms;
    /*animation-delay: 500ms;*/
    background-color: rgba(255, 255, 255, 255);
}


</style>
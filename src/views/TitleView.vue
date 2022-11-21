<template>

    <div class="duo-flex">
        <div id="grid-container">
            <div id="name-tag"><TwoEdgeContainer>FELIX<br>RUF</TwoEdgeContainer></div>
            <div id="pixelGrid">
                <PixelGrid :x-dimension="120" :y-dimension="120"/>
            </div>
            <div id="intro-text">I currently study Media Computer Science at the RheinMain University of Applied Sciences</div>
        </div>
        <div id="portrait-container" v-if="windowWidth > 993">
            <ImgConverter :x-dimension="100" :img-path="portrait" :color="'#ffffff'"/>
        </div>
    </div>

</template>


<script setup lang="ts">
import PixelGrid from '@/components/PixelGrid.vue';
import { onMounted, ref } from 'vue';
import { usePage } from '../services/usePage';
import ImgConverter from '@/components/ImgConverter.vue';
import portrait from '@/assets/portrait_small.png';
import TwoEdgeContainer from '../components/TwoEdgeContainer.vue';

const { pageState, getCurrentPage, scrollOn } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
});

const windowWidth = ref(window.innerWidth);
</script>


<style scoped>

@media (min-width: 993px) {
    #grid-container {
        display: flex;
        width: 70%;
        margin-left: 10vw;
        margin-top: calc(5vh + 85px);
        flex-direction: column;
    }

    #name-tag {
        font-family: 'Segoe UI', 'Arial', sans-serif;
        font-size: 40pt;
        font-weight: 700;
        margin: 3vh 0vw;
        line-height: 40pt;
        color: white;
        width: fit-content;
    }

    #intro-text {
        font-family: 'Segoe UI', 'Arial', sans-serif;
        font-size: 16pt;
        font-weight: lighter;
        font-style: oblique;
        line-height: 1.3;
        color: white;
        padding-right: 20vw;
        margin: 5vh 0vw 0vh 0vw;
    }

    #pixelGrid {
        height: fit-content;
        justify-self: center;
        border-bottom: 5px solid #FF7A50;
        padding-bottom: 30px;
    }

    #portrait-container {
        align-self: flex-end;
        margin-left: 5vw;
        /* z-index: -1; */
        overflow: hidden;
    }

    .duo-flex {
        display: flex;
        height: 100vh;
        flex-direction: row;
    }
}

@media (max-width: 992px) {
    #grid-container {
        display: flex;
        width: 100%;
        margin-top: calc(1vh + 85px);
        flex-direction: column;
    }

    #name-tag {
        font-family: 'Segoe UI', 'Arial', sans-serif;
        font-size: 32pt;
        font-weight: 700;
        margin: 3vh 0vw;
        line-height: 32pt;
        color: white;
        width: fit-content;
    }

    #intro-text {
        font-family: 'Segoe UI', 'Arial', sans-serif;
        font-size: 16pt;
        font-weight: lighter;
        font-style: oblique;
        line-height: 1.3;
        color: white;
        margin: 3vh 0vw 0vh 0vw;
        padding-right: 10vw;
    }

    #pixelGrid {
        justify-self: center;
        border-bottom: 5px solid #FF7A50;
        padding-bottom: 30px;
        margin-right: 10vw;
    }

    #portrait-container {
        align-self: flex-end;
        /* z-index: -1; */
    }

    .duo-flex {
        display: flex;
        width: 88vw;
        flex-direction: column;
        margin-left: 12vw;
    }
}
</style>
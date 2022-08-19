<template>
    <div id="grid-container">
        <div id="personal_logo"></div>
        <div id="name-tag">FELIX<br>RUF</div>
        <div id="intro-text">Currently I study Media Computer Science at the RheinMain University of Applied Sciences</div>
        <div id="pixelGrid">
            <PixelGrid :x-dimension="130" :y-dimension="130"/>
        </div>
    </div>
</template>


<script setup lang="ts">
import PixelGrid from '@/components/PixelGrid.vue';
import router from '@/router';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage'

const { pageState, getCurrentPage, scrollOn } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
});
</script>


<style scoped>

#grid-container {
    display: grid;
    height: 100vh;
    width: 90%;
    margin: auto;
    grid-template-rows: 10vh 45vh auto;
    grid-template-columns: auto auto auto;
}

#personal_logo {
    background-image: url('@/assets/Logo_black_no_background.png');
    background-repeat: no-repeat;
    width: 25vh;
    height: 14vh;
    background-size: cover;

    grid-area: 1 / 1 / span 1 / span 1;
}

#name-tag {
    grid-area: 2 / 1 / span 1 / span 1;

    font-family: 'Roboto', sans-serif;
    font-size: 12vh;
    font-weight: 700;
    
    line-height: 1;
    color: white;

    padding: 15% 15% 0% 10%;
}

#intro-text {
    grid-area: 3 / 1 / span 1 / span 1;

    font-family: 'Roboto', sans-serif;
    font-size: 2.5vh;
    font-weight: lighter;
    font-style: oblique;
    line-height: 1.3;
    color: white;
    padding: 0% 15% 0% 10%;
}

#pixelGrid {
    height: fit-content;

    grid-area: 2 / 2 / span 2 / span 2;
    justify-self: center;
    padding-top: 55vh;
}

</style>
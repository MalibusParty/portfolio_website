<template>
    <div>
        <div id="personal_logo"></div>
        <div id="duo-flex">
            <div id="grid-container">
                <div id="name-tag">FELIX<br>RUF</div>
                <div id="pixelGrid">
                    <PixelGrid :x-dimension="130" :y-dimension="130"/>
                </div>
                <div id="intro-text">I currently study Media Computer Science at the RheinMain University of Applied Sciences</div>
            </div>
            <div id="portrait-container">
                <ImgConverter :x-dimension="100" :img-path="portrait" :color="'#ffffff'"/>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import PixelGrid from '@/components/PixelGrid.vue';
import router from '@/router';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage';
import ImgConverter from '@/components/imgConverter.vue';
import portrait from '@/assets/portrait_small.png';

const { pageState, getCurrentPage, scrollOn } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
});
</script>


<style scoped>

#grid-container {
    display: flex;
    width: 50%;
    margin-left: 7vw;
    margin-top: 5vh;
    flex-direction: column;
}

#personal_logo {
    background-image: url('@/assets/Logo_black_no_background.png');
    background-repeat: no-repeat;
    width: 25vh;
    height: 10vh;
    background-size: cover;
    margin-left: 1.5vw;
}

#name-tag {
    font-family: 'Arial', sans-serif;
    font-size: 60pt;
    font-weight: 700;
    margin: 5vh 1.5vw;
    line-height: 1;
    color: white;

}

#intro-text {
    font-family: 'Arial', sans-serif;
    font-size: 20pt;
    font-weight: lighter;
    font-style: oblique;
    line-height: 1.3;
    color: white;
    padding-right: 20vw;
    margin: 5vh 0vw 0vh 1.5vw;
}

#pixelGrid {
    height: fit-content;
    justify-self: center;

}

#portrait-container {
    align-self: flex-end;
    margin-left: 5vw;
}

#duo-flex {
    display: flex;
    height: 90vh;
}
</style>
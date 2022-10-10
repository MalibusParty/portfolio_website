<template>

    <div class="duo-flex">
        <div id="grid-container">
            <div id="name-tag"><TwoEdgeContainer>FELIX<br>RUF</TwoEdgeContainer></div>
            <div id="pixelGrid">
                <PixelGrid :x-dimension="120" :y-dimension="120"/>
            </div>
            <div id="intro-text">I currently study Media Computer Science at the RheinMain University of Applied Sciences</div>
        </div>
        <div id="portrait-container">
            <ImgConverter :x-dimension="100" :img-path="portrait" :color="'#ffffff'"/>
        </div>
    </div>

</template>


<script setup lang="ts">
import PixelGrid from '@/components/PixelGrid.vue';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage';
import ImgConverter from '@/components/imgConverter.vue';
import portrait from '@/assets/portrait_small.png';
import TwoEdgeContainer from '../components/TwoEdgeContainer.vue';

const { pageState, getCurrentPage, scrollOn } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
});
</script>


<style scoped>

#grid-container {
    display: flex;
    width: 70%;
    margin-left: 10vw;
    margin-top: calc(5vh + 85px);
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
    font-family: 'Segoe UI', 'Arial', sans-serif;
    font-size: 50pt;
    font-weight: 700;
    margin: 3vh 0vw;
    line-height: 1;
    color: white;
    width: fit-content;
}

#intro-text {
    font-family: 'Segoe UI', 'Arial', sans-serif;
    font-size: 18pt;
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
    height: 25%;
}

#portrait-container {
    align-self: flex-end;
    margin-left: 5vw;
    z-index: -1;
    overflow: hidden;
}

.duo-flex {
    display: flex;
    height: 100vh;
    flex-direction: row;
}
</style>
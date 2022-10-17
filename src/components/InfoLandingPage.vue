<template>
    <div class="info-landing-page-container">
        <div class="info-landing-page-left-item">
            <div class="info-landing-page-headline-item"><slot name="left-side-headline"></slot></div>
            <div class="info-landing-page-btn"><slot name="left-side-btn"></slot></div>
        </div>
        <div id="info-landing-page-image"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
    imgPath: string
}>();

onMounted(() => {
    const picEle = document.getElementById('info-landing-page-image');
    if(picEle != null) {
        picEle.style.backgroundImage = `url(${props.imgPath})`;
    }
});
</script>

<style scoped>
@media (min-width: 491px) {
    .info-landing-page-container {
        display: flex;
        flex-direction: row;
        margin-left: 5%;
        width: 95vw;
        height: 100vh;
        margin-bottom: 5vh;
    }
    
    .info-landing-page-left-item {
        width: 35vw;
        display: flex;
        flex-direction: column;
        align-self: center;
    }
    
    .info-landing-page-headline-item {
        align-self: center;
        margin-bottom: 5vh;
    }
    
    .info-landing-page-btn {
        align-self: center;
    }
    
    #info-landing-page-image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        max-width: 100%;
        max-height: 100%;
        height: calc(100vh - 85px);
        width: 65%;
        margin-top: 85px;
    }
}

@media (max-width: 490px) {
    .info-landing-page-container {
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        width: 95vw;
        height: 100vh;
        margin-bottom: 5vh;
    }
    
    .info-landing-page-left-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-self: center;
        order: 2;
        margin-top: 3vh;
    }
    
    .info-landing-page-headline-item {
        align-self: center;
        margin-bottom: 5vh;
    }
    
    .info-landing-page-btn {
        align-self: center;
    }
    
    #info-landing-page-image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        max-width: 100%;
        max-height: 100%;
        height: 30%;
        margin-right: 5%;
        margin-top: 85px;
    }
}
</style>
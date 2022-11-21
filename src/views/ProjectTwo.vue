<template>
    <div class="project-page">
        <div class="page-left-side">
            <HeaderMainTextComponent>
                <template #headline>
                    <p>Ebay Clone</p>
                </template>
                <template #default>
                    <p>This project tries to implement a simple version of the popular platform 'Ebay'. It uses a Spring backend and two different frontends. A thymeleaf server-side rendered frontend for registration and a Vue3 frontend for the bidding process.</p>
                </template>
            </HeaderMainTextComponent>
            <div id="ndgd-btn">
                <NudgedButton nudged-btn-text="Details"></NudgedButton>
            </div>
        </div>
        <div class="page-right-side" @click="linkToTwo()">
            <PicAndNumberContainer :img-path="ProjectTwoPic"/>
        </div>
    </div>
</template>


<script setup lang="ts">
import router from '@/router';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage';
import ProjectTwoPic from '@/assets/Ebay_Klon/second-hand-stock.jpg'
import HeaderMainTextComponent from '../components/HeaderMainTextComponent.vue'
import NudgedButton from '../components/NudgedButton.vue'
import PicAndNumberContainer from '../components/PicAndNumberContainer.vue'

const { pageState, getCurrentPage, scrollOn, scrollOff } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
});

function linkToTwo() {
    scrollOff();
    router.push('/projecttwo/info');
}
</script>

<style scoped>

@media (min-width: 993px) {
    .project-page {
    
        height: 100%;
        width: 90vw;
        display: flex;
    
        margin-left: 10%;
        padding-top: 85px;
    
        overflow: hidden;
    }
    
    .page-right-side {
        width: 60%;
        font-size: 60pt;
        cursor: pointer;
    }
    
    .page-left-side {
        width: 40%;
        /* padding: 10vh 10vw 0 0vw; */
        place-self: center;
        margin-right: 10vw;
    }
    
    
    img {
        max-width: 100%;
        max-height: 100%;
        padding-top: 10%;
        padding-left: 15%;
        padding-bottom: 5%;
    }
    
    #ndgd-btn {
        margin-top: 40px;
        margin-left: 40px;
    }

}

@media (max-width: 992px) {
    .project-page {
    
        height: 100%;
        width: 95vw;
        display: flex;
        flex-direction: column;

        margin-left: 5%;
        padding-top: 85px;

        overflow: hidden;
    }

    .page-right-side {
        width: 100%;
        cursor: pointer;
        padding-right: 5%;
        height: 25vh;
        order: 1;
    }

    .page-left-side {
        width: 100%;
        padding: 3vh 10vw 0 0vw;
        display: flex;
        flex-direction: column;
        order: 2;
    }

    #ndgd-btn {
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
<template>
    <div class="project-page">
        <div class="page-left-side">
            <HeaderMainTextComponent>
                <template #headline>
                    <p>SPAsS - Study Planner</p>
                </template>
                <template #default>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </template>
            </HeaderMainTextComponent>
            <div id="ndgd-btn">
                <NudgedButton nudged-btn-text="Details"></NudgedButton>
            </div>
        </div>
        <div class="page-right-side" @click="linkToOne()">
            <PicAndNumberContainer :img-path="ProjectOnePic"/>
        </div>
    </div>
</template>


<script setup lang="ts">
import router from '@/router';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage'
import HeaderMainTextComponent from '../components/HeaderMainTextComponent.vue'
import NudgedButton from '../components/NudgedButton.vue'
import PicAndNumberContainer from '../components/PicAndNumberContainer.vue'
import ProjectOnePic from '@/assets/SPAsS/study_stock.jpg';

const { pageState, getCurrentPage, scrollOn, scrollOff } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
});

function linkToOne() {
    scrollOff();
    router.push('/projectone/info');
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
        padding: 20vh 10vw 0 0vw;
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
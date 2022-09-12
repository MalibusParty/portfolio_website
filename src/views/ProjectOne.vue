<template>
    <div id="page1">
        <div id="btn-box1">
            <button id="btn-one" class="link-btn" @click="linkToOne">Details</button>
        </div>
        <div id="title-box" @click="linkToOne">
            <img src="@/assets/SPAsS/study_stock.jpg" alt="Studyplaner">
        </div>
    </div>
</template>


<script setup lang="ts">
import router from '@/router';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage'

const { pageState, getCurrentPage, switchScroll, scrollOn, scrollOff } = usePage();

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

#page1 {

    height: 100vh;
    width: 100vw;
    display: flex;
}

#title-box {
    width: 65%;
    font-size: 60pt;
    background-color: crimson;
    cursor: pointer;
}

#btn-box1 {
    width: 30%;
}

#btn-one {
    margin-top: 75%;
    margin-left: 40%;
}

img {
    max-width: 100%;
    max-height: 100%;
    padding-top: 10%;
    padding-left: 15%;
    padding-bottom: 5%;
}
</style>
<template>
    <div id="testPage1">
        <h1 @click="linkToOne">Project 1</h1>
    </div>
</template>


<script setup lang="ts">
import router from '@/router';
import { onMounted } from 'vue';
import { usePage } from '../services/usePage'

const { pageState, getCurrentPage, switchScroll } = usePage();

onMounted(() => pageState.currentPage = getCurrentPage());

function linkToOne() {
    pageState.scroll = false;
    switchScroll();
    router.push('/projectone/info');
}

</script>

<style scoped>

#testPage1 {
    background-color: aqua;
    height: 100vh;
    width: 100vw;
}

h1 {
    position: absolute;
    margin-left: 50%;
    margin-right: auto;
    margin-top: 50vh;

    padding: 21.5vh;

    font-size: 60pt;
    background-color: crimson;

    cursor: pointer;
}
</style>
<template>
    <div id="testPage2">
        <h1>Project 2</h1>
    </div>
</template>


<script setup lang="ts">
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

#testPage2 {
    background-color: rgb(0, 174, 26);
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
}
</style>
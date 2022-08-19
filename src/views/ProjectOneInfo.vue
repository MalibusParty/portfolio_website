<template>
    <div id="testInfo1">
        <h1 @click="linkFromOne">Project 1</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { usePage } from '../services/usePage';

const { pageState, scrollOff } = usePage();

function linkFromOne() {
    scrollOff();
    pageState.transitionBehaviour = 'clickTransOut';
    router.push('/projectone');
}
</script>

<style scoped>

#testInfo1 {
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
}
</style>
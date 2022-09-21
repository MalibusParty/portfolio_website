<template>
    <div>
        <div id="testInfo1">
        </div>
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
    background-color: rgb(0, 67, 67);
    height: 200vh;
    width: 100vw;
    display: flex;

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
<template>
    <div id="testPage2">
        <div id="testId">
            <ImgConverter :x-dimension="100" :img-path="portrait"/>
        </div>
    </div>
</template>


<script setup lang="ts">
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

#testPage2 {
    background-color: rgb(0, 174, 26);
    height: 100vh;
    width: 100vw;
}

#testId {
    position: absolute;
    margin-right: auto;
    font-size: 60pt;
}
</style>
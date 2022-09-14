<template>
    <div id="nudged-border-box" @click="linkToInfoPage"><slot></slot></div>
</template>


<script setup lang="ts">
import { usePage } from '@/services/usePage';
import router from '@/router';

const { pageState, getCurrentPage, scrollOn, scrollOff } = usePage();
const currentRoute = router.hasRoute

function linkToInfoPage() {
    scrollOff();

}
</script>

<style scoped>

</style>
<template>
    <div>
        <ImpressumContainer/>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ImpressumContainer from "../components/ImpressumContainer.vue";
import { usePage } from '@/services/usePage';

const { pageState, getCurrentPage, scrollOn } = usePage();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
    scrollOn();
})
</script>

<style scoped>

</style>
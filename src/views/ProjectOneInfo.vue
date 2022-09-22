<template>
    <div class="info-page-content">
        <InfoLandingPage :img-path="ProjectOnePic">
            <template #left-side-headline>
                <HeadlineDotText>
                    <template #headline>SPAsS</template>
                    <template #default>Study Planner</template>
                </HeadlineDotText>
            </template>
            <template #left-side-btn>
                <NudgedButton nudged-btn-text="Github"></NudgedButton>
            </template>
        </InfoLandingPage>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { usePage } from '../services/usePage';
import InfoLandingPage from '../components/InfoLandingPage.vue';
import HeadlineDotText from '../components/HeadlineDotText.vue';
import NudgedButton from '../components/NudgedButton.vue';
import ProjectOnePic from '../assets/SPAsS/study_stock.jpg';

const { pageState, scrollOff } = usePage();

function linkFromOne() {
    scrollOff();
    pageState.transitionBehaviour = 'clickTransOut';
    router.push('/projectone');
}
</script>

<style scoped>


</style>
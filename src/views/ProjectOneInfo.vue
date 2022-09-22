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
                <GithubTextBtn/>
            </template>
        </InfoLandingPage>
        <InfoMiddleImage>
            <template #default>
                <img id="info-middle-img-loader" src="@/assets/SPAsS/Loader.png">
            </template>
        </InfoMiddleImage>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { usePage } from '../services/usePage';
import InfoLandingPage from '../components/InfoLandingPage.vue';
import HeadlineDotText from '../components/HeadlineDotText.vue';
import ProjectOnePic from '../assets/SPAsS/study_stock.jpg';
import GithubTextBtn from '../components/GithubTextBtn.vue';
import InfoMiddleImage from '../components/InfoMiddleImage.vue';
import { onMounted } from 'vue';

const { pageState, scrollOn, scrollOff } = usePage();

onMounted(() => {
    pageState.scroll = true;
    scrollOff();
});

function linkFromOne() {
    scrollOff();
    pageState.transitionBehaviour = 'clickTransOut';
    router.push('/projectone');
}
</script>

<style scoped>

#info-middle-img-loader {
    object-fit: fill;
    height: 100%;
    max-width: 100%;
}

</style>
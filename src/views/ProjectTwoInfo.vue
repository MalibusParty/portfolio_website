<template>
    <div class="info-page-content">
        <InfoLandingPage :img-path="ProjectTwoPic">
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
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { usePage } from '@/services/usePage';
import InfoLandingPage from '@/components/InfoLandingPage.vue';
import HeadlineDotText from '@/components/HeadlineDotText.vue';
import GithubTextBtn from '@/components/GithubTextBtn.vue';
import { onMounted } from 'vue';
import ProjectTwoPic from '@/assets/Ebay_Klon/second-hand-stock.jpg'


const { pageState, scrollOn, scrollOff } = usePage();

onMounted(() => {
    pageState.scroll = true;
    scrollOff();
});

function linkFromTwo() {
    scrollOff();
    pageState.transitionBehaviour = 'clickTransOut';
    router.push('/projecttwo');
}

</script>

<style scoped>

</style>
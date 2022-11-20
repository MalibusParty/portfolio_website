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
            <template #technologies>
                <HeaderLineListComponent>
                    <template #headline>Technologies</template>
                    <template #default>
                        <ul>
                            <li>Java</li>
                            <li>JavaFX</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
            <template #goals>
                <HeaderLineListComponent>
                    <template #headline>Goals</template>
                    <template #default>
                        <ul>
                            <li>Using MVC-Architecture</li>
                            <li>Team based Software Development</li>
                            <li>Utilizing Git</li>
                            <li>Waterfall project management</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
            <template #default>
                <img class="container-image" src="@/assets/SPAsS/Loader.png">
            </template>
            <template #tasks>
                <HeaderLineListComponent>
                    <template #headline>Tasks</template>
                    <template #default>
                        <ul>
                            <li>MVC-Pattern</li>
                            <li>Save and load study plans</li>
                            <li>Drag and drop functionality</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
            <template #challenges>
                <HeaderLineListComponent>
                    <template #headline>Challenges</template>
                    <template #default>
                        <ul>
                            <li>Correct documentation</li>
                            <li>Working as a team</li>
                            <li>Implementing according to spec</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
        </InfoMiddleImage>
        <InfoRightImage>
            <template #image>
                <img class="container-image" src="@/assets/SPAsS/programmansicht.png">
            </template>
            <template #default>
                <HeaderTextQuadComponent>
                    <template #headline>Main View</template>
                    <template #default>
                        <p>This is the main view, where one can see the current curriculum and which subject is passed. If a given subject is passed and has a grade, the average grade is updated. It's also possible to save the current curriculum.</p>
                    </template>
                </HeaderTextQuadComponent>
            </template>
        </InfoRightImage>
        <InfoLeftImage>
            <template #default>
                <HeaderTextQuadComponent>
                    <template #headline>Course-Selection</template>
                    <template #default>
                        <p>For a given course of studies, all the subjects in that course are loaded at the beginning. If the minimum requirement for a specific subject is passed, it becomes available to drag down in the curriculum. Otherwise, an error message is shown to indicate which requirements haven't been met yet.</p>
                    </template>
                </HeaderTextQuadComponent>
            </template>
            <template #image>
                <img class="container-image" src="@/assets/SPAsS/modulauswahl.png">
            </template>
        </InfoLeftImage>
        <ImpressumContainer/>
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
import HeaderLineListComponent from '../components/HeaderLineListComponent.vue';
import InfoRightImage from '../components/InfoRightImage.vue';
import HeaderTextQuadComponent from '../components/HeaderTextQuadComponent.vue';
import InfoLeftImage from '../components/InfoLeftImage.vue';
import ImpressumContainer from '../components/ImpressumContainer.vue';

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

.container-image {
    object-fit: contain;
    height: 100%;
    max-width: 100%;
}

</style>
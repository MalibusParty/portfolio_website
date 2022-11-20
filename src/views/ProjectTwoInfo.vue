<template>
    <div class="info-page-content">
        <InfoLandingPage :img-path="ProjectTwoPic">
            <template #left-side-headline>
                <HeadlineDotText>
                    <template #headline>Ebay Clone</template>
                    <template #default>Marketplace</template>
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
                            <li>Spring Boot</li>
                            <li>Vue3</li>
                            <li>Thymeleaf</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
            <template #goals>
                <HeaderLineListComponent>
                    <template #headline>Goals</template>
                    <template #default>
                        <ul>
                            <li>Client-Server-Architecture</li>
                            <li>Learning a modern webframework</li>
                            <li>Server-Side Rendering</li>
                            <li>Learning Spring Boot</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
            <template #default>
                <img class="container-image" src="@/assets/Ebay_Klon/stock_shopping.jpg">
            </template>
            <template #tasks>
                <HeaderLineListComponent>
                    <template #headline>Tasks</template>
                    <template #default>
                        <ul>
                            <li>Spring Boot Backend</li>
                            <li>Vue3 Frontend for bidding</li>
                            <li>Thymeleaf Frontend to post items</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
            <template #challenges>
                <HeaderLineListComponent>
                    <template #headline>Challenges</template>
                    <template #default>
                        <ul>
                            <li>Learning 3 technologies at once</li>
                        </ul>
                    </template>
                </HeaderLineListComponent>
            </template>
        </InfoMiddleImage>
        <InfoRightImage>
            <template #image>
                <img class="container-image" src="@/assets/Ebay_Klon/thymeleaf.png">
            </template>
            <template #default>
                <HeaderTextQuadComponent>
                    <template #headline>Thymeleaf</template>
                    <template #default>
                        <p>Thymeleaf was used to register a user. After the registration, the user can change their profile, post items to be sold and login to the Vue3 page. If the item has a valid place to be picked up it's possible to look up that place on OpenStreetMap. It's also possible to change the language of the page from German to English and Dutch.</p>
                    </template>
                </HeaderTextQuadComponent>
            </template>
        </InfoRightImage>
        <InfoLeftImage>
            <template #default>
                <HeaderTextQuadComponent>
                    <template #headline>Vue3</template>
                    <template #default>
                        <p>The landing page in the Vue-frontend asks for a login on loading. After logging in, the various items posted in the Thymeleaf-page can be seen and can be searched. When clicking on a specific item, one can see all the offers and make an offer. After the time on the item is up, no other bids are accepted.</p>
                    </template>
                </HeaderTextQuadComponent>
            </template>
            <template #image>
                <img class="container-image" src="@/assets/Ebay_Klon/api.png">
            </template>
        </InfoLeftImage>
        <ImpressumContainer/>
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
import InfoMiddleImage from '@/components/InfoMiddleImage.vue';
import HeaderLineListComponent from '@/components/HeaderLineListComponent.vue';
import InfoLeftImage from '@/components/InfoLeftImage.vue';
import InfoRightImage from '@/components/InfoRightImage.vue';
import ImpressumContainer from '@/components/ImpressumContainer.vue';
import HeaderTextQuadComponent from '@/components/HeaderTextQuadComponent.vue';



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

.spacing {
    height: 50%;
    width: 35%;
    background-color: aqua;
}

.container-image {
    object-fit: contain;
    height: 100%;
    max-width: 100%;
}
</style>
<script setup lang="ts">
import { RouterView } from "vue-router";
import PageIndicator from "./components/PageIndicator.vue";
import { usePage } from '@/services/usePage';
import MenuBar from "./components/MenuBar.vue";
import BackFromInfoButton from '@/components/BackFromInfoButton.vue';
import ScrollDownInfo from './components/ScrollDownInfo.vue';

const { pageState, wheelListener, getCurrentPage } = usePage();

window.addEventListener('wheel', wheelListener);

</script>

<template>

    <div class="main">
        <div id="menu-bar">
            <MenuBar></MenuBar>
        </div>
        <div id="scroll-stuff" v-if="pageState.currentPage === 0 || !pageState.scroll">
            <ScrollDownInfo/>
        </div>
        <div id="back-from-info-btn">
            <BackFromInfoButton/>
        </div>
        <div id="page-indicator" v-if="pageState.scroll">
            <PageIndicator :page-count="3" :current-page="pageState.currentPage" />
        </div>
        <div id="router-box">
            <RouterView v-slot="{ Component }">
                <Transition :name="pageState.transitionBehaviour" mode="out-in">
                    <component :is="Component"></component>
                </Transition>
            </RouterView>
        </div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    top: 0;
    left: 0;
    margin: 0;
    background-image: linear-gradient(165deg, #191970, #000000);
    overflow-x: hidden;
}

#menu-bar {
    top: 0;
    width: 100%;
    position: fixed;
    z-index: 10;
}

#scroll-stuff {
    position: absolute;
    bottom: 130px;
    left: -70px;
}

#page-indicator {
    position: fixed;

    top: 45vh;
    left: 1.5vw;
}

#back-from-info-btn {
    position: fixed;
    margin-top: calc(3vh + 85px);
    margin-left: 2vw;
}

#router-box {
    height: 100vh;
}

/* Route Transitions */
.scrollTransDown-enter-from {
    opacity: 0;
    transform: translateY(100px);
}

.scrollTransDown-enter-active {
    transition: all 0.3s ease-out;
}

.scrollTransDown-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}

.scrollTransDown-leave-active {
    transition: all 0.3s ease-in;
}

.scrollTransUp-enter-from {
    opacity: 0;
    transform: translateY(-100px);
}

.scrollTransUp-enter-active {
    transition: all 0.3s ease-out;
}

.scrollTransUp-leave-to {
    opacity: 0;
    transform: translateY(100px);
}

.scrollTransUp-leave-active {
    transition: all 0.3s ease-in;
}

.clickTransIn-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.clickTransIn-enter-active {
    transition: all 0.3s ease-out;
}

.clickTransIn-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.clickTransIn-leave-active {
    transition: all 0.3s ease-out;
}

.clickTransOut-enter-from {
    opacity: 0;
    transform: translateX(-100px);
}

.clickTransOut-enter-active {
    transition: all 0.3s ease-out;
}

.clickTransOut-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.clickTransOut-leave-active {
    transition: all 0.3s ease-out;
}
</style>
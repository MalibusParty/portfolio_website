<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import PageIndicator from "./components/PageIndicator.vue";
import router from "./router";
import { usePage } from '@/services/usePage';
import { computed } from "@vue/reactivity";
import MenuBar from "./components/MenuBar.vue";
import BackFromInfoButton from '@/components/BackFromInfoButton.vue';

const { pageState, wheelListener, getCurrentPage } = usePage();

window.addEventListener('wheel', wheelListener);

</script>

<template>

    <div class="main">
        <MenuBar></MenuBar>
        <div id="scroll-stuff" v-if="pageState.currentPage === 0">
            <div id="scroll-line"></div>
            <div id="scroll-text">SCROLLDOWN</div>
        </div>
        <div id="back-from-info-btn">
            <BackFromInfoButton/>
        </div>
        <div id="page-indicator" v-if="pageState.scroll">
            <PageIndicator :page-count="3" :current-page="pageState.currentPage" />
        </div>

        <RouterView v-slot="{ Component }">
            <Transition :name="pageState.transitionBehaviour" mode="out-in">
                <component :is="Component"></component>
            </Transition>
        </RouterView>
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
    overflow: hidden;
}

MenuBar {
    position: fixed;
    z-index: 10;
}

#scroll-stuff {
    display: flex;
    flex-direction: column;

    bottom: 0;
    left: -1vw;

    position: fixed;
}

#scroll-line {
    border-left: 4px solid white;
    height: 10vh;
    margin-left: 6vh;
}

#scroll-text {
    position: fixed;
    bottom: 16vh;

    transform: rotate(90deg);

    font-family: 'Arial', sans-serif;
    text-align: center;
    font-size: 1.7vh;
    font-weight: 100;
    letter-spacing: 0.2vh;
    color: white;
}

#page-indicator {
    position: fixed;

    top: 45vh;
    left: 1.5vw;
}

#back-from-info-btn {
    position: absolute;
    margin-top: 3vh;
    margin-left: 2vw;
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
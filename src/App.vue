<script setup lang="ts">
import { RouterView } from "vue-router";
import PageIndicator from "./components/PageIndicator.vue";
import { usePage } from '@/services/usePage';
import MenuBar from "./components/MenuBar.vue";
import BackFromInfoButton from '@/components/BackFromInfoButton.vue';
import ScrollDownInfo from './components/ScrollDownInfo.vue';
import { onMounted } from "vue";
import NavigationMenu from "./components/NavigationMenu.vue";

const { pageState, getCurrentPage, getPageLink, scrollOn } = usePage();

scrollOn();

onMounted(() => {
    pageState.currentPage = getCurrentPage();
});

</script>

<template>

    <div class="main">
        <div id="menu-bar">
            <MenuBar></MenuBar>
        </div>
        <Transition name="menu-transition">
            <div id="navigation-menu-box" v-if="pageState.menuOpen">
                <NavigationMenu></NavigationMenu>
            </div>
        </Transition>
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
    z-index: 11;
}

#scroll-stuff {
    position: absolute;
    bottom: 131px;
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

.info-page-content {
    top: 0;
    left: 0;
    margin: 0;
    background-image: linear-gradient(165deg, #191970, #000000);
}

/* List Marker color */
ul {
    list-style: none;
}

ul li::before {
    content: "\2022";
    color: #FF7A50;
    font-weight: bold;
    font-size: 22pt;
    line-height: 14pt;
    display: inline-block;
    width: 0.8em;
    margin-left: -1.3em;
}

/* Menu transition */


.menu-transition-enter-from,
.menu-transition-leave-to {
    transform: translateX(450px);
}

.menu-transition-enter-active,
.menu-transition-leave-active {
    transition: all 0.3s ease-in;
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

/* Scrollbar */

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #191970;
}

::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
}
</style>
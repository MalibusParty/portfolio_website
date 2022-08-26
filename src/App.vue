<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import PageIndicator from "./components/PageIndicator.vue";
import router from "./router";
import { usePage } from '@/services/usePage';
import { computed } from "@vue/reactivity";

const { pageState, wheelListener, getCurrentPage} = usePage();

window.addEventListener('wheel', wheelListener);

</script>

<template>
<div class="main">
  <div id="header-btns">
    <div id="github-btn"></div>
    <div id="menu-btn"></div>
  </div>
  <div id="scroll-stuff" v-if="pageState.currentPage === 0">
    <div id="scroll-line"></div>
    <div id="scroll-text">SCROLLDOWN</div>
  </div>
  <div id="page-indicator"><PageIndicator :page-count="3" :current-page="pageState.currentPage"/></div>

  <RouterView v-slot="{ Component }">
    <Transition :name="pageState.transitionBehaviour" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

body {
  top: 0;
  left: 0;
  margin: 0;
  background-color: rgb(39, 39, 39);
  overflow: hidden;
}

#header-btns {
  display: flex;
  flex-direction: row;
  position: fixed;
  right: 1.5vw;
  top: 1vh;
  justify-content: center;
  align-items: center;
}

#menu-btn {
  background-image: url('@/assets/burger_btn_placeholder.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 8vh;
  width: 8vh;
}

#github-btn {
  background-image: url('@/assets/GitHub-Mark-Light-120px-plus.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 6vh;
  width: 6vh;
  margin-right: 0.5vw;
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

  font-family: 'Roboto', sans-serif;
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

#menu-btn:hover {
  filter: drop-shadow(0 0 0.75rem white);
}

#github-btn:hover {
  filter: drop-shadow(0 0 0.75rem white)
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

/* global buttons */
.link-btn {
  padding: 20px;
  border-radius: 20px;
  border: solid 3px white;
  font-size: 24pt;
  font-weight: bold;
  background-color: rgb(255, 163, 83);
  cursor: pointer;
}

.link-btn:hover {
  background-color: rgb(230, 139, 60);
}
</style>
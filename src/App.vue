<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PixelGrid from "./components/PixelGrid.vue";

</script>

<template>
<div class="main">
  <div id="menu-btn"></div>
  <div id="github-btn"></div>
  <div id="scroll-line"></div>
  <div id="scroll-text">SCROLLDOWN</div>
  <nav>
    <RouterLink to="/"></RouterLink>
  </nav>
  <RouterView />
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
}

#menu-btn {
  position: fixed;
  background-image: url('@/assets/burger_btn_placeholder.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 10vh;
  width: 10vh;
  right: 1.5vw;
  top: 1vh;
}

#github-btn {
  position: fixed;
  background-image: url('@/assets/GitHub-Mark-Light-120px-plus.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 8vh;
  width: 8vh;
  right: 8vw;
  top: 2vh;
}

#scroll-line {
  position: fixed;
  border-left: 4px solid white;
  height: 10vh;

  bottom: 0px;
  left: 3vw;
}

#scroll-text {
  position: fixed;
  bottom: 16vh;
  left: 0.1vw;
  

  transform: rotate(90deg);

  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 1.7vh;
  font-weight: 100;
  letter-spacing: 0.2vh;
  color: white;
}

#menu-btn:hover {
  filter: drop-shadow(0 0 0.75rem white);
}

#github-btn:hover {
  filter: drop-shadow(0 0 0.75rem white)
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import PageIndicator from "./components/PageIndicator.vue";
import router from "./router";
import { usePage } from '@/services/usePage';

const { pageState, wheelListener, getCurrentPage} = usePage();

window.addEventListener('wheel', wheelListener);


// let throttled = false;
// let currentPage = ref(getCurrentPage());
// const pageCount = 3;

// currentPage.value = getCurrentPage();

// window.addEventListener('wheel', wheelListener);

// function wheelListener(event: WheelEvent) {
//   if(Math.abs(event.deltaY) < 30) return;
//   if(!throttled) {
//     throttled = true;
//     if(event.deltaY < 0) {
//       currentPage.value -= (currentPage.value === 0) ? 0 : 1;
//     } else {
//       currentPage.value += (currentPage.value < pageCount-1) ? 1 : 0;
//     }
    
//     switch(currentPage.value) {
//       case 0:
//         router.push('/');
//         break;
//       case 1:
//         router.push('/projectone');
//         break;
//       case 2:
//         router.push('/projecttwo');
//         break;
//     }
    
//     setTimeout(() => {
//       throttled = false;
//     }, 500);
//   }
// }

// function getCurrentPage() {
//   let url =  window.location.href.split('/');
//   const urlStr = url[url.length - 1];
//   console.log(urlStr);
//   switch(urlStr) {
//     case '':
//       return 0;
//     case 'projectone':
//       return 1;
//     case 'projecttwo':
//       return 2;
//     default:
//       return 0;
//   }
// }

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
</style>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import PageIndicator from "./components/PageIndicator.vue";
import router from "./router";


const route = useRoute();

let throttled = false;
let currentPage = ref(getCurrentPage());
const pageCount = 3;

currentPage.value = getCurrentPage();

window.addEventListener('wheel', (event) => {
  if(!throttled) {
    throttled = true;
    if(event.deltaY < 0) {
      currentPage.value -= (currentPage.value === 0) ? 0 : 1;
    } else {
      currentPage.value += (currentPage.value < pageCount-1) ? 1 : 0;
    }
    
    switch(currentPage.value) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/projectone');
        break;
      case 2:
        router.push('/projecttwo');
        break;
    }
    
    setTimeout(() => {
      throttled = false;
    }, 500);
  }
});

function getCurrentPage() {
  let url =  window.location.href.split('/');
  const urlStr = url[url.length - 1];

  switch(urlStr) {
    case '':
      return 0;
    case 'projectone':
      return 1;
    case 'projecttwo':
      return 2;
    default:
      return 0;
  }
}

</script>

<template>
<div class="main">
  <div id="menu-btn"></div>
  <div id="github-btn"></div>
  <div id="scroll-line"></div>
  <div id="scroll-text">SCROLLDOWN</div>
  <div id="page-indicator"><PageIndicator :page-count="3" :current-page="currentPage"/></div>

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
  left: 2vw;
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

#page-indicator {
  position: fixed;

  top: 45vh;
  left: 2vw;
}

#menu-btn:hover {
  filter: drop-shadow(0 0 0.75rem white);
}

#github-btn:hover {
  filter: drop-shadow(0 0 0.75rem white)
}
</style>
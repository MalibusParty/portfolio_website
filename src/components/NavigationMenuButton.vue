<template>
    <div id="nav-btn-container" @click="openMenu()" :class="{ animate: pageState.menuOpen }">
        <div id="nav-btn-lines">
            <div id="upper-nav-line" :class="{ animate: pageState.menuOpen }"></div>
            <div id="middle-nav-line" :class="{ animate: pageState.menuOpen }"></div>
            <div id="lower-nav-line" :class="{ animate: pageState.menuOpen }"></div>
        </div>
        <Transition name="open-click-plane">
            <div id="nav-click-plane" v-if="pageState.menuOpen"></div>
        </Transition>
    </div>
</template>


<script setup lang="ts">
import { usePage } from '@/services/usePage';
const { pageState } = usePage();

function openMenu() {
    pageState.menuOpen = !pageState.menuOpen;
}


</script>


<style scoped>
#nav-btn-container {
    height: 85px;
    width: 85px;
    display: grid;
    place-items: center;
}

#nav-btn-lines:hover {
    filter: drop-shadow(0px 0px 3px white);
}

#nav-click-plane {
    position: fixed;
    width: calc(100vw - 450px);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    top: 85px;
    left: 0;
}

#upper-nav-line {
    background-color: white;
    width: 50px;
    height: 3px;
    margin: 0 auto 12px auto;
    transition: transform 0.5s;
    transform-origin: left;
}

#upper-nav-line.animate {
    transform: rotate(37deg);

}

#middle-nav-line {
    background-color: white;
    width: 50px;
    height: 3px;
    margin: auto;
    margin: 0 auto 12px auto;


    transition: opacity 0.5s;
}

#middle-nav-line.animate {
    opacity: 0;
}

#lower-nav-line {
    background-color: white;
    width: 50px;
    height: 3px;
    margin: auto;

    transition: transform 0.5s;
    transform-origin: left;
}

#lower-nav-line.animate {
    transform: rotate(-37deg);
    
}

.open-click-plane-enter-from {
    opacity: 0;
}

.open-click-plane-enter-active {
    transition: opacity 0.5s ease-in;
}
</style>
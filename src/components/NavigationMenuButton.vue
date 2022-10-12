<template>
    <div id="nav-btn-container" @click="openMenu()">
        <div id="nav-btn-lines">
            <div id="upper-nav-line"></div>
            <div id="middle-nav-line"></div>
            <div id="lower-nav-line"></div>
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
    const menu = document.getElementById('nav-btn-container');
    const middleLine = document.getElementById('middle-nav-line');
    const upperLine = document.getElementById('upper-nav-line');
    const lowerLine = document.getElementById('lower-nav-line');
    console.log('working');
    if(menu != null && middleLine != null && upperLine != null && lowerLine != null) {
        if(menu.classList.contains('animate')) {
            menu.classList.remove('animate');
            middleLine.classList.remove('animate');
            upperLine.classList.remove('animate');
            lowerLine.classList.remove('animate');
            pageState.menuOpen = false;
        } else {
            menu.classList.add('animate');
            middleLine.classList.add('animate');
            upperLine.classList.add('animate');
            lowerLine.classList.add('animate');
            pageState.menuOpen = true;
        }
    }
}


</script>


<style scoped>
#nav-btn-container {
    height: 85px;
    width: 85px;
    display: grid;
    place-items: center;
}

/* #nav-btn-lines {
    background-color: black;
} */

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
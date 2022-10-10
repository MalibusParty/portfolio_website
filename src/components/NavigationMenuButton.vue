<template>
    <div id="nav-btn-container" @click="openMenu()">
        <div id="nav-btn-lines">
            <div id="upper-nav-line"></div>
            <div id="middle-nav-line"></div>
            <div id="lower-nav-line"></div>
        </div>
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
    console.log('menu fnct called');
    if(menu != null && middleLine != null && upperLine != null && lowerLine != null) {
        if(menu.classList.contains('animate')) {
            menu.classList.remove('animate');
            middleLine.classList.remove('animate');
            upperLine.classList.remove('animate');
            lowerLine.classList.remove('animate');
            console.log('animate removed');
        } else {
            menu.classList.add('animate');
            middleLine.classList.add('animate');
            upperLine.classList.add('animate');
            lowerLine.classList.add('animate');
            console.log('animate added');
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
</style>
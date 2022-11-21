<template>
    <div id="menu-flex-container">
        <div id="logo-flex-item"></div>
        <div id="menu-right-side-container">
            <div id="menu-flex-item"><NavigationMenuButton></NavigationMenuButton></div>
            <div id="github-flex-item" @click="redirectToGithub"></div>
        </div>
    </div>
</template>


<script setup lang="ts">
import NavigationMenuButton from "./NavigationMenuButton.vue";
import { usePage } from '@/services/usePage';

const { getGithubLink } = usePage();

function redirectToGithub() {
    window.open(getGithubLink(), '_blank')?.focus();
}

</script>


<style scoped>
#menu-flex-container {
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(165deg, #191970, #121243);
    height: 85px;
    width: 100vw;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}

#logo-flex-item {
    background-image: url('@/assets/LogoInv.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 150px;
}

#menu-right-side-container {
    display: flex;
    width: 100%;
    height: 85px;
    flex-direction: row-reverse;
}

#github-flex-item {
    background-image: url('@/assets/GitHub-Mark-Light-120px-plus.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    margin: 15px 0px 15px 0px;
}

#github-flex-item:hover {
    filter: drop-shadow(0px 0px 3px white);
}

#menu-flex-item {
    width: 50px;
    margin-right: 30px;
}
</style>
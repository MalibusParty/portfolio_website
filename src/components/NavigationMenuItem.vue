<template>
    <div id="nav-menu-item-container" @click="linkToPage()">
        <div id="menu-item-indicator"></div>
        <div id="menu-item-container">
            <div id="menu-item-left"><slot></slot></div>
            <div id="menu-item-dot"></div>
            <div id="menu-item-right"><slot name="right-side"></slot></div>
        </div>
    </div>
</template>


<script setup lang="ts">
import router from '@/router';


const props = defineProps<{
    menuItemLink: string
}>();

function linkToPage() {
    router.push(props.menuItemLink);
}

</script>


<style scoped>

#nav-menu-item-container {
    display: flex;
    flex-direction: row;
    width: 100%;
}

#menu-item-container {
    font-family: 'Segoe UI', 'Arial', sans-serif;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 20pt;
    font-weight: bold;
    align-items: center;
    border-bottom: 3px solid #FF7A50;
    margin-bottom: 15px;
    padding-bottom: 15px;
    width: 100%;
    cursor: pointer;
}

#menu-item-indicator {
    width: 10px;
    margin-bottom: 30px;
}

#nav-menu-item-container:hover > #menu-item-indicator{
    background-color: #FF7A50;
}

#menu-item-dot {
    background-color: #FF7A50;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 12px;
}

</style>
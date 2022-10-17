<template>
    <div id="menu-container">
        <NavigationMenuItem menu-item-link="/">
            <template #default>
                Home
            </template>
            <template #right-side>
                Felix Ruf
            </template>
        </NavigationMenuItem>
        <NavigationMenuItem menu-item-link="/projectone">
            <template #default>
                Project One
            </template>
            <template #right-side>
                SPAsS
            </template>
        </NavigationMenuItem>
        <NavigationMenuItem menu-item-link="/projecttwo">
            <template #default>
                Project Two
            </template>
            <template #right-side>
                Ebay-Clone
            </template>
        </NavigationMenuItem>
        <NavigationMenuItem menu-item-link="/impressum">
            <template #default>
                Impressum
            </template>
            <template #right-side>
                Legal
            </template>
        </NavigationMenuItem>
    </div>
</template>


<script setup lang="ts">
import NavigationMenuItem from "./NavigationMenuItem.vue";

</script>


<style scoped>

#menu-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 85px);
    max-width: 450px;
    width: 100vw;

    top: 85px;
    right: 0;

    background-image: linear-gradient(#191970, #000000);
    box-shadow: -3px 0px 3px rgba(0, 0, 0, 0.25);
    z-index: 10;

    padding: 15px 40px;
}


</style>
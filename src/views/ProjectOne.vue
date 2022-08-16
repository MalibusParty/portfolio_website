<template>
    <div id="testPage1">
        <h1 @click="removeScroll">Project 1</h1>
    </div>
</template>


<script setup lang="ts">

function removeScroll() {
    // window.removeEventListener('wheel', wheelListener);
}

</script>

<style scoped>

#testPage1 {
    background-color: aqua;
    height: 100vh;
    width: 100vw;
}

h1 {
    position: absolute;
    margin-left: 50%;
    margin-right: auto;
    margin-top: 50vh;

    padding: 21.5vh;

    font-size: 60pt;
    background-color: crimson;
}
</style>
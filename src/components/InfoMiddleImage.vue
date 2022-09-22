<template>
    <div class="info-middle-page-container">
        <div class="info-middle-tech"><slot name="technologies"></slot></div>
        <div class="info-middle-goals"><slot name="goals"></slot></div>
        <div class="info-middle-overview"><h2>Overview</h2></div>
        <div class="info-middle-image"><slot></slot></div>
        <div class="info-middle-tasks"><slot name="tasks"></slot></div>
        <div class="info-middle-challenges"><slot name="challenges"></slot></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.info-middle-page-container {
    display: grid;
    height: 90vh;
    width: 100vw;
    grid-template-columns: 30vw auto 30vw;
    grid-template-rows: 20vh 33vh 33vh;
    padding: 2vh 2vw;
}

.info-middle-tech {
    background-color: red;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.info-middle-goals {
    background-color: blue;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
}

.info-middle-overview {
    grid-area: 1 / 1 / 1 / 4;
    display: flex;
}

.info-middle-overview h2 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 5vh;
    font-family: 'Segoe UI', 'Arial', 'sans-serif';
    font-weight: bold;
    color: white;
    font-size: 70pt;
    padding: 0 40px;
    border-bottom: 5px solid #FF7A50;
}

.info-middle-image {
    background-color: yellow;
    grid-area: 2 / 2 / 4 / 2;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    place-self: center;
    height: 100%;
}

.info-middle-tasks {
    background-color: violet;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}

.info-middle-challenges {
    background-color: orangered;
    grid-column: 3 / 4;
    grid-row: 3 / 4;
}
</style>
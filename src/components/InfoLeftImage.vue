<template>
    <div class="info-left-container">
        <div class="info-left-img"><slot name="image"></slot></div>
        <div class="info-left-text"><slot></slot></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

@media (min-width: 993px) {
    .info-left-container {
        display: flex;
        flex-direction: row;
        height: 90vh;
        min-height: 700px;
        width: 100vw;
        padding: 2vh 2vw;
    }

    .info-left-text {
        width: 35%;
        height: 100%;
        display: grid;
        place-content: center;
        padding-left: 2%;
    }

    .info-left-img {
        height: 100%;
        width: 60%;
        margin-left: 2%;
        margin-right: 2%;
    }
}

@media (max-width: 992px) {
    .info-left-container {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }

    .info-left-text {
        width: 90%;
        display: grid;
        place-content: center;
        order: 2;
        place-self: center;
        margin-top: 3vh;
    }

    .info-left-img {
        height: 100%;
        maX-width: 100%;
        order: 1;
        place-self: center;
        margin-top: 5vh;
    }
}
</style>
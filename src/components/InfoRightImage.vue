<template>
    <div class="info-right-container">
        <div class="info-right-text"><slot></slot></div>
        <div class="info-right-img"><slot name="image"></slot></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@media (min-width: 491px) {
    .info-right-container {
        display: flex;
        flex-direction: row;
        height: 90vh;
        min-height: 900px;
        width: 100vw;
        padding: 2vh 2vw;
    }
    
    .info-right-text {
        width: 35%;
        height: 100%;
        display: grid;
        place-content: center;
        padding-right: 2%;
    }
    
    .info-right-img {
        height: 100%;
        width: 60%;
        margin-left: 2%;
    }
}

@media (max-width: 490px) {
    .info-right-container {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }
    
    .info-right-text {
        width: 90%;
        display: grid;
        place-content: center;
        order: 2;
        place-self: center;
        margin-top: 3vh;
    }
    
    .info-right-img {
        height: 100%;
        max-width: 100%;
        order: 1;
        place-self: center;
        margin-top: 5vh;
    }
}
</style>
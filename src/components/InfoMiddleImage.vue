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

@media (min-width: 491px) {
    .info-middle-page-container {
        display: grid;
        height: 90vh;
        min-height: 900px;
        width: 100vw;
        grid-template-columns: 30vw auto 30vw;
        grid-template-rows: 24% 38% 38%;
        padding: 2vh 2vw;
        margin-bottom: 5vh;
    }
    
    .info-middle-tech {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    
    .info-middle-goals {
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
        grid-area: 2 / 2 / 4 / 2;
        place-self: center;
        height: 100%;
    }
    
    .info-middle-tasks {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }
    
    .info-middle-challenges {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }

}

@media (max-width: 490px) {
    .info-middle-page-container {
        display: flex;
        flex-direction: column;
    }

    .info-middle-overview h2 {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        margin-bottom: 5vh;
        font-family: 'Segoe UI', 'Arial', 'sans-serif';
        font-weight: bold;
        color: white;
        font-size: 30pt;
        padding: 0 40px;
        border-bottom: 5px solid #FF7A50;
    }

    .info-middle-overview {
        order: 1;
        width: 90vw;
        margin: auto;
        display: flex;
    }

    .info-middle-image {
        order: 2;
        max-width: 90%;
        height: 50vh;
        margin: auto;
    }

    .info-middle-tech {
        order: 3;
        margin-top: 3vh;
    }

    .info-middle-goals {
        order: 4;
        margin-top: 3vh;
    }

    .info-middle-tasks {
        order: 5;
        margin-top: 3vh;
    }

    .info-middle-challenges {
        order: 6;
        margin-top: 3vh;
    }
}
</style>
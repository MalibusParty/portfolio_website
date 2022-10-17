<template>
    <TwoEdgeContainer>
        <div id="header-main-text-container">
            <div id="header-main-headline-item"><slot name="headline"></slot></div>
            <div id="header-main-line-item"></div>
            <div id="header-main-text-item"><slot></slot></div>
        </div>
    </TwoEdgeContainer>
</template>


<script setup lang="ts">
import TwoEdgeContainer from "./TwoEdgeContainer.vue";

</script>


<style scoped>
@media (min-width: 491px) {
    #header-main-text-container {
        display: flex;
        flex-direction: column;
        font-family: 'Segoe UI', 'Arial', 'sans-serif';
    }
    
    #header-main-headline-item {
        color: white;
        font-weight: bold;
        font-size: 22pt;
        line-height: 20pt;
        margin-top: -20px;
    }
    
    #header-main-text-item {
        color: white;
        font-size: 12pt;
    }
    
    #header-main-line-item {
        border-top: 5px solid #FF7A50;
        margin-right: 15%;
    }

}

@media (max-width: 490px) {
    #header-main-text-container {
        display: flex;
        flex-direction: column;
        font-family: 'Segoe UI', 'Arial', 'sans-serif';
    }

    #header-main-headline-item {
        color: white;
        font-weight: bold;
        font-size: 6vw;
        line-height: 18pt;
        margin-top: -28px;
    }

    #header-main-text-item {
        color: white;
        font-size: 4vw;
        margin-bottom: -18px;
    }

    #header-main-line-item {
        border-top: 5px solid #FF7A50;
        margin-right: 15%;
    }
}
</style>
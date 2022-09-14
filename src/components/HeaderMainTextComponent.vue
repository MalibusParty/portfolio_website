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
#header-main-text-container {
    display: flex;
    flex-direction: column;
    font-family: 'Arial', 'sans-serif';
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
</style>
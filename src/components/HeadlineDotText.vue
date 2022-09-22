<template>
    <TwoEdgeContainer>
        <div class="headline-dot-container">
            <div class="headline-headline-item"><slot name="headline"></slot></div>
            <div class="headline-dot-item"></div>
            <div class="headline-text-item"><slot></slot></div>
        </div>
    </TwoEdgeContainer>
</template>

<script setup lang="ts">
import TwoEdgeContainer from "./TwoEdgeContainer.vue";

</script>

<style scoped>
.headline-dot-container {
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', 'Arial', 'sans-serif';
}

.headline-headline-item {
    color: white;
    font-weight: bold;
    font-size: 70pt;
    margin-top: -35px;
}

.headline-dot-item {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #FF7A50;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.headline-text-item {
    color: white;
    font-size: 32pt;
}
</style>
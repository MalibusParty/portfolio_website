<template>
    <QuadEdgeContainer>
        <div id="header-line-list-container">
            <div id="header-list-headline-item"><slot name="headline"></slot></div>
            <div id="header-list-line-item"></div>
            <div id="header-list-list-item"><slot></slot></div>
        </div>
    </QuadEdgeContainer>
</template>


<script setup lang="ts">
import QuadEdgeContainer from "./QuadEdgeContainer.vue";

</script>


<style scoped>

#header-line-list-container {
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', 'Arial', 'sans-serif';
}

@media(min-width: 993px) {
    
    #header-list-headline-item {
        color: white;
        font-weight: bold;
        font-size: 18pt;
        margin-top: -5px;
    }
    
    #header-list-list-item {
        color: white;
        font-size: 14pt;
    }

    #header-list-line-item {
        border-top: 5px solid #FF7A50;
        margin-right: 25%;
        margin-top: 20px;
    }
}

@media (max-width: 992px) {

    #header-list-headline-item {
        color: white;
        font-weight: bold;
        font-size: 18pt;
        line-height: 18pt;
        margin-top: -5px;
    }
    
    #header-list-list-item {
        color: white;
        font-size: 12pt;
    }
    
    #header-list-line-item {
        border-top: 5px solid #FF7A50;
        margin-right: 25%;
        margin-top: 20px;
    }
}
</style>
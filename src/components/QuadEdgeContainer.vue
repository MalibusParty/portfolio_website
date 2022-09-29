<template>
    <div id="two-edge-grid-container">
        <div id="two-edge-left-upper"></div>
        <div id="two-edge-right-upper"></div>
        <div id="two-edge-slot"><slot></slot></div>
        <div id="two-edge-left-bottom"></div>
        <div id="two-edge-right-bottom"></div>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>
#two-edge-grid-container {
    display: grid;
    grid-template-columns: 30px auto 30px;
    grid-template-rows: 30px auto 30px;
    width: 100%;
    height: fit-content;
    padding: 0% 10% 0% 10%;
}

#two-edge-left-upper {
    grid-area: 1 / 1;
    border-top: 5px solid #FF7A50;
    border-left: 5px solid #FF7A50;
}

#two-edge-right-upper {
    grid-area: 1 / 3;
    border-top: 5px solid #FF7A50;
    border-right: 5px solid #FF7A50;
}

#two-edge-left-bottom {
    grid-area: 3 / 1;
    border-bottom: 5px solid #FF7A50;
    border-left: 5px solid #FF7A50;
}

#two-edge-right-bottom {
    grid-area: 3 / 3;
    border-bottom: 5px solid #FF7A50;
    border-right: 5px solid #FF7A50;
}

#two-edge-slot {
    grid-area: 2 / 2;
    margin-bottom: -20px;
}
</style>
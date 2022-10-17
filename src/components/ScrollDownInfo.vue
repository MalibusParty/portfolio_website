<template>
    <div id="scroll-down-component">
        <div id="scroll-down-text">SCROLLDOWN</div>
        <div id="scroll-down-line"></div>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>

#scroll-down-component {
    display: flex;
    transform: rotate(90deg);
}

#scroll-down-text {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 12pt;
    line-height: 10pt;
    text-align: center;
    width: fit-content;
    color: white;
}

#scroll-down-line {
    border-bottom: 3px solid white;
    width: 100px;
}

</style>
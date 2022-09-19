<template>
    <div class="pic-and-number-container">
        <div class="pic-container">
            <div class="pic-item"></div>
        </div>
        <div id="number-item">1</div>
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>

.pic-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.pic-item {
    background-image: url('@/assets/SPAsS/study_stock.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    max-width: 100%;
    max-height: 100%;
    margin: 7% 10% 15% 0%;
    height: 100%;
}

.pic-and-number-container {
    width: 100%;
    height: 100%;
}

#number-item {
    display: grid;
    position: absolute;
    width: 15%;
    height: 50%;
    color: #FF7A50;
    font-size: 500pt;
    bottom: 50px;
    right: 20px;
    line-height: 0;
    font-family:Georgia, 'Times New Roman', Times, serif;
    place-content: center;
    filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.35));
}
</style>
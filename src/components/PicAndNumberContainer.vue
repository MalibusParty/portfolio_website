<template>
    <div class="pic-and-number-container">
        <div class="pic-container">
            <div id="pic-item">
                <div id="number-item">{{ pageNumber }}</div>
            </div>
        </div>
        
    </div>
</template>


<script setup lang="ts">
import { usePage } from '@/services/usePage';
import { onMounted } from 'vue';

const { getCurrentPage } = usePage();

const props = defineProps<{
    imgPath: string
}>();

onMounted(() => {
    const picEle = document.getElementById('pic-item');
    if(picEle != null) {
        picEle.style.backgroundImage = `url(${props.imgPath})`;
    }
})

const pageNumber = getCurrentPage();
</script>


<style scoped>

@media (min-width: 491px) {
    .pic-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    #pic-item {
    
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        object-fit: cover;
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
        position: relative;
        top: calc(100% - 190px);
        left: calc(100% - 230px);
        width: 15%;
        height: 50%;
        color: #FF7A50;
        font-size: 500pt;
        line-height: 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.35));
    }
}

@media(max-width: 490px) {
    .pic-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    #pic-item {
    
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        object-fit: cover;
        max-width: 100%;
        height: 100%;
    }
    
    .pic-and-number-container {
        width: 100%;
        height: 100%;
    }
    
    #number-item {
        position: relative;
        width: 15%;
        height: 50%;
        top: calc(100% - 100px);
        left: calc(100% - 110px);
        color: #FF7A50;
        font-size: 150pt;
        line-height: 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.35));
    }
}
</style>
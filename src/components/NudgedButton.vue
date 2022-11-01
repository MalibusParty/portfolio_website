<template>
    <div id="nudged-border-box" @click="linkToInfoPage"><p>{{ nudgedBtnText }}</p></div>
</template>


<script setup lang="ts">
import { usePage } from '@/services/usePage';
import router from '@/router';

const { getCurrentPage, getPageLink, scrollOff } = usePage();

const props = defineProps<{
    nudgedBtnText: string
}>();

function linkToInfoPage() {
    scrollOff();
    router.push(getPageLink()+ '/info');
}
</script>

<style scoped>

@media(min-width: 993px) {
    #nudged-border-box {
        color: white;
        border: 5px solid #FF7A50;
        text-align: center;
        width: fit-content;
        padding: 0px 40px 0px 40px;
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 18pt;
        line-height: 6pt;
        transform: skew(-30deg);
    }
    
    #nudged-border-box:hover {
        cursor: pointer;
        border: 5px dotted #FF7A50;
    }
    
    #nudged-border-box p {
        transform: skew(30deg);
    }
}

@media(max-width: 992px) {
    #nudged-border-box {
        color: white;
        border: 5px solid #FF7A50;
        text-align: center;
        width: fit-content;
        padding: 0px 6vw 0px 6vw;
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 4.5vw;
        line-height: 6pt;
        transform: skew(-30deg);
    }
    
    #nudged-border-box:hover {
        cursor: pointer;
        border: 5px dotted #FF7A50;
    }
    
    #nudged-border-box p {
        transform: skew(30deg);
    }
}


</style>
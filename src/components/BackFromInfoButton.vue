<template>
    <div @click="linkBackFromInfo" id="back-from-info-arrow" v-if="!pageState.scroll">
        <div id="arrow-head"></div>
    </div>
</template>


<script setup lang="ts">
import router from '@/router';
import { usePage } from '@/services/usePage';

const { pageState, scrollOn, getCurrentPage, getPageLink } = usePage();



function linkBackFromInfo() {
    scrollOn();
    pageState.transitionBehaviour = 'clickTransOut';
    router.push(getPageLink());
}


</script>


<style scoped>
#back-from-info-arrow {
    height: 70px;
    width: 70px;
    border: 5px solid white;
    border-radius: 50%;
    display: grid;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.35));
}

#arrow-head {
    border-top: 5px solid white;
    border-left: 5px solid white;
    transform: rotate(-45deg);
    height: 30px;
    width: 30px;
    place-self: center;
    margin-left: 10px;
}

#back-from-info-arrow:hover {
    border: 5px dotted #FF7A50;
}

#back-from-info-arrow:hover > #arrow-head {
    border-top: 5px dotted #FF7A50;
    border-left: 5px dotted #FF7A50;
}

</style>
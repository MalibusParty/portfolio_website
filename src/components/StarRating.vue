<template>
    <span id="starrating">
        <a v-for="i in maxsterne" :key="i" @click="sternGeklickt(i)">
            <i class="fas fa-star" v-bind:class="{ 'checked': i <= sternzahl }"></i>
        </a>
        &nbsp;
        <span class="zahlen">{{sternzahl}} / {{maxsterne}} ({{prozent}}%)</span>
        &nbsp;
        <span v-if="sternzahl === maxsterne">Super!</span>
        <span v-else-if="sternzahl <= 1">Buuh!</span>
        <span v-else>Da geht noch was</span>
    </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = withDefaults(
    defineProps<{
        maxsterne: number,
        sterne: number
        }>(),
        {maxsterne: 5}
)

const sternzahl = ref(props.sterne)

function sternGeklickt(i: number): void {
    if(i >= 0 && i <= props.maxsterne) {
        sternzahl.value = i
    }
}

const prozent = computed(() => (sternzahl.value / props.maxsterne) * 100)


</script>

<style scoped>

.zahlen {
    color: gray;
}

</style>
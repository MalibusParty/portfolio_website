<template>
    <div class="github-btn-container" @click="redirectToGithub"><p>Github</p></div>
</template>

<script setup lang="ts">
import { usePage } from '@/services/usePage';

const { getGithubLink } = usePage();

function redirectToGithub() {
    // window.location.href = getGithubLink();
    window.open(getGithubLink(), '_blank')?.focus();
}
</script>

<style scoped>
.github-btn-container {
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

.github-btn-container:hover {
    cursor: pointer;
    border: 5px dotted #FF7A50;
}

.github-btn-container p {
    transform: skew(30deg);
}
</style>
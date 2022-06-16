<script setup lang="ts">
import PixelGrid from "./components/PixelGrid.vue";

</script>

<template>
<div class="main">
  <PixelGrid :x-dimension="130" :y-dimension="130"/>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: rgb(39, 39, 39);
}

.main {
  width: 50vw;
  height: 50vh;
}
</style>
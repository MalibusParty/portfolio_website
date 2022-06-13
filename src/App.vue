<script setup lang="ts">
import PixelGrid from "./components/PixelGrid.vue";

</script>

<template>
<div class="main">
  <PixelGrid :x-dimension="100" :y-dimension="100"/>
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
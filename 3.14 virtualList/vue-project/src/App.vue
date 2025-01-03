<script setup>
import { ref } from "vue";
import VirtualList from "./components/VirtualList.vue";
const data = new Array(200).fill().map((x, i) => {
  return {
    id: i,
  };
});
const height = ref(window.innerHeight);
const itemH = 150;
const cache = 2;
window.addEventListener("resize", (e) => {
  height.value = window.innerHeight;
});
</script>

<template>
  <VirtualList :data :height :itemH :cache></VirtualList>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>

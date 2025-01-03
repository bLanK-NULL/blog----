<template>
  <div class="container" @scroll="handleScroll">
    <div class="lists">
      <Item
        v-for="item of props.data.slice(cacheStartIdx, cacheEndIdx)"
        :id="item.id"
        :key="item.id"
        :height="itemH"
        :top="item.id * itemH"
      ></Item>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Item from "./Item.vue";
const props = defineProps({
  data: Array,
  height: Number,
  itemH: Number,
  cache: Number,
});

const scrollTop = ref(0);
const startIdx = computed(() => Math.floor(scrollTop.value / props.itemH)); //2 -> 3
const cacheStartIdx = computed(() => Math.max(0, startIdx.value - props.cache)); // 0 -> 1
const cacheEndIdx = computed(() => {
  const len = Math.ceil(props.height / props.itemH);
  return Math.min(startIdx.value + len + props.cache, props.data.length);
}); // 8->9

function handleScroll(e) {
  scrollTop.value = e.currentTarget.scrollTop;
}
</script>

<style lang="css" scoped>
.container {
  height: v-bind(height + "px");
  overflow-y: scroll;
}
.lists {
  position: relative;
  height: v-bind("data.length * itemH + 'px'");
}
</style>

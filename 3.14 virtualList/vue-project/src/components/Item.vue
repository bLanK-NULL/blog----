<template>
  <div class="item">
    {{ id }}
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  height: Number,
  top: Number
});
</script>

<style lang="css" scoped>
.item {
  position: absolute;
  line-height: v-bind(height + "px");
  height: v-bind(height + "px");
  top: v-bind(top+"px");

  box-sizing: border-box;
  width: 100%;
  border: 2px solid pink;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
</style>

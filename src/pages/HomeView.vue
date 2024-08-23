<template>
  <div class="item-centers row q-pa-md">
    <TestList :items="items"></TestList>
  </div>
</template>

<script setup>
import TestList from "src/components/Test/TestList.vue";
const items = Array.from(Array(20), (_, index) => ({
  id: "A" + index,
  title: index + "번째 Test",
  view: 0,
  Thumbnail: "Page",
  uid: "uid",
  category: "카테고리" + index,
}));
</script>

<style lang="scss" scoped>
/* 스타일 코드가 여기에 들어갑니다. */
</style>

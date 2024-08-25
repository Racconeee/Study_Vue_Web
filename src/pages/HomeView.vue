<template>
  <div class="item-centers row q-pa-md">
    <TestList :items="testList"></TestList>
  </div>
</template>

<script setup>
import TestList from "src/components/Test/TestList.vue";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTestStore } from "@/stores/useTestStore";

const testStore = useTestStore();

const { fetchTestList } = testStore;
const { testList } = storeToRefs(testStore);
const a = () => {
  console.log(testList);
};

onMounted(() => {
  console.log("onMounted 호출");

  fetchTestList({ page: 0 }); // API 호출
});
</script>

<style lang="scss" scoped>
/* 스타일 코드가 여기에 들어갑니다. */
</style>

<template>
  <div class="bg-teal-2" :style="{ height: '100vh' }">
    <!-- <div>{{ $route.params.id }}</div> -->
    <!-- <div>{{ route }}</div> -->
    <!-- {{ quizList }} -->
    <div>
      <QuizChoice :items="quizList"></QuizChoice>
    </div>
  </div>
</template>

<script setup>
import QuizChoice from "@/pages/quiz/components/QuizChoice.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTestStore } from "@/stores/useTestStore";

const testStore = useTestStore();

const { fetchQuizList } = testStore;
const { quizList } = storeToRefs(testStore);

const route = useRoute();

onMounted(() => {
  fetchQuizList(route.params.id);
  console.log("quizList");
  console.log(quizList);
});
</script>

<style></style>

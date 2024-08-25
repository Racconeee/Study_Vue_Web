<template>
  <div>
    <div class="flex flex-center text-h4 q-pa-lg q-mb-xl">3/12</div>

    <section class="flex flex-center">
      <q-card :style="{ width: '80vw' }">
        <q-card-section>
          {{ items.quizQuestions[currentPage].quiz_question }}
        </q-card-section>
      </q-card>
    </section>
    <div class="q-ma-md flex flex-center column">
      <div
        class="q-pa-md q-gutter-sm"
        v-for="choice in items.quizQuestions[currentPage].choices || []"
        :key="choice.id"
      >
        <q-btn
          align="around"
          class="btn-fixed-width"
          color="brown-5"
          :label="choice.choice"
          icon="lightbulb_outline"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  items: {
    type: [Array, Object],
    required: true,
  },
});

const currentPage = ref(0);
console.log(props.items);
console.log(props.items);
console.log(props.items);
</script>

<style lang="scss" scoped></style>

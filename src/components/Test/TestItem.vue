<template>
  <q-item
    clickable
    v-ripple
    :to="`/quiz/${test_id}`"
    class="flex flex-center q-mt-sm"
  >
    <q-item-section
      class="flex flex-column items-center justify-center text-center"
    >
      <q-img
        :src="`/images/Thumbnail.png`"
        alt="Thumbnail"
        height="100px"
        width="100px"
        fit="cover"
      />
      <div>{{ testName }}</div>
      <div>조회수 : {{ views }}</div>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  test_id: {
    type: Number,
  },
  views: {
    type: Number,
    default: 0,
  },
  testName: {
    type: String,
  },
  filepath: {
    type: String,
  },
  filedownload: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>

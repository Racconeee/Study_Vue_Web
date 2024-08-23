<template>
  <q-item
    clickable
    v-ripple
    :to="`/quiz/${id}`"
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
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  view: {
    type: Number,
    default: 0,
  },
  uuid: {
    type: String,
  },
  Thumbnail: {
    type: String,
  },
  category: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>

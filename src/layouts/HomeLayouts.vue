<template>
  <q-layout view="hhh lpr fff" style="" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/home">
          <q-avatar class="q-ma-sm q-mr-md">
            <img src="/Study_FE/public/images/Thumbnail.png" />
          </q-avatar>
          <q-toolbar-title class="text-weight-bolder h1">
            피카츄
          </q-toolbar-title>
        </q-btn>
      </q-toolbar>
      <template class="flex justify-between">
        <q-btn
          class="text-weight-bolder"
          stretch
          flat
          label="Home"
          to="/home"
        />
        <q-btn
          class="text-weight-bolder"
          stretch
          flat
          label="수강하기"
          to="/home"
        />
        <q-btn
          class="text-weight-bolder"
          stretch
          flat
          label="온라인 강의 "
          to="/home"
        />
        <q-btn
          class="text-weight-bolder"
          stretch
          flat
          label="유튜브"
          to="/home"
        />
      </template>
    </q-header>

    <q-page-container :style="pageContainerStyles" class="bg-teal-2">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-teal-6">
      <q-toolbar>
        <q-toolbar-title>asdas dasda sdas </q-toolbar-title>
      </q-toolbar>
      <div>asd</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || "1080px",
  margin: "0 auto",
}));
</script>

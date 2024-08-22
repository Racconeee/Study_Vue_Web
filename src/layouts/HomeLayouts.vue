<template>
  <q-layout view="lHh Lpr lpp" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.png" />
            </q-avatar>
            피카츄
          </q-toolbar-title>
        </q-btn>
      </q-toolbar>
      <template class="flex justify-between " >
      <q-btn stretch flat label="Home" to="/home" />
      <q-btn stretch flat label="수강하기" />
      <q-btn stretch flat label="온라인 강의 " />
      <q-btn stretch flat label="유튜브" />
    </template>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
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

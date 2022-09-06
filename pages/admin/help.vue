<template>
  <div class="max-w-2xl p-6 ">
    <ContentDoc path="/help" class="prose text-stone-600 dark:text-stone-400"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const { pending, data: help } = await useAsyncData("help", async () =>
  queryContent("/help").findOne()
);
</script>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>
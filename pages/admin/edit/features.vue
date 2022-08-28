<template>
    <div>features</div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});
useHead({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Overview of all posts",
    },
  ],
});
</script>
<template>
  <div>
    <div>{{ $route.params.slug[0] }}</div>
    <!-- <div>{{ data }}</div> -->
    <Tiptap />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  title: "Edit",
});

useHead({
  title: "Edit",
  meta: [
    {
      name: "description",
      content: "Edit a post",
    },
  ],
});
const route = useRoute()
// const { data } = await useFetch("https://jsonplaceholder.typicode.com/posts/" + route.params.slug[0]);
</script>
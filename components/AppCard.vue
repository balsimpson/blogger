<template>
  <div class="flex flex-col h-full bg-white border rounded-lg dark:bg-stone-800 dark:text-stone-400 dark:border-stone-700">
    <img
      v-if="image"
      :src="image"
      alt=""
      class="object-cover rounded-t-lg h-44"
    />
    <div class="flex-grow p-4 px-6 mt-6">
      <NuxtLink :to="'/blog/' + slug">
        <div class="text-xl font-bold leading-5 dark:text-stone-300">{{ title }}</div>
      </NuxtLink>
      <div class="mt-4 ">{{ description }}</div>
    </div>
    <div class="p-4 border-t dark:border-stone-600">
      <div class="text-xs text-stone-400">{{ date }}</div>
      <div v-if="tags" class="flex flex-wrap gap-1 mt-2 text-xs text-stone-400">
        <TypeChip @clicked="redirectToTag(tag)" v-for="tag in tags" :title="tag" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "title",
  "description",
  "date",
  "tags",
  "image",
  "slug",
]);
const redirectToTag = (tag) => {
  navigateTo("/blog/tag/" + tag)
}
</script>
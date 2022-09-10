<template>
  <div class="flex flex-col min-h-screen py-12 sm:px-4 dark:bg-stone-900">
    <div class="flex-grow w-full max-w-4xl px-4 mx-auto text-center">
      <AppCarousel v-if="posts.length" :items="posts"/>
      <div class="grid gap-8 mt-6 text-left sm:grid-cols-2">
        <AppCard
          v-for="post in posts"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :tags="post.tags"
          :date="convertDate(post.published_at)"
          :slug="post.slug"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: blog } = await useAsyncData("blog", () =>
  queryContent("/blog").findOne()
);

const posts = ref([]);
onMounted(async () => {
  posts.value = await getDocsWithStatus("posts", "published");
});
</script>
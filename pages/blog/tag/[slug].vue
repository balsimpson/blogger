<template>
  <div class="max-w-4xl p-4 mx-auto">
    <div class="flex items-center mb-4 space-x-2 text-xl font-bold">
      <span>Posts tagged</span> 
      <TypeChip :title="route.params.slug"/>
    </div>
    <div v-if="posts.length" class="grid gap-4 sm:grid-cols-2">
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
</template>

<script setup>
const route = useRoute();
const posts = ref([]);
onMounted(async () => {
  posts.value = await getDocsMatchingTag("posts", route.params.slug);
  console.log(route.params.slug, posts.value);
});
</script>
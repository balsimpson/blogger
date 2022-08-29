<template>
  <div class="flex flex-col min-h-screen px-4 py-12 bg-stone-200">
    <div class="flex-grow w-full max-w-4xl px-4 mx-auto text-center">
      <h2
        class="text-base font-semibold tracking-wide text-indigo-600 uppercase"
      >
        {{ blog.subtitle }}
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl "
      >
        {{ blog.title }}
      </p>
      <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-500">
        {{ blog.description }}
      </p>
      <div class="grid gap-4 sm:grid-cols-2">
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
  posts.value = await getOrderedDocsFromFirestore("posts", "published_at");
});
</script>
<template>
  <div class="min-h-screen px-6 py-0">
    <AppHero />
    <div class="max-w-4xl py-12 mx-auto">
      <div class="w-full px-4 text-center">
        <h2
          class="text-base font-semibold tracking-wide text-indigo-600 uppercase  "
        >
          Our Blogs
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl "
        >
          Our Recent News
        </p>
        <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-500">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
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
    <AppFeatures />
    <!-- <AppCarousel /> -->
    <AppFooter />
  </div>
</template>

<script setup>
const posts = ref([]);
onMounted(async () => {
  posts.value = await getOrderedDocsFromFirestore("posts", "published_at");
});
const convertDate = (d) => {
  const newDate = new Date(d.seconds * 1000);
  return newDate.toLocaleString();
};
</script>
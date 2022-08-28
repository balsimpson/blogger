<template>
  <div class="min-h-screen py-0">
    <AppHero :hero="hero" />

    <AppDemoEditor />

    <AppCta />

    <div class="w-full py-12 mx-auto bg-sky-800">
      <div
        class="flex flex-col items-center justify-center w-full max-w-4xl px-4 mx-auto text-center "
      >
        <h2
          class="text-base font-semibold tracking-wide text-teal-300 uppercase"
        >
          Admin Panel
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl "
        >
          Easily Add New Posts
        </p>
        <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-200">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
        <img src="demo_editor_image.png" alt="" class="rounded-lg" />
      </div>
    </div>

    <div class="py-12 mx-auto bg-teal-800">
      <div class="w-full max-w-4xl px-4 mx-auto text-center">
        <h2
          class="text-base font-semibold tracking-wide text-teal-300 uppercase"
        >
          The Blog
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl "
        >
          Our Recent News
        </p>
        <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-200">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div class="grid max-w-4xl gap-4 p-6 mx-auto sm:grid-cols-2">
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
const hero = ref();

onMounted(async () => {
  hero.value = await getDocFromFirestore("content", "hero");
  posts.value = await getOrderedDocsFromFirestore("posts", "published_at");
  // const { pending, data: hero } = await useAsyncData("hero", async() =>
  //   // queryContent("/editor").findOne()
  //   await getDocFromFirestore("content", "hero")
  // );
});
</script>
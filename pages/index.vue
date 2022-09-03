<template>
  <div class="min-h-screen py-0">
    <AppHero :hero="hero" />
    <!-- <pre>{{$colorMode}}</pre> -->
    <!-- <AppDemoEditor /> -->

    <AppCta :cta="cta" />

    <!-- <div class="w-full py-12 mx-auto bg-sky-800">
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
        <img src="/demo_admin_image.png" alt="" class="rounded-lg" />
      </div>
    </div> -->

    <div class="py-12 mx-auto bg-cyan-800 dark:bg-stone-900">
      <div class="w-full max-w-4xl px-4 mx-auto text-center">
        <h2
          class="text-base font-semibold tracking-wide text-teal-300 uppercase"
        >
          {{ blog.subtitle }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl "
        >
          {{ blog.title }}
        </p>
        <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-200">
          {{ blog.description }}
        </p>

        <NuxtLink
          to="/blog"
          class="px-4 py-2 font-bold text-white transition border-2 border-white rounded-full hover:bg-white hover:text-cyan-700 "
          >Browse All Posts</NuxtLink
        >
      </div>
      <div class="grid max-w-4xl gap-4 p-2 mx-auto mt-12 sm:p-6 sm:grid-cols-2">
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
const title = "Deploy Your Blog Online in 5 Minutes";
const image = "/siteImage.png";
const description = "In just 5 minutes, have your own blog up and running. Built on Nuxt 3 and Tailwind CSS. With a rich text editor from TipTap and an admin panel with Firebase authetication."

const { pending, data: hero } = await useAsyncData("hero", async () =>
  queryContent("/hero").findOne()
);
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      property: "og:url",
      content: "https://tinkr.in/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ],
});

const posts = ref([]);
// const hero = ref();

const { data: cta } = await useAsyncData("cta", async () =>
  queryContent("/cta").findOne()
);
const { data: blog } = await useAsyncData("blog", async () =>
  queryContent("/blog").findOne()
);

onMounted(async () => {
  // hero.value = await getDocFromFirestore("content", "hero");
  posts.value = await getOrderedDocsFromFirestore("posts", "published_at", 4);
});
</script>
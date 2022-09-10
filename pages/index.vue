<template>
  <div class="min-h-screen">
    <SectionHero :hero="hero" />
    <SectionAdmin />
    <SectionBlog :blog="blog" :posts="posts"/>
    <AppFeatures />
    <AppCta :cta="cta" />
    <AppFooter />
  </div>
</template>

<script setup>
import { getDocsWithStatus } from "~~/composables/useFirebase";
import AppDemoEditor1 from "~~/components/AppDemoEditor.vue";

const title = "Deploy Your Blog Online in 5 Minutes";
const image = "/siteImage.png";
const description = "In just 5 minutes, have your own blog up and running. Built on Nuxt 3 and Tailwind CSS. With a rich text editor from TipTap and an admin panel with Firebase authetication."
const ogUrl = "https://tinkr.in/"

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
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      property: "og:url",
      content: ogUrl,
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

const { pending, data: hero } = await useAsyncData("hero", async () =>
  queryContent("/hero").findOne()
);
const { data: cta } = await useAsyncData("cta", async () =>
  queryContent("/cta").findOne()
);
const { data: blog } = await useAsyncData("blog", async () =>
  queryContent("/blog").findOne()
);

onMounted(async () => {
  posts.value = await getDocsWithStatus("posts", "published", 4);
});
</script>
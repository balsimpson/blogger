<template>
  <div v-if="post" class="max-w-3xl p-5 mx-auto">
    <BreadCrumbs />

    <div class="mb-4">
      <div class="flex space-x-3">
        <div v-if="post.published_at" class="pb-1 dark:text-zinc-400">
        {{ convertDate(post.published_at) }}
      </div>
      <div v-if="post.views" class="text-cyan-500">{{post.views}} Views</div>
      </div>
      <div v-if="post.tags" class="space-x-1">
        <TypeChip @clicked="redirectToTag(tag)" v-for="tag in post.tags" :title="tag" />
      </div>
    </div>
    <!-- <div v-if="post.lastUpdatedAt" class="text-cyan-600">
      {{ convertDate(post.lastPublishedAt) }}
    </div> -->
    <article v-html="postHtml" class="prose dark:text-zinc-400 font-arvo">
      
    </article>
  </div>
</template>

<script setup>
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
const route = useRoute();
const post = ref(null);
const postHtml = ref();

const title = ref("");
const image = ref("");
const description = ref("")
const ogUrl = ref("https://tinkr.in")

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
      name: "twitter:text:title",
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

const redirectToTag = (tag) => {
  navigateTo("/blog/tag/" + tag)
}

onMounted(async () => {
  post.value = await getDocFromFirestoreWithSlug("posts", route.params.slug);

  title.value = post.value.title;
  description.value = post.value.description;
  image.value = post.value.image;
  
  postHtml.value = generateHTML(post.value.content, [
    StarterKit,
    Image,
    Youtube,
    Link,
  ]);
});
</script>

<style>
  article img {
    border-radius: .25em;
  }
</style>
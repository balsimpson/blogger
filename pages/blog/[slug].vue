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
    <article v-html="postHtml" class="prose text-stone-400">
      
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

const redirectToTag = (tag) => {
  navigateTo("/blog/tag/" + tag)
}

onMounted(async () => {
  post.value = await getDocFromFirestoreWithSlug("posts", route.params.slug);
  // console.log(post.value);
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
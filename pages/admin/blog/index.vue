<template>
  <div class="flex flex-col h-screen">
    <div class="max-w-4xl px-6 pt-4 text-right">
      <!-- <div class="text-5xl font-extrabold tracking-tight font-arvo">Welcome</div> -->
      <!-- a compose button with an icon -->
      <NuxtLink
        to="/admin/blog/compose"
        class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-teal-700 rounded-lg focus:shadow-outline hover:bg-teal-800 "
      >
        <IconPlus />
        <span class="ml-3">Add Blog Post</span>
      </NuxtLink>
    </div>
    <div class="flex-grow max-w-4xl sm:p-6">
      <div class="flex justify-between mb-3">
        <div class="text-xl font-bold dark:text-stone-400">Posts</div>
        <div class="flex flex-wrap items-center space-x-2">
          <div>Show</div>
          <div class="px-2 text-sm font-semibold tracking-wide text-white rounded bg-stone-500">All</div>
          <div class="px-2 text-sm font-semibold tracking-wide text-white rounded bg-stone-500">Published</div>
          <div class="px-2 text-sm font-semibold tracking-wide text-white rounded bg-stone-500">Drafts</div>
        </div>
      </div>

      <AppTable :items="posts" />
      <!-- <pre>{{ postsHTML }}</pre> -->
      <!-- <div v-if="postsHTML.length" class="space-y-4">
        <div
          v-for="post in posts"
          class="p-6 bg-white border rounded border-stone-300"
        > -->
      <!-- <div class="mb-3 text-xs text-stone-400">
            {{ formatDate(post.added_at) }}
          </div>
          <div v-html="post.html" class="prose font-arvo max-h-[400px] overflow-hidden mb-6"></div>

          <div class="mb-3 text-xs text-stone-400">
            <div>{{ post.uid }}</div>

            {{ new Date(post.published_at.seconds * 1000).toLocaleString() }}
          </div>

          <div v-html="post.html" class="prose"></div> -->

      <!-- <div class="flex justify-between">
            <div class="flex-shrink-0">
              <NuxtLink
                :to="{
                  name: 'admin-blog-edit',
                  params: { post: JSON.stringify(post) },
                }"
                class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 "
              >
                Edit
              </NuxtLink>
            </div>
            <div class="ml-3">
              <button
                @click="deletePost(post.uid)"
                class="flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-700 active:bg-red-700 "
              >
                Delete
              </button>
            </div>
          </div> -->

      <!-- <div>{{post}}</div> -->
      <!-- <div v-html="post.status"></div> -->
      <!-- <NuxtLink :to="'/admin/blog/' + post.slug.toLowerCase() + '-' + post.uid">
            <button
              class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 "
            >
              Edit
            </button>
          </NuxtLink> -->

      <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: item.slug } }">
          source
          </NuxtLink> -->
      <!-- <div>{{post}}</div> -->
      <!-- </div>
      </div> -->
      <!-- <div v-if="html">{{ html }}</div> -->
      <!-- <pre v-if="posts.length">{{ posts[0].content }}</pre> -->
    </div>
  </div>
</template>

<script setup>
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight/lib/common.js";
import { toHtml } from "hast-util-to-html";
import { IconPlus } from "@iconify-prerendered/vue-bx";

import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
definePageMeta({
  layout: "admin",
});

useHead({
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "All blog posts",
    },
  ],
});

const posts = ref([]);
const isEditing = ref(false);
const editHandler = (post) => {
  isEditing.value = !isEditing.value;
};

const postsHTML = computed(() => {
  let items = [];
  posts.value.map((post) => {
    let html = generateHTML(post.content, [StarterKit, Image, Youtube]);
    let highlighted = lowlight.highlight("js", html);
    post.html = html;
    items.push(html);
  });
  return items;
});

const deletePost = async (id) => {
  let res = await deleteDocFromFirestore("posts", id);
};

onMounted(async () => {
  posts.value = await getOrderedDocsFromFirestore("posts", "published_at");
  // console.log(posts.value);
});
</script>


<template>
    
    <div class="py-12 mx-auto dark:bg-stone-900">
      <div class="w-full max-w-4xl px-4 mx-auto text-center">
        <h2
          class="text-base font-semibold tracking-wide uppercase text-cyan-600"
        >
          {{ blog.subtitle }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-black dark:text-cyan-300 sm:text-4xl "
        >
          {{ blog.title }}
        </p>
        <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-500">
          {{ blog.description }}
        </p>

        <NuxtLink
          to="/blog"
          class="px-4 py-2 font-bold text-black transition border-2 border-black rounded-full dark:text-white dark:border-white hover:bg-cyan-700 hover:text-white "
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
</template>

<script setup>
    const props = defineProps(["blog", "posts"])    
</script>
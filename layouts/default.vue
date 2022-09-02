<template>
  <div class="w-full dark:bg-stone-900">
    <div class="relative px-4 py-6 sm:px-6 lg:px-8">
      <nav
        class="relative flex flex-col items-center justify-between max-w-4xl mx-auto md:flex-row "
        aria-label="Global"
      >
        <div
          class="flex items-center flex-grow flex-shrink-0 mb-6 lg:flex-grow-0"
        >
          <div class="flex items-center justify-between w-full md:w-auto">
            <NuxtLink to="/">
              <span class="sr-only">Blogger</span>
              <img
                alt="Workflow"
                class="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-wrap space-x-2 md:ml-10">
          
          <!-- <ToggleDarkmode /> -->

          <NuxtLink
            to="/blog"
            class="block px-1 text-base font-bold transition rounded-md text-cyan-600 hover:underline decoration-wavy "
            >Blog</NuxtLink
          >
          <NuxtLink
            to="/admin"
            class="block px-1 text-base font-bold transition rounded-md text-cyan-600 hover:underline decoration-wavy "
            >Admin</NuxtLink
          >
          <a
            href="https://github.com/balsimpson/blogger"
            class="inline-flex items-center space-x-2 font-bold text-gray-500 hover:text-gray-900 "
            target="_blank"
            ><IconGithub /> <span>GitHub</span></a
          >
        </div>
      </nav>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { IconGithub } from "@iconify-prerendered/vue-bxl";
</script>
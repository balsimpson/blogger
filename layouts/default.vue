<template>
  <div class="w-full mx-auto ">
    <div class="relative px-4 py-6 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10 "
          aria-label="Global"
        >
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
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
          <div class="md:ml-10 md:pr-4 md:space-x-8">
            <a
              href="https://github.com/balsimpson/blogger"
              class="inline-flex items-center space-x-2 font-bold text-gray-500 hover:text-gray-900 " target="_blank"
              ><IconGithub />
              <span>GitHub</span></a
            >
          </div>
        </nav>
      </div>
    <slot />
  </div>
</template>

<script setup>
import { IconGithub } from '@iconify-prerendered/vue-bxl';
</script>
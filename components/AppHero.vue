<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative px-4 pb-12 overflow-hidden bg-white md:pt-12 dark:bg-stone-900">
    <div v-if="hero" class="max-w-4xl mx-auto">
      <div class="flex flex-col">
        <main
          class="mx-auto max-w-7xl "
        >
          <div class="mb-6 text-center">
            <h1
              class="text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-400 sm:text-5xl md:text-6xl "
            >
              <span class="block xl:inline"> {{ hero.headline1 }}</span>
              <span class="block text-cyan-600">{{ hero.headline2 }}</span>
            </h1>
            <p
              class="mx-auto my-6 text-base font-normal text-stone-500 sm:mt-5 dark:text-stone-300 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl"
              v-html="hero.description"
            ></p>
            <div
              class="flex justify-center mt-2"
            >
              <div v-html="hero.button"></div>
            </div>
          </div>

        </main>
        
        <div class="max-w-2xl mx-auto text-center">
          <img v-if="$colorMode.value == 'dark'" :src="hero.image_dark" alt="" class="object-contain w-full max-w-2xl mx-auto">
          <img v-else :src="hero.image" alt="" class="object-contain w-full max-w-2xl mx-auto">
          <div v-html="hero.editor_description" class="mt-4 dark:text-stone-400">
          </div>
        </div>

        <!-- <pre>{{hero}}</pre> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['hero'])
</script>
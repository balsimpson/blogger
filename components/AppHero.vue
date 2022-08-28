<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative px-4 pb-12 overflow-hidden bg-white">
    <div v-if="hero" class="max-w-4xl mx-auto">
      <div class="flex">
        <main
          class="mx-auto my-10 sm:w-1/2 max-w-7xl sm:mt-12 md:my-16 lg:my-20 xl:my-28"
        >
          <div class="">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl "
            >
              <span class="block xl:inline"> {{ hero.headline1 }}</span>
              <span class="block text-cyan-600">{{ hero.headline2 }}</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 "
              v-html="hero.description"
            ></p>
            <div
              class="mt-2 sm:mt-4 sm:flex "
            >
              
              <div v-html="hero.button"></div>
            </div>
          </div>
        </main>
        <div class="hidden w-1/2 overflow-hidden sm:block sm:pl-6 rounded-xl">
          <img
            class="object-cover w-full h-full rounded-xl"
            :src="hero.image"
            alt=""
          />
        </div>

        <!-- <pre>{{hero}}</pre> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['hero'])
</script>
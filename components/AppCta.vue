<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="w-full mx-auto bg-stone-900">
    <div
      class="flex flex-col items-center justify-center max-w-2xl px-4 py-12 mx-auto text-center  sm:px-6 md:flex-row md:text-left md:justify-between "
    >
      <h2
        class="text-3xl font-bold tracking-tight text-white capitalize  sm:text-4xl "
      >
        <span class="block">{{ cta.headline1 }}</span>
        <span class="block text-cyan-600">{{ cta.headline2 }}</span>
      </h2>
      <div class="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow"></div>
        <!-- {{cta.button}} -->
        <NuxtLink
          :to="cta.link"
          class="inline-flex items-center justify-center px-12 py-3 text-base font-medium text-white border border-transparent rounded-md  bg-cyan-600 hover:bg-cyan-700 "
        >
          {{ cta.button }}
        </NuxtLink>
        <!-- <div class="inline-flex ml-3 rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-cyan-600 hover:bg-cyan-50 "
          >
            Learn more
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["cta"]);
</script>
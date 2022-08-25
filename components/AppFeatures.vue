<template>
  <div class="px-4 py-12 bg-white">
    <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-base font-semibold tracking-wide text-indigo-600 uppercase "
        >
          {{ features.subtitle }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl "
        >
          {{ features.title }}
        </p>
        <p class="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
          {{ features.description }}
        </p>

        <a :href="features.cta_link" target="_blank" class="inline-flex px-3 py-1 mt-6 uppercase transition border-2 rounded border-stone-500 hover:bg-teal-600 hover:text-white hover:border-teal-500"><IconGithub/><span class="ml-3 text-base font-semibold tracking-normal">{{features.cta}}</span></a>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 "
        >

          <div v-for="feature in features.features" class="relative">
            <dt>
              <div
                class="flex items-center justify-center w-20 h-20 rounded-md "
              >
                <img :src="feature.image" alt="" class="object-contain w-full h-full">
              </div>
              <p class="text-lg font-bold leading-6 text-gray-900 ">
                {{feature.title}}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{feature.description}}
            </dd>
          </div>

        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconGithub } from '@iconify-prerendered/vue-bxl';
const { data: features } = await useAsyncData("features", () =>
  queryContent("/features").findOne()
);
</script>
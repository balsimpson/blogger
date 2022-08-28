<template>
  <div class="mt-10">
    <dl
      class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 "
    >
      <div
        v-for="feature in features"
        class="relative p-3 bg-white rounded-lg"
      >
        <dt>
          <div class="flex items-center justify-center w-20 h-20 rounded-md">
            <img
              :src="feature.image"
              alt=""
              class="object-contain w-full h-full"
            />
          </div>
          <p class="text-lg font-bold leading-6 text-gray-900">
            {{ feature.title }}
          </p>
        </dt>
        <dd class="mt-2 text-base text-gray-500">
          {{ feature.description }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { IconGithub } from '@iconify-prerendered/vue-bxl';
const { data: features } = await useAsyncData("features", () =>
  queryContent("/features").findOne()
);
</script>
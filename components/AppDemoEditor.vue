<template>
  <div class="px-4 py-12 bg-cyan-800">
    <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-base font-semibold tracking-wide text-teal-400 uppercase "
        >
          {{ editor.subtitle }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-wide text-white sm:text-4xl "
        >
          {{ editor.title }}
        </p>
        <p class="max-w-2xl mx-auto mt-4 mb-6 text-xl text-gray-400">
          {{ editor.description }}
        </p>

        <a :href="editor.cta_link" target="_blank" class="inline-flex px-3 py-1 mt-6 uppercase transition bg-white border-2 rounded border-stone-500 hover:bg-teal-600 hover:text-white hover:border-teal-500"><IconGithub/><span class="ml-3 text-base font-semibold tracking-normal">{{editor.cta}}</span></a>
      </div>


      <div class="mt-12 overflow-hidden border rounded-lg">
        <TiptapNaked @update="docUpdated" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconGithub } from '@iconify-prerendered/vue-bxl';
const { data: editor } = await useAsyncData("editor", () =>
  queryContent("/editor").findOne()
);

const docUpdated = () => {
  console.log()
}
</script>
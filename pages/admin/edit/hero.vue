<template>
  <div class="flex flex-col h-screen p-6">
    <div>
        <AppHero :hero="hero"/>
    </div>
    <div class="flex-grow overflow-y-scroll">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, officiis
      quisquam sint similique necessitatibus ullam iusto maxime sed porro quam.
    </div>
    <!-- :class="[postDetails.title ? '' : 'opacity-50 pointer-events-none']" -->
    <div class="flex items-center justify-between">
        <button
          @click.prevent="saveDoc('published')"
          class="inline-flex px-4 py-1 font-bold tracking-wide text-teal-800 transition bg-teal-500 border-2 border-teal-500 rounded cursor-pointer hover:bg-white hover:text-teal-500 "
          
        >
          <IconCloudUpload />
          <span class="ml-3" :class="[publishBtnText == 'Publishing...' ? 'pointer-events-none': '']">{{ publishBtnText }}</span>
        </button>

        <div>
            <ToggleSwitch />
        </div>
    </div>
  </div>
</template>

<script setup>
import { IconCloudUpload } from "@iconify-prerendered/vue-bx";
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});
useHead({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Overview of all posts",
    },
  ],
});

const hero = ref();
const publishBtnText = ref("Publish");

onMounted(async () => {
  hero.value = await getDocFromFirestore("content", "hero");
});
</script>
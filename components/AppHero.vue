<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative px-4 pb-12 overflow-hidden bg-white">
    <div v-if="hero" class="max-w-4xl mx-auto">
      <div class="flex flex-col">
        <main
          class="mx-auto max-w-7xl sm:mt-12 "
        >
          <div class="text-center">
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
              class="flex justify-center mt-2"
            >
              <div v-html="hero.button"></div>
            </div>
          </div>
        </main>
        <div class="overflow-hidden rounded-xl h-[500px] mt-12">
          <!-- <img
            class="object-cover object-left w-full h-full border rounded-xl"
            :src="hero.image"
            alt=""
          /> -->
          <!-- <no-ssr> -->
            <!-- <Tiptap /> -->
          <!-- </no-ssr> -->
          <client-only>
            <TiptapNew/>
          </client-only>
        </div>

        <div class="max-w-lg mx-auto mt-4 text-center">
          The Text Editor from TipTap comes with image uploads to <span class="font-bold">Cloudinary</span> and <span class="font-bold">YouTube</span> video embeds. Use Headings, Code Block and Highlight to make your writing stand out. With built-in authentication, you can start blogging right away.
        </div>

        <!-- <pre>{{hero}}</pre> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['hero'])
</script>
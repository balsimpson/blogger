<template>
  <div
    class="flex flex-col justify-center min-h-screen py-4 bg-stone-700 md:px-24"
  >
    <div class="mb-8 font-serif text-center text-gray-400 text-7xl">
      Showreel
    </div>
    <div class="block">
      <div
        class="max-w-4xl p-4 mx-auto bg-black border border-gray-800 rounded-lg shadow-lg "
      >
        <div class="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLnI8v7BiafVa73YEJLyz1VbWB-DlGDDgX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="pt-6 text-center text-gray-400"><a href="mailto:gbkrishnan@gmail.com">click here to get in touch!</a></div>
  </div>
</template>

<script setup>
  definePageMeta({
  layout: false,
});

useHead({
  title: "Balu's Ad Film Showreel",
  meta: [
    {
      name: "description",
      content: "A showreel of my directorial work in ad films",
    },
  ],
});
</script>

<style>
</style>
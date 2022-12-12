<template>
  <div class="max-w-3xl px-3 py-12 mx-auto sm:px-12 text-stone-500">
    <div class="max-w-md mx-auto">
      <!-- <div class="text-center">Dall-E</div> -->
      <p>Enter a prompt like, <span class="italic">a hand drawn sketch of a Porsche 911</span>, for Dall-E to generate
        unique images.</p>
      <input @keypress.enter="getImage" v-model="prompt" type="text"
        class="flex items-center w-full max-w-md p-3 mx-auto mb-2 text-base font-normal border-2 rounded placeholder-stone-400 text-stone-600 border-stone-400 focus:outline-none focus:border-teal-500 bg-stone-100 focus-within:border-teal-500 ">
      <button @click.prevent="getImage"
        class="px-4 py-1 font-bold tracking-wide text-white capitalize rounded-lg bg-stone-800"
        :class="[isGenerating ? 'opacity-70 pointer-events-none' : '']">
        <span v-if="!isGenerating">generate image</span>
        <span v-else class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor" class="w-5 h-5 animate-spin">
            <path fill-rule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clip-rule="evenodd" />
          </svg>
          <span class="ml-2">Generating...</span></span>
      </button>
    </div>

    <div class="max-w-3xl py-6 mx-auto sm:px-12">
      <div v-if="generatedImg">
        <div class="mb-2 text-2xl font-bold">Generated Image</div>
        <img :src="generatedImg" :alt="prompt" class="rounded" width="256" height="256">
        <div class="mt-1 text-sm">{{ generatedImgPrompt }}</div>
      </div>

      <div v-if="generatedImgs.length > 0">
        <div class="mt-12 mb-2 text-2xl font-bold text-center">Get Inspired!</div>

        <div class="flex justify-center">
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="item in generatedImgs" class="flex flex-col items-center w-full">
              <img :src="item.image" :alt="item.prompt" class="rounded">
              <div class="mt-1 text-sm max-w-[256px]">{{ item.prompt }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Configuration, OpenAIApi } from "openai"
import { serverTimestamp } from "firebase/firestore";

definePageMeta({
  layout: false
})

const title = "Dall.E - Generate unique images from text";
const image = "/warhol.png";
const description = "DALL·E is a new AI system that can create realistic images and art from a description in natural language."
const ogUrl = "https://tinkr.in/dalle/"

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      property: "og:url",
      content: ogUrl,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ],
});

const config = useRuntimeConfig();
const prompt = ref("")
const configuration = new Configuration({
  apiKey: config.OPENAI_KEY,
});
let generatedImgs = ref([]);
let generatedImg = ref();
let generatedImgPrompt = ref("");
const openai = new OpenAIApi(configuration);

const isGenerating = ref(false);

const getImage = async () => {
  generatedImg.value = "";
  generatedImgPrompt.value = "";

  try {
    isGenerating.value = true;
    const response = await openai.createImage({
      prompt: prompt.value,
      n: 1,
      size: "256x256",
    });
    // const response = await openai.createCompletion({
    //   model: "text-davinci-002",
    //   prompt: prompt.value,
    //   // max_tokens: 6,
    //   temperature: 0,
    // });

    // console.log(response)
    // console.log(openai, configuration, config.OPENAI_KEY)
    // const response = await openai.listFiles();
    generatedImg.value = response.data.data[0].url;
    generatedImgPrompt.value = prompt.value;

    // console.log(response.data.data[0].url)

    // add to database
    let res = await addDocToFirestore("dalle", {
      prompt: prompt.value,
      image: generatedImg.value,
      created_at: serverTimestamp()
    })

    generatedImgs.value.unshift({
      prompt: prompt.value,
      image: generatedImg.value,
      created_at: serverTimestamp()
    })

    isGenerating.value = false;
    prompt.value = "";

  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  // generatedImgs.value = await getOrderedDocsFromFirestore("dalle", "created_at");
})

</script>
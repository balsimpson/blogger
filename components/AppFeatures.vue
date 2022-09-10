<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 bg-white dark:bg-stone-700">
    <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-lg font-semibold text-cyan-600">Features</h2>
        <p
          class="mt-2 text-3xl font-bold leading-8 tracking-tight text-stone-900 dark:text-stone-300 sm:text-4xl "
        >
          A better way to start your project
        </p>
        <p class="max-w-2xl mt-4 text-xl text-stone-500 dark:text-stone-300 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="max-w-2xl mx-auto mt-10">
        <div
          class="relative grid grid-cols-2 gap-6 px-5 py-6 bg-white dark:bg-stone-700 sm:gap-8 sm:p-8 "
        >
          <a
            href="#"
            class="flex items-start p-3 -m-3 rounded-lg hover:bg-stone-50"
          >
            <IconNuxtIcon class="w-8 h-8 shrink-0" />
            <div class="ml-4">
              <p class="text-xl font-bold text-stone-900 dark:text-stone-300">Nuxt 3</p>
              <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Build your next application with Vue 3 and experience hybrid rendering, powerful data fetching and new features. Nuxt 3 is an open source framework making web development simple and powerful.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex items-start p-3 -m-3 rounded-lg hover:bg-stone-50"
          >
            <IconFirebase class="w-8 h-8 shrink-0" />
            <div class="ml-4">
              <p class="text-xl font-bold text-stone-900 dark:text-stone-300">Firebase</p>
              <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Firebase is an app development platform that helps you build and grow apps by providing authentication, storage, database infrastructure and more.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex items-start p-3 -m-3 rounded-lg hover:bg-stone-50"
          >
            <img src="/tailwind_logo.png" alt="" class="w-8 h-8 shrink-0" />
            <div class="ml-4">
              <p class="text-xl font-bold text-stone-900 dark:text-stone-300">Tailwind CSS</p>
              <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex items-start p-3 -m-3 rounded-lg hover:bg-stone-50"
          >
            <!-- <img src="/tiptap_logo.jpeg" alt="" class="w-8 h-8" /> -->
            <svg
              class="w-8 h-8 shrink-0"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.3979 0C30.1994 0 24.3628 1.54943 19.2542 4.2821H53.5415C48.4329 1.54943 42.5963 0 36.3979 0Z"
                fill="black"
              ></path>
              <path
                d="M59.8522 8.56344H12.9435C11.3953 9.86933 9.95759 11.302 8.64635 12.8455H64.1494C62.8381 11.302 61.4004 9.86933 59.8522 8.56344Z"
                fill="black"
              ></path>
              <path
                d="M67.2822 17.1283H5.51348C4.6575 18.4974 3.89002 19.9274 3.21906 21.4104H69.5766C68.9057 19.9274 68.1382 18.4974 67.2822 17.1283Z"
                fill="black"
              ></path>
              <path
                d="M71.1957 25.6918H1.60004C1.1718 27.0853 0.824967 28.5146 0.5651 29.9739H72.2306C71.9707 28.5146 71.6239 27.0853 71.1957 25.6918Z"
                fill="black"
              ></path>
              <path
                d="M72.7338 34.2567H0.0619353C0.0208355 34.9651 0 35.6791 0 36.3979C0 37.1165 0.0208297 37.8304 0.0619182 38.5387H72.7338C72.7749 37.8304 72.7957 37.1165 72.7957 36.3979C72.7957 35.6791 72.7749 34.9651 72.7338 34.2567Z"
                fill="black"
              ></path>
              <path
                d="M72.2307 42.8215H0.565048C0.824902 44.2809 1.17172 45.7101 1.59995 47.1036H71.1957C71.624 45.7101 71.9708 44.2809 72.2307 42.8215Z"
                fill="black"
              ></path>
              <path
                d="M69.5768 51.385H3.21892C3.88987 52.868 4.65733 54.298 5.51329 55.6671H67.2824C68.1384 54.298 68.9058 52.868 69.5768 51.385Z"
                fill="black"
              ></path>
              <path
                d="M64.1496 59.9499H8.6461C9.95731 61.4934 11.395 62.9261 12.9431 64.232H59.8526C61.4007 62.9261 62.8384 61.4934 64.1496 59.9499Z"
                fill="black"
              ></path>
              <path
                d="M53.542 68.5133H19.2537C24.3216 71.2244 30.1061 72.7709 36.2497 72.7954H36.546C42.6896 72.7709 48.4741 71.2244 53.542 68.5133Z"
                fill="black"
              ></path>
            </svg>
            <div class="ml-4">
              <p class="text-xl font-bold text-stone-900 dark:text-stone-300">TipTap</p>
              <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Tiptap gives you full control about every single aspect of your text editor experience. It’s customizable, comes with a ton of extensions, is open source and has an extensive documentation.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IconNuxtIcon,
  IconTailwindcssIcon,
  IconFirebase,
} from "@iconify-prerendered/vue-logos";
const { data: features } = await useAsyncData("features", () =>
  queryContent("/features").findOne()
);
</script>
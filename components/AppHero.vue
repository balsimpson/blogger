<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative overflow-hidden bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          class="relative flex items-center justify-between sm:h-10 lg:justify-start "
          aria-label="Global"
        >
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Blogger</span>
                <img
                  alt="Workflow"
                  class="w-auto h-8 sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                />
              </a>
            </div>
          </div>
          <div class="md:ml-10 md:pr-4 md:space-x-8">
            <a
              href="#"
              class="inline-flex items-center space-x-2 font-bold text-gray-500 hover:text-gray-900 "
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-5 h-5"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span>GitHub</span></a
            >
          </div>
        </nav>
      </div>

      <div class="flex">
        <main
          class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 "
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl "
            >
              <span class="block xl:inline"> {{ hero.title1 }}</span>
              <span class="block text-cyan-600">{{ hero.title2 }}</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 "
              v-html="hero.description"
            ></p>
            <div
              class="mt-2 sm:mt-4 sm:flex sm:justify-center lg:justify-start"
            >
              <!-- <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10 "
                >
                  {{ hero.button1 }}
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200 md:py-4 md:text-lg md:px-10 "
                >
                  {{ hero.button2 }}
                </a>
              </div> -->
              <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbalsimpson%2Fblogger&env=FIREBASE_API_KEY,FIREBASE_PROJECT_ID,CLOUDINARY_NAME&envDescription=All%20Environment%20variables%20are%20required.&project-name=blogger&repo-name=blogger&demo-description=A%20blog%20template%20made%20in%20Nuxt%203%20and%20styled%20by%20Tailwind%20CSS.&demo-url=http%3A%2F%2Fblogger-livid.vercel.app%2F&demo-image=https%3A%2F%2Fres.cloudinary.com%2Ftinkrshop%2Fimage%2Fupload%2Fv1661431359%2Fblog%2Fs5e51rf8far73jza4ul3.png"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
            </div>
          </div>
        </main>
        <div class="hidden w-1/2 md:block">
          <img
            class="object-contain w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            :src="hero.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: hero } = await useAsyncData("hero", () =>
  queryContent("/hero").findOne()
);
</script>
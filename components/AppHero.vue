<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative overflow-hidden bg-white">
    <div class="max-w-4xl mx-auto">
      

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
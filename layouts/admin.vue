<template>
  <div class="flex h-screen">
    <!-- create a sliding sidebar with tailwind -->
    <div class="flex-shrink-0 hidden w-64 px-6 py-4 bg-black md:block">
      <div class="flex flex-col justify-between h-full">
        <div>
          <!-- sidebar header -->
          <a href="/admin" class="text-left text-white focus:outline-none">
            <div class="flex items-center justify-center flex-shrink-0 p-4">
              <img src="/favicon.png" alt="logo" class="w-44" />
            </div>
          </a>

          <div class="flex flex-col justify-between h-full pt-12 text-white">
            <!-- sidebar items -->
            <div class="h-auto overflow-y-scroll">
              <nav class="space-y-6 bg-black">
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="/admin"
                      class="inline-flex items-center w-full px-4 py-2 mt-1 space-x-2 text-base transition duration-200 ease-in-out transform bg-black border rounded-lg text-stone-400 border-stone-700 hover:bg-stone-700 focus:shadow-outline "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                      <span> Dashboard</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/admin/blog/"
                      class="inline-flex items-center w-full px-4 py-2 space-x-2 text-base transition duration-200 ease-in-out transform border rounded-lg text-stone-400 border-stone-700 bg-gblack hover:bg-stone-700 focus:shadow-outline "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span class="ml-4">Blog</span>
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <!-- sidebar footer -->
        <div
          class="flex items-center w-full pt-3 pb-4 bg-black border-t border-stone-700 "
        >
          <a
            @click.prevent="signOut"
            href="#"
            class="flex-shrink-0 w-full text-stone-400 group"
          >
            <div class="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <div v-if="userCookie" class="ml-3">
                <div class="text-xs text-stone-500">
                  {{ userCookie.email }}
                </div>
                <p class="text-sm font-medium text-neutral-200">Sign out</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->

    <!-- backdrop -->
    <div
      @click="isSidebarActive = !isSidebarActive"
      class="absolute inset-0 z-20 w-full h-full transition duration-1000 bg-black "
      :class="[isSidebarActive ? 'opacity-80' : 'opacity-0 hidden']"
    ></div>

    <div
      class="absolute z-40 flex flex-col justify-between w-64 h-screen p-4 transition duration-150 ease-in-out bg-black shadow-lg md:h-full md:hidden "
      :class="[isSidebarActive ? 'translate-x-0' : '-translate-x-full']"
      id="mobile-nav"
    >
      <div class="absolute -right-10 top-4">
        <button
          @click="isSidebarActive = !isSidebarActive"
          class="flex items-center w-full h-full py-1 pl-5 pr-2 text-white bg-black rounded-full "
        >
          <span class="sr-only">Toggle navigation</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div>
        <!-- sidebar header -->
        <a href="/admin" class="text-left text-white focus:outline-none">
          <div class="flex items-center justify-center flex-shrink-0 p-4">
            <img src="/favicon.png" alt="" class="w-44" />
          </div>
        </a>

        <div class="flex flex-col justify-between h-full pt-20 text-white">
          <!-- sidebar items -->
          <div class="h-auto overflow-y-scroll">
            <nav class="space-y-6 bg-black">
              <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="/admin"
                      class="inline-flex items-center w-full px-4 py-2 mt-1 space-x-2 text-base transition duration-200 ease-in-out transform bg-black border rounded-lg text-stone-400 border-stone-700 hover:bg-stone-700 focus:shadow-outline "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                      <span> Dashboard</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/admin/blog/"
                      class="inline-flex items-center w-full px-4 py-2 space-x-2 text-base transition duration-200 ease-in-out transform border rounded-lg text-stone-400 border-stone-700 bg-gblack hover:bg-stone-700 focus:shadow-outline "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <span class="ml-4">Blog</span>
                    </NuxtLink>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- sidebar footer -->
      <div
        class="flex items-center w-full pt-3 pb-4 bg-black border-t border-stone-700 "
      >
        <a
          @click.prevent="signOut"
          href="#"
          class="flex-shrink-0 w-full text-stone-400 group"
        >
          <div class="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-xs text-stone-500">
                  {{ userCookie.email }}
                </div>
              <p class="text-sm font-medium text-neutral-200">Sign out</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="w-full h-screen mx-auto overflow-y-scroll bg-stone-200">
      <slot />
    </div>
  </div>
</template>

<script setup>
const isSidebarActive = ref(false);
const router = useRouter();

const userCookie = useCookie("userCookie");

const signOut = async () => {
  // console.log("signing out");
  await signOutUser();
  router.push("/admin/signin");
};
</script>

<style>
/* home route and active route will show in bold as it matches / and /about */
/* .nuxt-link-active {
    font-weight: bold;
} */
.router-link-active {
  font-weight: bold;
  color: #059669;
  text-decoration: none;
}
/* a.router-link-active {
  font-weight: bold;
  color: #059669;
  text-decoration: none;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.router-link-exact-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.router-link-hover {
  color: #e1d13c;
} */
</style>


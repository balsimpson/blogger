<template>
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
                  <slot name="items" />
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <!-- sidebar footer -->
        <div
          class="flex items-center w-full pt-3 pb-4 bg-black border-t border-stone-700 "
        >
          <slot name="footer" />
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
          <IconX v-if="isSidebarActive" />
          <IconMenu v-else />
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
                  <slot name="items" />
                </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- sidebar footer -->
      <div
        class="flex items-center w-full pt-3 pb-4 bg-black border-t border-stone-700 "
      >
        <slot name="footer" />
        
      </div>
    </div>
</template>

<script setup>
import {
  IconGridAlt,
  IconTrash,
  IconBook,
  IconMenu,
  IconX,
  IconLogOut,
} from "@iconify-prerendered/vue-bx";
const props = defineProps({
    isSidebarActive: {
        type: Boolean,
        required: true
    }
})

</script>
<template>
  <label for="toggleB" class="flex items-center cursor-pointer">
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input type="checkbox" id="toggleB" class="sr-only" />
      <!-- line -->
      <div class="block h-8 bg-gray-600 rounded-full w-14"></div>
      <!-- dot -->
      <div
        class="absolute w-6 h-6 transition bg-white rounded-full  dot left-1 top-1 "
      ></div>
    </div>
    <!-- label -->
    <div class="ml-3 font-medium text-gray-700">Toggle Me!</div>
  </label>
</template>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
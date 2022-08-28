<template>
  <label for="toggleB" class="flex flex-col cursor-pointer">
    <!-- toggle -->
    <div class="relative flex items-center">
      <!-- input -->
      <input type="checkbox" id="toggleB" class="sr-only" />
      <!-- line -->
      <div class="block h-8 bg-gray-400 rounded-full w-14 line"></div>
      <!-- dot -->
      <div
        class="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1 "
      ></div>

      <div class="ml-3 font-bold">Enabled</div>
    </div>
    <!-- label -->
    <div class="max-w-[200px] mt-2 text-xs font-medium text-gray-700 ">If disabled this component will not show on your homepage</div>
  </label>
</template>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #1d8a4a;
}
input:checked ~ .line {
  background-color: #48bb78;
}
</style>
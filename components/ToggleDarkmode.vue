<!-- <template>
  <div class="flex items-center justify-center space-x-2">
    <span class="text-sm text-gray-800 dark:text-gray-500">Light</span>
    <label
      for="toggle"
      class="flex items-center h-5 p-1 duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer w-9 dark:bg-gray-600 "
    >
      <div
        class="w-4 h-4 duration-300 ease-in-out transform bg-white rounded-full shadow-md toggle-dot dark:translate-x-3 "
      ></div>
    </label>
    <span class="text-sm text-gray-400 dark:text-white">Dark</span>
    <input
      id="toggle"
      type="checkbox"
      class="hidden"
      :value="darkMode"
      @change="darkMode = !darkMode"
    />
  </div>
</template>

<script setup>
const darkMode = ref(false)    
</script> -->

<template>
  <div>
    <h1 class="text-stone-500">Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
</template>
<script setup>
  const colorMode = useColorMode()
  // colorMode.forced = true;
  console.log(colorMode)
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>

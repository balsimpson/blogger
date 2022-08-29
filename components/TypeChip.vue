
<template>
  <button
    @click="emitTag(title)"
    class="inline-flex items-center justify-center px-3 py-1 text-xs font-bold transition bg-white border-2 rounded-full cursor-pointer text-cyan-600 border-cyan-600 hover:bg-teal-600 hover:text-white "
  >
    {{ title }}
  </button>
</template>

<script setup>
const props = defineProps(["title"]);
const emit = defineEmits();

const emitTag = (tag) => {
  emit("clicked", tag);
}
</script>

<style>
</style>
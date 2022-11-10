<template>
  <div v-if="items && items.length" class="flex mt-2 space-x-2 overflow-scroll snap-mandatory snap-x scroll-container">
    <div @click="emit('clicked', item.imdbID)" v-for="item in items" class="w-24 overflow-hidden transition border border-transparent rounded cursor-pointer shrink-0 snap-start group">
      <img v-if="item.Poster !== 'N/A'" :src="item.Poster" alt="" class="aspect-auto h-[150px] object-cover rounded group-hover:border-amber-500 border border-stone-800">
      <img v-else src="/poster_unavailable.jpg" alt="" class="aspect-auto max-h-[160px] rounded group-hover:border-amber-500 border border-stone-600">
      <div class="pt-1 text-xs font-semibold text-center">{{item.Title}}</div>
      <!-- <pre>{{ item }}</pre> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["items"])
const emit = defineEmits(["clicked"])
</script>
<template>
  <div v-if="items" class="py-6 space-y-4">
    <div>Reviews</div>

    <div v-for="item in items" class="relative p-4 border-l-4 border-teal-700 bg-zinc-800 text-zinc-400">
      <div class="flex gap-4">
        <div class="flex pb-2 text-lg font-bold leading-5">
          <span v-if="item.rating" class="flex items-center justify-center h-8 p-3 mr-2 font-bold bg-teal-700">{{item.rating.split("/")[0]}}</span>
          {{ item.title }}
        </div>
        <!-- <div class="absolute flex items-center justify-center h-8 p-3 font-bold bg-teal-700 -top-2 right-2"></div> -->
      </div>
      <div class="max-h-[200px] overflow-y-scroll text-sm leading-5">
        {{ item.review }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["items"])
</script>
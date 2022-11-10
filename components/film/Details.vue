<template>
  <div v-if="item">
    <div class="py-4 border border-zinc-700" :class="[isWinner ? 'bg-amber-500 text-black' : 'text-zinc-400 ']">
      <div class="flex flex-col gap-4 p-2 rounded sm:flex-row min-h-64 ">
        <div class="w-1/3 shrink-0">
          <img v-if="item.Poster !== 'N/A'" :src="item.Poster" alt="ite,Title"
            class="aspect-auto max-h-[160px] rounded">
          <img v-else src="/poster_unavailable.jpg" :alt="item.Title" class="aspect-auto max-h-[160px] rounded">
        </div>
        <div class="flex flex-col">
          <div class="flex-grow">
            <div class="text-xl font-semibold leading-5">{{ item.Title }} <span class="italic font-normal ">{{ item.Year
            }}</span>
            </div>
            <div class="text-xs">Duration: {{ item.Runtime }}</div>
            <div class="py-2 text-xs italic">{{ item.Genre }}</div>
            <div class="text-sm leading-5">{{ item.Actors }}</div>
            <div class="pt-2 text-sm">Directed by <span class="font-bold">{{ item.Director }}</span></div>
          </div>

        </div>

      </div>

      <!-- scores -->
      <div class="flex items-start gap-4 mt-5 text-sm sm:gap-8">
        <pre>{{ getRatings(item.Ratings) }}</pre>
        <div class="flex flex-col justify-center">
          <img src="/logos/IMDb_logo.svg" alt="" class="w-8 h-6">
          <div class="text-2xl text-center">{{ imdb }}</div>
        </div>
        <div class="flex flex-col items-center">
          <img src="/logos/Rotten_Tomatoes_logo.svg" alt="" class="w-6 h-6">
          <div class="text-2xl text-center">{{ rt }}</div>
        </div>
        <div class="flex flex-col items-center">
          <img src="/logos/Metacritic_logo.svg" alt="" class="w-6 h-6">
          <div class="text-2xl text-center">{{ meta }}</div>
        </div>
      </div>
    </div>

    <!-- movie description -->
    <div class="py-6">
      <div class="text-zinc-700">Synopsis</div>
      <div class="text-sm">{{ item.Plot }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item", "isWinner"])

const imdb = ref('N/A')
const rt = ref('N/A')
const meta = ref('N/A')

const getRatings = (ratings) => {

  // console.log(ratings)
  if (ratings.length > 0) {
    imdb.value = ratings[0]?.Value.split("/")[0] || 'N/A'
    rt.value = ratings[1]?.Value || 'N/A'
    meta.value = ratings[2]?.Value.split("/")[0] || 'N/A'
  }
}
</script>
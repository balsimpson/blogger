<template>
  <div v-if="items" class="w-full overflow-x-auto">
    <table class="w-full whitespace-no-wrap table-auto">
      <thead class="w-full">
        <tr
          class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 dark:border-zinc-700 dark:bg-zinc-900"
        >
          <th class="px-4 py-3">Title</th>
          <th class="px-4 py-3">Status</th>
          <!-- <th class="px-4 py-3">Featured</th> -->
        </tr>
      </thead>
      <tbody class="bg-white divide-y dark:divide-zinc-800 dark:bg-zinc-700">
        <tr v-for="item in items" class="text-gray-700 dark:text-gray-400">
          <!-- First Name -->
          <td class="px-4 py-3">
            <NuxtLink
              :to="{
                name: 'admin-blog-edit-slug',
                params: {
                  slug: item.slug,
                  post: JSON.stringify(item),
                },
              }"
            >
            <div class="flex items-center text-sm">
              <div>
                <p class="font-semibold">
                  {{ item.title }}
                </p>
                <p class="text-xs text-gray-400 dark:text-stone-500">
                  {{ convertDate(item.published_at) }}
                </p>
              </div>
            </div>
            </NuxtLink>
          </td>
          <!-- Status -->
          <td class="inline-flex items-center h-full px-2 py-1 mt-2 mr-2 text-xs uppercase border rounded"
          :class="[item.status == 'draft' ? 'border-cyan-600 text-cyan-600': 'text-teal-600 border-teal-600']"
          >
            {{ item.status }}
          </td>
          <!-- Interested In -->
          <!-- <td class="w-24 text-sm">
            {{ item.isFeatured }}
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const emit = defineEmits(["selected", "unselected"]);
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

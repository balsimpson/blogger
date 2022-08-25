<template>
  <div v-if="items" class="w-full overflow-x-auto">
    <table class="w-full whitespace-no-wrap table-auto">
      <thead class="w-full">
        <tr
          class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 "
        >
          <th class="px-4 py-3">Title</th>
          <th class="px-4 py-3">Status</th>
          <th class="px-4 py-3">Featured</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y">
        <tr v-for="item in items" class="text-gray-700">
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
                <p class="text-xs text-gray-400 dark:text-gray-400">
                  {{ convertDate(item.published_at) }}
                </p>
              </div>
            </div>
            </NuxtLink>
          </td>
          <!-- Status -->
          <td class="inline-flex px-4 py-3 text-xs">
            {{ item.status }}
          </td>
          <!-- Interested In -->
          <td class="w-24 text-sm">
            {{ item.isFeatured }}
          </td>
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

const convertDate = (d) => {
  const newDate = new Date(d.seconds * 1000);
  return newDate.toLocaleString();
};
</script>

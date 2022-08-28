<template>
    <div class="flex flex-col h-full bg-white border rounded-lg">
        <img v-if="image" :src="image" alt="" class="object-cover rounded-t-lg h-44">
        <div class="flex-grow p-4">
            <NuxtLink :to="'/blog/' + slug">
            <div class="text-xl font-bold leading-5">{{title}}</div>
            </NuxtLink>
            <div class="mt-4">{{description}}</div>
        </div>
        <div class="p-4 border-t">
            <div class="text-xs text-stone-400">{{date}}</div>
            <div v-if="tags" class="mt-2 text-xs text-stone-400">{{tags}} <TypeChip title="tag"/></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["title", "description", "date", "tags", "image", "slug"])
</script>
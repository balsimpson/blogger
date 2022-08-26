<template>
    <div class="max-w-3xl p-5 mx-auto">
        <div>{{$route.params.slug}}</div>
        <div v-html="postHtml" class="prose"></div>
    </div>
</template>

<script setup>
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
const route = useRoute()
const post = ref(null);
const postHtml = ref();


onMounted(async () => {
    post.value = await getDocFromFirestoreWithSlug("posts", route.params.slug);
    // console.log(post.value)
    postHtml.value = generateHTML(post.value.content, [StarterKit, Image, Youtube]);
})
</script>
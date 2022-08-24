<template>
  <div class="flex flex-col h-screen p-4">
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, nostrum.</div>
    <div class="flex-grow overflow-y-auto">
      <TiptapNaked @update="docUpdated" />
    </div>
    <div class="py-4">
      <TagInput :suggestions="['comedy', 'laugh']" />
      <div
      class="flex justify-between prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
    >
      <div
        @click.prevent="saveDoc('draft')"
        class="px-4 py-1 text-purple-500 border-2 border-purple-500 rounded"
      >
        Save Draft
      </div>
      <div
        @click.prevent="saveDoc('published')"
        class="px-4 py-1 text-purple-200 transition bg-purple-500 border-2 border-purple-500 rounded cursor-pointer hover:bg-white hover:text-purple-500 "
      >
        Publish
      </div>
    </div>

    </div>
  </div>
</template>

<script setup>
import { serverTimestamp } from "firebase/firestore"
definePageMeta({
  layout: "admin",
  title: "Compose",
});

useHead({
  title: "Compose",
  meta: [
    {
      name: "description",
      content: "Compose a post",
    },
  ],
});

const editorPost = ref({});

const docUpdated = (doc) => {
  // console.log(doc);
  
  // console.log(words)
  editorPost.value = doc.content;
  // addDoc(doc);
};

const saveDoc = async (status) => {
  const {title, description, image} = getPostDetails(editorPost.value);
  const slug = createSlug(title);
  const data = {
    title,
    description,
    image,
    slug,
    status,
    content: {
      type: "doc",
      content: editorPost.value,
    },
    published_at: serverTimestamp(),
  };
  
  console.log("add", data);
  
  let res = await addDocToFirestore("posts", data);
  // tiptapContent.value = "";
  // console.log("res", res.id);
};
</script>

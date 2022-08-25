<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, nostrum.
    </div>
    <div class="flex-grow overflow-y-auto">
      <TiptapNaked @update="docUpdated" />
    </div>
    <div class="py-4">
      <TagInput :suggestions="['comedy', 'laugh']" />
      <div class="flex space-x-8">
        <div
          @click.prevent="saveDoc('draft')"
          class="inline-flex px-4 py-1 text-purple-500 border-2 border-purple-500 rounded"
        >
          <IconArchiveIn />
          <span class="ml-3">Save Draft</span>
        </div>
        <div
          @click.prevent="saveDoc('published')"
          class="inline-flex px-4 py-1 text-purple-200 transition bg-purple-500 border-2 border-purple-500 rounded cursor-pointer hover:bg-white hover:text-purple-500 "
        >
          <IconCloudUpload />
          <span class="ml-3">Publish</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconCloudUpload, IconArchiveIn } from "@iconify-prerendered/vue-bx";
import { serverTimestamp } from "firebase/firestore";
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
  const { title, description, image } = getPostDetails(editorPost.value);
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

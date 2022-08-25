<template>
  <div class="flex flex-col h-screen p-4">
    <div class="flex-grow w-full mx-auto overflow-y-auto">
      <TiptapNaked @update="docUpdated" />
    </div>
    <div class="py-4">
      <TagInput :suggestions="['comedy', 'laugh']" @updated="addTags" />
      <div class="flex space-x-8">
        <div
          @click.prevent="saveDoc('draft')"
          class="inline-flex px-4 py-1 text-teal-500 border-2 border-teal-500 rounded "
        >
          <IconArchiveIn />
          <span class="ml-3">Save Draft</span>
        </div>
        <div
          @click.prevent="saveDoc('published')"
          class="inline-flex px-4 py-1 font-bold tracking-wide text-teal-800 transition bg-teal-500 border-2 border-teal-500 rounded cursor-pointer hover:bg-white hover:text-teal-500 "
          :class="[postDetails.title ? '' : 'opacity-50 pointer-events-none']"
        >
          <IconCloudUpload />
          <span class="ml-3" :class="[publishBtnText == 'Publishing...' ? 'pointer-events-none': '']">{{ publishBtnText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconCloudUpload, IconArchiveIn } from "@iconify-prerendered/vue-bx";
import { serverTimestamp } from "firebase/firestore";
import { useToast } from "vue-toastification";
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
const postDetails = computed(() => getPostDetails(editorPost.value));
const postTags = ref([]);
const toast = useToast();
const publishBtnText = ref("Publish");

const docUpdated = (doc) => {
  editorPost.value = doc.content;
};

const saveDoc = async (status) => {
  const { title, description, image } = getPostDetails(editorPost.value);

  if (title || image) {
    publishBtnText.value = "Publishing...";
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
      tags: postTags.value,
      published_at: serverTimestamp(),
    };
  
    let res = await addDocToFirestore("posts", data);
  
    if (res) {
      toast.error("Post failed to save! - " + res);
    } else {
      toast.success(data.title + " was saved!");
    }
    console.log(res);
    publishBtnText.value = "publish";
    
  }
  
};

const addTags = (tags) => {
  postTags.value = tags;
  console.log("tags", tags);
};
</script>

<style>
.Vue-Toastification__toast--success {
  background-color: #481586;
  color: #fff;
}
</style>

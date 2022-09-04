<template>
  <div class="flex flex-col h-screen mt-4 sm:mt-0 sm:p-4">
    <div class="flex-grow w-full mx-auto overflow-y-auto">
      <Tiptap @update="docUpdated" />
    </div>
    <div class="flex flex-col justify-center px-4 py-4">
      <TagInput :suggestions="tagsuggestions.items" @updated="addTags" />
      <div class="flex justify-between space-x-8">
        <button
          @click.prevent="saveDoc('draft')"
          class="inline-flex px-4 py-1 text-teal-500 border-2 border-teal-500 rounded "
          :class="[
            postDetails && postDetails.title
              ? ''
              : 'opacity-50 pointer-events-none',
          ]"
        >
          <IconArchiveIn />
          <span class="ml-3">{{draftBtnText}}</span>
        </button>
        <button
          @click.prevent="saveDoc('published')"
          class="inline-flex px-4 py-1 font-bold tracking-wide text-teal-800 transition bg-teal-500 border-2 border-teal-500 rounded cursor-pointer hover:bg-white hover:text-teal-500 "
          :class="[
            postDetails && postDetails.title
              ? ''
              : 'opacity-50 pointer-events-none',
          ]"
        >
          <IconCloudUpload />
          <span
            class="ml-3"
            :class="[
              publishBtnText == 'Publishing...' ? 'pointer-events-none' : '',
            ]"
            >{{ publishBtnText }}</span
          >
        </button>
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
const { data: tagsuggestions } = await useAsyncData("tags", () =>
  queryContent("/tags").findOne()
);
const toast = useToast();
const publishBtnText = ref("Publish");
const draftBtnText = ref("Save Draft");

const docUpdated = (doc) => {
  editorPost.value = doc;
};

const saveDoc = async (status) => {
  const { title, description, image } = getPostDetails(editorPost.value);

  if (status == "draft") {
    draftBtnText.value = "saving...";
  } else {
    publishBtnText.value = "Publishing...";
  }

  if (title || image) {
    const slug = createSlug(title);
    const data = {
      title,
      description,
      image,
      slug,
      status,
      content: editorPost.value,
      tags: postTags.value,
      published_at: serverTimestamp(),
    };

    // console.log(data);
    let res = await addDocToFirestore("posts", data);
    // console.log(res);

    if (res.type == "document") {
      toast.success(data.title + " was saved!");
    } else {
      toast.error("Post failed to save! - " + res);
    }
    publishBtnText.value = "publish";
    draftBtnText.value = "save draft";
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

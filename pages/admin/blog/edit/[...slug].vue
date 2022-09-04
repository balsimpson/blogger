<template>
  <div class="flex flex-col h-screen">
    <div
      v-if="ogPost"
      class="flex flex-wrap items-end justify-end px-2 mt-4 space-x-4 text-xs  md:mt-2 "
    >
      <div class="text-white">
        <ToggleSwitch
          @change="updatePublishStatus($event)"
          checked="Publish"
          unchecked="Draft"
          :status="ogPost.status"
        />
      </div>
      <div v-if="ogPost.lastUpdatedAt" class="p-2 dark:text-stone-600">
        <div class="text-xs capitalize">last updated</div>
        <div class="font-bold">
          {{ convertDate(ogPost.lastUpdatedAt) }}
        </div>
      </div>
      <div
        class="p-2 bg-white border rounded  border-stone-400 dark:bg-stone-700 dark:text-stone-500 "
      >
        <div class="text-xs capitalize">published</div>
        <div class="font-bold">{{ convertDate(ogPost.published_at) }}</div>
      </div>
    </div>
    <div v-if="$route.params.post" class="flex-grow m-2 overflow-y-scroll">
      <Tiptap
        @update="updateDoc($event)"
        :content="ogPost.content"
        :uid="$route.params.post.uid"
      />
    </div>

    <div class="p-4">
      <div class="px-2 text-xs font-bold dark:text-stone-500">
        Add tags to your post separated by commas
      </div>
      <TagInput
        :suggestions="tagsuggestions.items"
        :oldTags="ogPost.tags"
        @updated="addTags"
      />
      <div class="flex justify-between mt-2">
        <NuxtLink
          to="/admin/blog"
          class="inline-block px-3 py-1 text-sm font-bold tracking-wide uppercase transition duration-150 ease-in-out bg-transparent border-2 rounded  text-stone-500 dark:text-stone-600 border-stone-400 dark:border-stone-600 w-min focus:outline-none hover:bg-transparent hover:text-teal-600 hover:border-teal-600 dark:hover:border-teal-600 "
        >
          cancel
        </NuxtLink>
        <div class="flex items-center space-x-3">
          <button
            v-if="!confirmDelete"
            @click.prevent="confirmDelete = !confirmDelete"
            class="inline-flex items-center px-3 py-1 text-sm font-bold tracking-wide text-red-600 uppercase transition duration-150 ease-in-out bg-transparent border-2 border-red-600 rounded  dark:border-red-400 dark:text-red-400 w-min focus:outline-none hover:bg-transparent hover:text-red-600 "
          >
            <IconTrash />
            <span class="ml-3">delete</span>
          </button>
          <button
            v-else
            @click.prevent="deleteDoc($route.params.post)"
            class="inline-block px-3 py-1 text-sm font-bold tracking-wide text-red-600 uppercase transition duration-150 ease-in-out bg-transparent border-2 border-red-600 rounded  w-min focus:outline-none hover:bg-transparent hover:text-red-600 "
          >
            sure?
          </button>

          <button
            @click.prevent="saveDoc($route.params.post)"
            class="inline-flex items-center px-3 py-1 text-sm font-bold tracking-wide text-white uppercase transition duration-150 ease-in-out bg-teal-600 border-2 border-teal-600 rounded  w-min focus:outline-none hover:bg-transparent hover:text-teal-600 "
            :class="[saveBtnText == 'save' ? '' : 'pointer-events-none']"
          >
            <IconSave />
            <span class="ml-3">{{ saveBtnText }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { serverTimestamp } from "firebase/firestore";
import { IconSave, IconTrash } from "@iconify-prerendered/vue-bx";

definePageMeta({
  layout: "admin",
  name: "edit",
});

const route = useRoute();
const toast = useToast();

const isEditing = ref(false);
const ogPost = computed(() => JSON.parse(route.params.post));

const editorPost = ref({});
const postTags = ref([]);
const postPublishStatus = ref("");

const { data: tagsuggestions } = await useAsyncData("tags", () =>
  queryContent("/tags").findOne()
);
const confirmDelete = ref(false);
const saveBtnText = ref("save");

const updateDoc = async (data) => {
  // let doc = JSON.parse(data);
  //   console.log(data);
  editorPost.value = { type: "doc", content: data.content };
};

const updatePublishStatus = async (data) => {
  // let doc = JSON.parse(data);
  console.log(data);
  postPublishStatus.value = data;
};

const saveDoc = async (data) => {
  // console.log("save", editorPost.value);
  saveBtnText.value = "saving...";
  let doc = JSON.parse(data);

  const { title, description, image } = getPostDetails(editorPost.value);
  const slug = createSlug(title);
  const newData = {
    title,
    description,
    image,
    slug,
    content: editorPost.value,
    tags: postTags.value,
    lastUpdatedAt: serverTimestamp(),
  };

  // console.log("add", newData);

  //   console.log(doc, ogPost.value);
  let res = await updateDocInFirestore("posts", ogPost.value.uid, newData);

  if (res) {
    toast.error("Post failed to save! - " + res);
  } else {
    toast.success(doc.title + " was saved!");
  }
  // console.log(res);
  saveBtnText.value = "save";
};

const deleteDoc = async (data) => {
  confirmDelete = !confirmDelete;
  // let doc = JSON.parse(data);
  // let res = await deleteDocFromFirestore("posts", doc.uid);
  console.log(data);
};

const addTags = (tags) => {
  postTags.value = tags;
  // console.log("tags", tags);
};

onMounted(() => {
  // console.log(route.params, ogPost.value);
  editorPost.value = ogPost.value.content;
  postTags.value = ogPost.value.tags || [];
  postPublishStatus.value = ogPost.value.status;
});
</script>

<style>
.Vue-Toastification__toast--success {
  background-color: #481586;
  color: #fff;
}
</style>

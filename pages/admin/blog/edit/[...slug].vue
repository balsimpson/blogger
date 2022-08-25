<template>
  <div class="flex flex-col h-screen">
    <div>
     
    </div>
    <div v-if="$route.params.post" class="flex-grow m-2 overflow-y-scroll">
      <TiptapNaked
        @update="updateDoc($event)"
        :content="ogPost.content"
        :uid="$route.params.post.uid"
      />
    </div>

    <div class="border-t border-stone-500">
      <div class="flex justify-between max-w-2xl p-6">
        <button
          class="inline-block px-3 py-1 text-sm font-bold tracking-wide uppercase transition duration-150 ease-in-out bg-transparent border-2 rounded text-stone-500 border-stone-400 w-min focus:outline-none hover:bg-transparent hover:text-teal-600 "
        >
          cancel
        </button>

        <div class="flex items-center space-x-3">
          <button
            v-if="!confirmDelete"
            @click.prevent="confirmDelete = !confirmDelete"
            class="inline-flex items-center px-3 py-1 text-sm font-bold tracking-wide text-red-600 uppercase transition duration-150 ease-in-out bg-transparent border-2 border-red-600 rounded w-min focus:outline-none hover:bg-transparent hover:text-red-600 "
          >
            <IconTrash />
            <span class="ml-3">delete</span>
          </button>
          <button
            v-else
            @click.prevent="deleteDoc($route.params.post)"
            class="inline-block px-3 py-1 text-sm font-bold tracking-wide text-red-600 uppercase transition duration-150 ease-in-out bg-transparent border-2 border-red-600 rounded w-min focus:outline-none hover:bg-transparent hover:text-red-600 "
          >
            sure?
          </button>

          <button
            @click.prevent="saveDoc($route.params.post)"
            class="inline-flex items-center px-3 py-1 text-sm font-bold tracking-wide text-white uppercase transition duration-150 ease-in-out bg-teal-600 border-2 border-teal-600 rounded w-min focus:outline-none hover:bg-transparent hover:text-teal-600 "
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
import {
  IconSave,
  IconTrash
} from "@iconify-prerendered/vue-bx";

definePageMeta({
  layout: "admin",
  name: "edit",
});

const route = useRoute();
const toast = useToast();

const isEditing = ref(false);
const ogPost = computed(() => JSON.parse(route.params.post));
// const ogPost = computed(() => route.params.post);
const editorPost = ref({});
const confirmDelete = ref(false);
const saveBtnText = ref("save");

const updateDoc = async (data) => {
  // let doc = JSON.parse(data);
  //   console.log(data);
  editorPost.value = data.content;
};

const saveDoc = async (data) => {
  saveBtnText.value = "saving...";
  let doc = JSON.parse(data);

  const { title, description, image } = getPostDetails(editorPost.value);
  const slug = createSlug(title);
  const newData = {
    title,
    description,
    image,
    slug,
    content: {
      type: "doc",
      content: editorPost.value,
    },
    published_at: serverTimestamp(),
  };

  console.log("add", newData);

  //   console.log(doc, ogPost.value);
    let res = await updateDocInFirestore("posts", ogPost.value.uid, newData);

    if (res) {
      toast.error("Post failed to save! - " + res);
    } else {
        toast.success(doc.title + " was saved!")
    }
    console.log(res);
    saveBtnText.value = "save";
};

const deleteDoc = async (data) => {
  confirmDelete = !confirmDelete;
  // let doc = JSON.parse(data);
  // let res = await deleteDocFromFirestore("posts", doc.uid);
  console.log(data);
};

onMounted(() => {
  console.log(route.params, ogPost.value);
});
</script>

<style>
.Vue-Toastification__toast--success {
  background-color: #481586;
  color: #fff;
}
</style>

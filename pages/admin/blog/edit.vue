<template>
  <div class="flex flex-col h-screen">
    <div class="flex-grow m-2 overflow-y-scroll">
      <Tiptap
        @update="updateDoc($event)"
        :content="JSON.parse($route.params.post)"
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

        <div class="space-x-2">
          <button
            v-if="!confirmDelete"
            @click.prevent="confirmDelete = !confirmDelete"
            class="inline-block px-3 py-1 text-sm font-bold tracking-wide text-red-600 uppercase transition duration-150 ease-in-out bg-transparent border-2 border-red-600 rounded w-min focus:outline-none hover:bg-transparent hover:text-red-600 "
          >
            delete
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
            class="inline-block px-3 py-1 text-sm font-bold tracking-wide text-white uppercase transition duration-150 ease-in-out bg-teal-600 border-2 border-teal-600 rounded w-min focus:outline-none hover:bg-transparent hover:text-teal-600 "
            :class="[saveBtnText=='save' ? '' : 'pointer-events-none']"
          >
            {{saveBtnText}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

definePageMeta({
  layout: "admin",
  name: "edit",
});

const route = useRoute();
const toast = useToast();

const isEditing = ref(false);
const ogPost = computed(() => JSON.parse(route.params.post));
const editorPost = ref({});
const confirmDelete = ref(false);
const saveBtnText = ref("save")

const isChanged = computed(() => {
  if (ogPost.value.content == editorPost.value) {
    return true;
  }
  return false;
});

const updateDoc = async (data) => {
  // let doc = JSON.parse(data);
  // console.log(data);
  editorPost.value = data.content;
};

const saveDoc = async (data) => {
  saveBtnText.value = "saving...";
  let doc = JSON.parse(data);
  let res = await updateDocInFirestore("posts", doc.uid, {content: editorPost.value});

  if (res) {
    toast.error("Post failed to save! - " + res);
  }
  toast.success(doc.title + " was saved!")
  console.log(res);
  saveBtnText.value = "save";
};

const deleteDoc = async (data) => {
  confirmDelete = !confirmDelete
  // let doc = JSON.parse(data);
  // let res = await deleteDocFromFirestore("posts", doc.uid);
  console.log(data)
};
</script>

<style>
.Vue-Toastification__toast--success {
    background-color: #481586;
    color: #fff;
}
</style>

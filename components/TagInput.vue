<template>
  <div class="max-w-3xl">
    <div class="flex flex-wrap items-center justify-start">
      <div v-for="(tag, index) in tags" :key="tag" class="space-x-2">
        <div
          class="flex items-center h-5 p-1 m-1 border-2 border-teal-600 rounded-lg "
        >
          <div class="text-[12px] px-2 font-bold text-teal-600 border-teal-600">{{ tag }}</div>
          <svg
            @click="removeTag(tag)"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 text-gray-400 transition-colors rounded-full fill-current hover:text-white hover:bg-gray-500 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <input
        ref="newtagInput"
        type="text"
        placeholder="Add a Tag"
        class="w-20 m-1 text-xs font-bold text-center text-teal-600 bg-transparent border-2 rounded-full focus:outline-none border-stone-600 placeholder-stone-500 focus-within:border-teal-600 "
        v-model="newtag"
        @keydown="addTag"
      />
      <div class="text-[12px] text-red-400 text-center">{{ newtagMsg }}</div>
    </div>
    <div class="max-w-xl pl-1 text-center ">
      <div
        v-show="suggestedTags.length && newtag.length"
        class="flex items-center justify-start space-x-2"
      >
        <div
          @click="suggestionClicked(tag)"
          v-for="(tag, index) in suggestedTags"
          :key="index"
          class="
          cursor-pointer
            inline-flex
            text-[12px]
            px-3
            text-gray-500
            border
            rounded-full
            border-gray-500
            mt-2 hover:bg-teal-600 hover:text-teal-100
          "
        >
          {{ tag }}
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["suggestions", "oldTags"]);
const emit = defineEmits();

const tags = ref([]);
// const suggestionTags = ref(["comedy", "laugh"]);
const newtag = ref("");
const newtagInput = ref();
const newtagMsg = ref("");
const newTags = ref([]);

onMounted(() => {
  // console.log('mounted', props.oldTags);
  if (props.oldTags && props.oldTags.length) {
    props.oldTags.forEach((tag) => {
      // console.log('tag', tag);
      tags.value.push(tag);
    });
  }
});

const suggestedTags = computed(() => {
  if (props.suggestions.length) {
    return props.suggestions.filter((tag) => tag.includes(newtag.value));
  } else {
    return []
  }
});

const suggestionClicked = (tag) => {
  if (!isTagDuplicate(tag)) {
    tags.value.push(tag);
    newtag.value = "";
    newtagInput.value.focus();
    emit("updated", tags.value);
  } else {
    showTagMsg("Duplicate tag");
    newtagInput.value.focus();
  }
};

const showTagMsg = (msg) => {
  newtagMsg.value = msg;
  setTimeout(() => {
    newtagMsg.value = "";
  }, 3000);
};

const addTag = (e) => {
  // console.log('addtag: ', e);
  if (e.code === "Comma" || e.code === "Enter") {
    e.preventDefault();
    // let val = e.target.value.trim();
    if (newtag.value.length > 0 && !isTagDuplicate(newtag.value)) {
      newTags.value.push(newtag.value);
      tags.value.push(newtag.value);
      newtag.value = "";
      newtagMsg.value = "";
      emit("updated", tags.value);
    } else {
      showTagMsg("Duplicate tag");
    }
  }
};

const removeTag = (data) => {
  tags.value = tags.value.filter((tag) => tag != data);
  // console.log('removeTag: ', data, tags.value);
  emit("updated", tags.value);
};

const isTagDuplicate = (tag) => {
  let res = tags.value.filter((t) => t === tag);
  if (res.length) {
    return true;
  }
  return false;
  // console.log("res", res);
};
</script>

<style>
</style>
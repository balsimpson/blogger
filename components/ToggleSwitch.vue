<template>
  <label for="toggleStatus" class="flex flex-col cursor-pointer">
    <!-- toggle -->
    <div class="relative flex flex-col items-center">
      <!-- input -->
      <input
        @change="onChange"
        v-model="inputState"
        type="checkbox"
        id="toggleStatus"
        class="sr-only"
      />
      <!-- line -->
      <div class="block h-8 bg-gray-400 rounded-full w-14 line"></div>
      <!-- dot -->
      <div
        class="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1 "
      ></div>

      <div class="font-bold">{{ displayText }}</div>
    </div>
    <!-- label -->
    <!-- <div class="max-w-[200px] mt-2 text-xs font-medium text-gray-700 ">If disabled this component will not show on your homepage</div> -->
  </label>
</template>

<script setup>
const props = defineProps(["checked", "unchecked", "status"]);
const emit = defineEmits();

const inputState = ref(false);
const displayText = ref("");

function onChange(e) {
  inputState.value = e.target.checked;
  // console.log(e.target.checked, displayText.value);

  if (e.target.checked) {
    displayText.value = props.checked;
  } else {
    displayText.value = props.unchecked;
  }

  emit("change", e.target.checked);
}

onMounted(() => {
  if (props.status == "published") {
    inputState.value = true;
    displayText.value = props.checked;
  } else {
    inputState.value = false;
    displayText.value = props.unchecked;
  }
});
</script>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #0a6f34;
}
input:checked ~ .line {
  background-color: #6dfeaa;
}
</style>
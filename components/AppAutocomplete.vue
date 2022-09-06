<template>
  <div class="relative z-30 my-2">
    <input
      @keyup="findOption()"
      v-model="optionInput"
      type="text"
      class="w-full px-2 py-1 border rounded-t"
      placeholder="choose category"
    />
    <!-- add an icon on the right -->
    <div
      @click="showDefaultOptions"
      class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
    >
      <svg
        class="w-5 h-5 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <!-- add a dropdown -->
    <div
      v-if="isDefaultOptionsActive"
      class="absolute z-10 w-full overflow-y-scroll bg-white border divide-y rounded-b max-h-28 "
    >
      <div
        @click="selectOption(option)"
        v-for="option in filteredOptions"
        class="px-2 py-1 cursor-pointer hover:bg-gray-200"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["options"]);
const options = computed(() => {
  return props.options || [];
});
const filteredOptions = ref([]);
const isDefaultOptionsActive = ref(false);
const selected = ref(null);
const optionInput = ref("");
const findOption = () => {
  const input = optionInput.value;
  if (input.length > 0) {
    isDefaultOptionsActive.value = true;
    filteredOptions.value = options.value.filter((option) => {
      return option.label.toLowerCase().includes(input.toLowerCase());
    });
  } else {
    filteredOptions.value = [];
  }
};

const selectOption = (option) => {
  selected.value = option;
  optionInput.value = option.label;
  if (isDefaultOptionsActive.value) {
    isDefaultOptionsActive.value = false;
  }
  filteredOptions.value = [];
  emit("select", selected.value);
};

const showDefaultOptions = () => {
  isDefaultOptionsActive.value = !isDefaultOptionsActive.value;
  filteredOptions.value = options.value;
};
</script>

<style>
</style>
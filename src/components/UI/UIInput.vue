<template>
  <div>
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      @input="action"
      class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none"
      type="text"
      :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
interface IProp {
  modelValue: string | number;
  placeholder?: string;
  label?: string;
}

const emit = defineEmits(["update:modelValue"]);
let props = defineProps<IProp>();

const action = _.debounce(async (event: any) => {
  await emit("update:modelValue", event.target.value);
}, 100);
</script>

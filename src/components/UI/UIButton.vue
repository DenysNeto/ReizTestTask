<template>
  <button
    @click="action"
    :class="[
      { 'px-10 py-4': size === 'xl' },
      { 'px-5 py-3': size === 'lg' },
      { 'px-4 py-2 text-sm': size === 'md' },
      disabled ? 'opacity-50 cursor-pointer' : '',
    ]"
    class="mx-4 font-medium leading-5 text-white bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple flex items-center transition duration-200 ease-in"
    :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import _ from "lodash";

interface IProps {
  size: "xl" | "lg" | "md";
  loading?: boolean;
  disabled?: boolean;
}

const emit = defineEmits(["action"]);

let props = defineProps<IProps>();

const action = _.debounce(async () => {
  await emit("action");
}, 300);
</script>

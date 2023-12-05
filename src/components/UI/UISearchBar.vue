<template>
  <div class="flex justify-center flex-1 lg:mr-32">
    <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
      <div class="absolute inset-y-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M22 22L20 20"
            stroke="#ADA7A7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <input
        class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none"
        type="text"
        :placeholder="props.placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  placeholder: string;
}>();
</script>

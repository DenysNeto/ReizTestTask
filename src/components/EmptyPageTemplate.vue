<template>
  <div>
    <h1>{{ props.text }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  text: string;
}>();
</script>

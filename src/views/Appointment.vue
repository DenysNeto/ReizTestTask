<template>
  <EmptyPageTemplate
    :text="$route.path.replace('_', ' ').replace('/', '')"></EmptyPageTemplate>
</template>
<script setup lang="ts">
import EmptyPageTemplate from "@/components/EmptyPageTemplate.vue";
</script>

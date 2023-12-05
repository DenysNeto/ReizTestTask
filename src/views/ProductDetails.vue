<template>
  <div>
    <EmptyPageTemplate
      :text="
        $route.path.replace('_', ' ').replace('/', '')
      "></EmptyPageTemplate>
    <pre>{{ result }}</pre>
  </div>
</template>
<script setup lang="ts">
import EmptyPageTemplate from "@/components/EmptyPageTemplate.vue";
import { onMounted, ref } from "vue";

import { getProducts } from "@/services/productsService";
import type { RequestOptions } from "@/types";
import { useRoute } from "vue-router";

const route = useRoute();

let config = {
  method: "GET",
  url: `/products/${route.params.productId}`,
};

let result = ref("");

onMounted(async () => {
  result.value = JSON.stringify(await getProducts(config), 0, 4);
});
</script>

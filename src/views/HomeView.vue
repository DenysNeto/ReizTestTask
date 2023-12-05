<template>
  <main>
    <div class="flex flex-row md:flex-col">
      <div class="flex flex-col md:flex-row">
        <UIInput class="p-2 m-2" v-model="stateFilter.title" label="Title" />
        <UIInput class="p-2 m-2" v-model="stateFilter.brand" label="Brand" />
      </div>
    </div>

    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <UITable
          @clickAction="handleNavigation"
          :columns="col"
          :rows="statePagination.items">
        </UITable>

        <div
          v-if="!isSearchActive"
          class="flex flex-row justify-between p-2 m-2">
          <span class="basis-3/4">
            Page {{ statePagination.currentPage }} from {{ totalPages }}</span
          >
          <div class="flex flex-row basis-3/4">
            <div class="p-2 m-2">
              <UIButton
                @action="changePage('prev')"
                v-if="isPrevBtnVisible"
                size="lg"
                >Prev</UIButton
              >
            </div>

            <div class="p-2 m-2">
              <UIButton
                @action="changePage('next')"
                v-if="isNextBtnVisible"
                size="lg"
                >Next</UIButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, type ComputedRef, watch } from "vue";
import UITable from "@/components/UI/UITable.vue";
import UIButton from "@/components/UI/UIButton.vue";
import UIInput from "@/components/UI/UIInput.vue";
import { useRouter } from "vue-router";
import {
  getProducts,
  getProductsWithSearch,
} from "@/services/productsService.ts";
import type { IProduct, IProductGetResponse, ITableColumn } from "@/types";
import _ from "lodash";

interface IStatePagination {
  items: Array<IProduct>;
  currentPage: number;
  itemsPerPage: number;
  skip: number;
  totalItems: number;
}

interface IStateFilter {
  title: string;
  brand: string;
}

const col: Array<ITableColumn> = [
  { label: "Title", field: "title", sortable: true, isClickable: true },
  { label: "Category", field: "category" },
  { label: "Brand", field: "brand", sortable: true },
  { label: "Price", field: "price" },
  { label: "Stock", field: "stock" },
  { label: "Rating", field: "rating" },
];

const statePagination: IStatePagination = reactive({
  items: [],
  currentPage: 1,
  itemsPerPage: 10,
  skip: 0,
  totalItems: 0,
});

const stateFilter: IStateFilter = reactive({
  title: "",
  brand: "",
});

const router = useRouter();

let totalPages: ComputedRef<number> = computed(
  () => statePagination.totalItems / statePagination.itemsPerPage
);
let paginationStateCopy: IStatePagination | undefined = undefined;

let isSearchActive: ComputedRef<boolean> = computed(() =>
  hasNonEmptyValues(stateFilter)
);

let isNextBtnVisible: ComputedRef<boolean> = computed(
  () =>
    statePagination.totalItems >
    statePagination.skip + statePagination.itemsPerPage
);

let isPrevBtnVisible: ComputedRef<boolean> = computed(
  () => statePagination.currentPage != 1
);

onMounted(async () => {
  await getProductsAndUpdatePaginationState({
    params: {
      skip: 0,
      limit: statePagination.itemsPerPage,
    },
  });
});

watch(
  () => stateFilter,
  async (newQuery, prevQuery) => {
    if (isSearchActive.value && !paginationStateCopy) {
      paginationStateCopy = _.cloneDeep(statePagination);
    }

    if (!isSearchActive.value && paginationStateCopy) {
      if (paginationStateCopy && paginationStateCopy.items) {
        _.merge(statePagination, { ...paginationStateCopy });
        statePagination.items = [...paginationStateCopy?.items];
        paginationStateCopy = undefined;
        return;
      }
    }

    let result = await serverFilter("");
    statePagination.items = result.filter((item: any) => {
      return Object.keys(newQuery).every((key) => {
        //@ts-ignore
        return (
          item[key]
            ?.toLowerCase()
            //@ts-ignore
            .includes((newQuery[key] as string)?.toLowerCase())
        );
      });
    });
  },
  { immediate: false, deep: true }
);

function hasNonEmptyValues(obj: Record<string, any>) {
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      typeof obj[key] === "string" &&
      obj[key].trim() !== ""
    ) {
      return true;
    }
  }
  return false;
}

function changePage(action: "next" | "prev") {
  if (action == "next") {
    getProductsAndUpdatePaginationState({
      params: {
        skip: statePagination.skip + statePagination.itemsPerPage,
        limit: statePagination.itemsPerPage,
      },
    });
    statePagination.currentPage += 1;
  } else if (action == "prev") {
    getProductsAndUpdatePaginationState({
      params: {
        skip: statePagination.skip - statePagination.itemsPerPage,
        limit: statePagination.itemsPerPage,
      },
    });
    statePagination.currentPage -= 1;
  }
}

// TITLE
async function serverFilter(search: string): Promise<Array<IProduct>> {
  let result: IProductGetResponse = await getProductsWithSearch(
    _.merge({
      params: {
        q: search,
        limit: 1000,
      },
    })
  );
  return result.products;
}

async function getProductsAndUpdatePaginationState(
  config: Record<string, any> = {}
) {
  let result: IProductGetResponse = await getProducts(config);
  statePagination.totalItems = result.total;
  statePagination.skip = result.skip;
  statePagination.items = [...result.products];
}

function handleNavigation(tableData: {
  row: Record<string, any>;
  column: Array<ITableColumn>;
}) {
  router.push({
    name: "product_details",
    params: { productId: tableData.row.id },
  });
}
</script>

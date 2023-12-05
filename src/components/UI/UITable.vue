<template>
  <table v-if="rows.length" class="w-full whitespace-no-wrap">
    <thead>
      <tr
        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
        <th
          v-for="column in columns"
          :key="generateUniqueId(column)"
          class="px-4 py-3">
          <div class="flex flex-row">
            {{ column.field }}
            <component
              @click="sort(column.field)"
              v-if="column.sortable"
              :is="switchSortState(column.field)"
              class="flex-shrink-0 h-4 w-4"
              aria-hidden="true" />
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      <tr
        v-for="row in sortedRows"
        :key="generateUniqueId(row)"
        class="text-gray-700 dark:text-gray-400">
        <td
          @click="column.isClickable ? triggerClick({ row, column }) : null"
          v-for="column in columns"
          :key="generateUniqueId(column)"
          class="px-4 py-3">
          {{ row[column.field] }}
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else class="inset-y-0 flex items-center pl-2">No data A</div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import {
  ArrowsUpDownIcon,
  ArrowUpOnSquareIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/vue/20/solid";

import type { ITableColumn } from "@/types";
import _ from "lodash";

interface ITableProps {
  rows: Array<Record<string, any>>;
  columns: Array<ITableColumn>;
}

interface ISort {
  key: string | undefined;
  direction: "asc" | "desc" | "none";
}

let props = defineProps<ITableProps>();
const emit = defineEmits(["clickAction"]);

let sortState: ISort = reactive({ key: undefined, direction: "none" });

function sort(key: string) {
  if (key != sortState.key) {
    sortState.key = key;
    sortState.direction = "asc";
  } else if (key == sortState.key) {
    if (sortState.direction == "asc") {
      sortState.direction = "desc";
    } else if (sortState.direction == "desc") {
      sortState.direction = "none";
    } else if (sortState.direction == "none") {
      sortState.direction = "asc";
    }
  }
  if (sortState.direction) console.log("SORT", key);
}

const sortedRows = computed(() => {
  if (!sortState.key) {
    return props.rows;
  } else {
    if (sortState.direction == "asc") {
      return _.sortBy(
        [...props.rows],
        [
          function (str: any) {
            return str[sortState.key as string].toLowerCase();
          },
        ]
      );
    } else if (sortState.direction == "desc") {
      return _.sortBy(
        [...props.rows],
        [
          function (str: any) {
            return str[sortState.key as string].toLowerCase();
          },
        ]
      ).reverse();
    } else if (sortState.direction == "none") {
      return props.rows;
    }
  }
});

function switchSortState(key: string) {
  if (sortState.key == key) {
    if (sortState.direction == "asc") {
      return ArrowUpOnSquareIcon;
    } else if (sortState.direction == "desc") {
      return ArrowDownOnSquareIcon;
    } else {
    }
    return ArrowsUpDownIcon;
  } else {
    return ArrowsUpDownIcon;
  }
}

function generateUniqueId(el: Record<string, any> | ITableColumn): string {
  let key: string = Object.keys(el)[0];
  return (
    Date.now().toString(36) +
    Math.random().toString(36).substring(2, 5) +
    el[key]
  );
}

function triggerClick(data: {
  row: Record<string, any>;
  column: ITableColumn;
}) {
  emit("clickAction", data);
}
</script>

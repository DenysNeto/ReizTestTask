<template>
  <header
    class="z-10 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div
      class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
      <!-- Mobile hamburger -->
      <button
        @click="toggleSideMenu"
        class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
        aria-label="Menu">
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <!-- Search input -->
      <UISearchBar placeholder="Search"></UISearchBar>
      <ul class="flex items-center flex-shrink-0 space-x-6">
        <!-- Notifications menu -->
        <li class="relative">
          <button
            class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
            aria-label="Notifications"
            aria-haspopup="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none">
              <path
                d="M12 6.54352V9.87352"
                stroke="#ADA7A7"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round" />
              <path
                d="M12.02 2.10352C8.34002 2.10352 5.36002 5.08352 5.36002 8.76352V10.8635C5.36002 11.5435 5.08002 12.5635 4.73002 13.1435L3.46002 15.2635C2.68002 16.5735 3.22002 18.0335 4.66002 18.5135C9.44002 20.1035 14.61 20.1035 19.39 18.5135C20.74 18.0635 21.32 16.4835 20.59 15.2635L19.32 13.1435C18.97 12.5635 18.69 11.5335 18.69 10.8635V8.76352C18.68 5.10352 15.68 2.10352 12.02 2.10352Z"
                stroke="#ADA7A7"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round" />
              <path
                d="M15.33 18.9235C15.33 20.7535 13.83 22.2535 12 22.2535C11.09 22.2535 10.25 21.8735 9.64998 21.2735C9.04998 20.6735 8.66998 19.8335 8.66998 18.9235"
                stroke="#ADA7A7"
                stroke-width="1.5"
                stroke-miterlimit="10" />
            </svg>
            <span
              aria-hidden="true"
              class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
          </button>
        </li>
        <!-- Profile menu -->
        <li class="relative">
          <button
            class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
            aria-haspopup="true">
            <img
              class="object-cover w-8 h-8 rounded-full"
              src="../assets/profileAvtar.png"
              alt=""
              aria-hidden="true" />
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import UISearchBar from "@/components/UI/UISearchBar.vue";

const emits = defineEmits(["openSideMenu"]);

function toggleSideMenu() {
  return emits("openSideMenu");
}
</script>

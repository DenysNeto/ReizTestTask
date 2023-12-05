<template>
  <div>
    <aside
      class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block h-screen border-r border-gray-200 dark:border-gray-700">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <span
          style="
            color: #013cc6;
            fontfamily: Poppins;
            fontsize: 24px;
            fontstyle: normal;
            fontweight: 500;
            lineheight: normal;
          "
          class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
          Sales.
        </span>
        <ul class="mt-12">
          <li class="relative px-6 py-1" v-for="page in pages" :key="page.name">
            <router-link
              exact-active-class="bg-purple-400 text-white"
              class="inline-flex items-center w-full text-sm font-semibold transition duration-200 ease-in hover:bg-purple-500 hover:text-white py-2 px-2 rounded-lg"
              :to="`/${page.to}`">
              <component
                :is="page.icon"
                class="flex-shrink-0 h-6 w-6"
                aria-hidden="true" />
              <span class="ml-4">{{ page.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <button
        class="px-6 py-1 relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M12.0001 2.24994C10.0718 2.24994 8.1867 2.82177 6.58332 3.89311C4.97994 4.96445 3.73026 6.4872 2.9923 8.26878C2.25435 10.0504 2.06126 12.0108 2.43747 13.9021C2.81368 15.7934 3.74227 17.5307 5.10584 18.8942C6.4694 20.2578 8.20668 21.1864 10.098 21.5626C11.9893 21.9388 13.9497 21.7457 15.7313 21.0078C17.5129 20.2698 19.0356 19.0201 20.107 17.4167C21.1783 15.8134 21.7501 13.9283 21.7501 11.9999C21.7472 9.41498 20.719 6.93672 18.8912 5.10888C17.0633 3.28103 14.5851 2.25286 12.0001 2.24994V2.24994ZM12.0002 18C11.7777 18 11.5602 17.934 11.3752 17.8104C11.1902 17.6868 11.046 17.5111 10.9608 17.3055C10.8757 17.0999 10.8534 16.8737 10.8968 16.6555C10.9402 16.4373 11.0473 16.2368 11.2047 16.0795C11.362 15.9221 11.5625 15.815 11.7807 15.7716C11.9989 15.7282 12.2251 15.7505 12.4307 15.8356C12.6363 15.9208 12.812 16.065 12.9356 16.25C13.0592 16.435 13.1252 16.6525 13.1252 16.875C13.1252 17.1733 13.0067 17.4595 12.7957 17.6705C12.5847 17.8814 12.2985 18 12.0002 18ZM12.7501 13.4164V13.5004C12.7501 13.6993 12.6711 13.8901 12.5305 14.0307C12.3898 14.1714 12.199 14.2504 12.0001 14.2504C11.8012 14.2504 11.6105 14.1714 11.4698 14.0307C11.3291 13.8901 11.2501 13.6993 11.2501 13.5004V12.7504C11.2501 12.5515 11.3292 12.3607 11.4698 12.2201C11.6105 12.0794 11.8012 12.0004 12.0001 12.0004C12.371 12.0004 12.7335 11.8904 13.0418 11.6844C13.3502 11.4784 13.5905 11.1855 13.7324 10.8429C13.8743 10.5003 13.9115 10.1233 13.8391 9.7596C13.7668 9.39589 13.5882 9.06179 13.326 8.79957C13.0637 8.53735 12.7296 8.35877 12.3659 8.28642C12.0022 8.21408 11.6252 8.25121 11.2826 8.39312C10.94 8.53504 10.6472 8.77536 10.4411 9.0837C10.2351 9.39204 10.1251 9.75456 10.1251 10.1254C10.1251 10.3243 10.0461 10.5151 9.90546 10.6557C9.76481 10.7964 9.57404 10.8754 9.37513 10.8754C9.17622 10.8754 8.98545 10.7964 8.8448 10.6557C8.70415 10.5151 8.62513 10.3243 8.62513 10.1254C8.62521 9.49008 8.80462 8.86768 9.14271 8.32979C9.4808 7.7919 9.96385 7.36036 10.5363 7.08481C11.1088 6.80925 11.7474 6.70087 12.3787 6.77213C13.01 6.84338 13.6084 7.09138 14.105 7.48761C14.6016 7.88383 14.9763 8.41218 15.186 9.0119C15.3957 9.61162 15.4318 10.2583 15.2903 10.8777C15.1488 11.4971 14.8353 12.0639 14.3859 12.513C13.9366 12.9621 13.3696 13.2753 12.7501 13.4164Z"
            stroke="black" />
        </svg>
      </button>
    </aside>

    <!-- Mobile Sidebar -->
    <div
      v-if="isSideMenuOpen"
      x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0"
      x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      v-on:click="closeSideMenu"></div>
    <aside
      class="fixed inset-y-0 z-20 flex-shrink-0 w-96 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
      v-if="isSideMenuOpen"
      x-transition:enter="transition ease-in-out duration-150"
      x-transition:enter-start="opacity-0 transform -translate-x-20"
      x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in-out duration-150"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0 transform -translate-x-20"
      @keydown.escape="closeSideMenu">
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <ul>
          <li class="relative px-6 py-3" v-for="page in pages" :key="page.name">
            <router-link
              active-class="bg-purple-200"
              class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              :to="`/${page.to}`">
              <component
                :is="page.icon"
                class="flex-shrink-0 h-6 w-6"
                aria-hidden="true" />
              <span class="ml-4">{{ page.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  type FunctionalComponent,
  type HTMLAttributes,
  type VNodeProps,
} from "vue";
import {
  ClipboardDocumentCheckIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  ShoppingBagIcon,
  EnvelopeIcon,
  WalletIcon,
  Cog8ToothIcon,
} from "@heroicons/vue/20/solid";

const { isSideMenuOpen } = defineProps(["isSideMenuOpen"]);
const emits = defineEmits(["closeSideMenu"]);
interface IPages {
  name: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}>;
  to: string;
}

const isPagesMenuOpen = ref(false);
const pages: Array<IPages> = [
  {
    name: "Dashboard",
    icon: Squares2X2Icon,
    to: "",
  },
  {
    name: "Lab Test",
    icon: ClipboardDocumentCheckIcon,
    to: "lab_test",
  },
  {
    name: "Appointment",
    icon: CalendarDaysIcon,
    to: "appointment",
  },
  {
    name: "Medicine Order",
    icon: ShoppingBagIcon,
    to: "medicine_order",
  },
  {
    name: "Message",
    icon: EnvelopeIcon,
    to: "message",
  },
  {
    name: "Payment",
    icon: WalletIcon,
    to: "payment",
  },
  {
    name: "Settings",
    icon: Cog8ToothIcon,
    to: "settings",
  },
];

function togglePagesMenu() {
  isPagesMenuOpen.value = !isPagesMenuOpen.value;
}

function closeSideMenu() {
  return emits("closeSideMenu");
}
</script>

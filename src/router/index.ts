import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:productId",
    name: "product_details",
    component: () => import("@/views/ProductDetails.vue"),
  },
  {
    path: "/lab_test",
    name: "lab_test",
    component: () => import("@/views/LabTest.vue"),
  },
  {
    path: "/appointment",
    name: "appointment",
    component: () => import("@/views/Appointment.vue"),
  },
  {
    path: "/medicine_order",
    name: "medicine_order",
    component: () => import("@/views/MedicineOrder.vue"),
  },
  {
    path: "/message",
    name: "message",
    component: () => import("@/views/Message.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () => import("@/views/Payment.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/Settings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

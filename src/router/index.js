import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealLists from "../views/MealLists.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealLists,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
        <img
          :src="meal.strMealThumb"
          :alt="strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dolores
          quas voluptate a labore tenetur ea qui soluta sint? Libero!
        </p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded text-white border-2 border-none bg-red-500 hover:bg-red-600 transition-colors"
            >YouTube</a
          >
          <!-- <router-link
            to="/"
            class="px-3 py-2 rounded text-white border-2 border-none bg-green-500 hover:bg-green-600 transition-colors"
          >
            View
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

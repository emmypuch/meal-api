<template>
  <div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "/src/axiosClient.js";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

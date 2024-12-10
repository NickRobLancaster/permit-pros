<script setup>
import { ref, onMounted } from "vue";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
]; // List of themes
const selectedTheme = ref("light"); // Default theme

const updateTheme = () => {
  document.documentElement.setAttribute("data-theme", selectedTheme.value);
  localStorage.setItem("theme", selectedTheme.value); // Save to localStorage
};

onMounted(() => {
  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  selectedTheme.value = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
});
</script>

<template>
  <div>
    <label for="theme-selector" class="label">Choose Theme</label>
    <select
      id="theme-selector"
      v-model="selectedTheme"
      @change="updateTheme"
      class="select select-bordered w-full max-w-xs"
    >
      <option v-for="theme in themes" :key="theme" :value="theme">
        {{ theme }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>

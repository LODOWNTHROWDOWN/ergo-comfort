<template>
  <div id="app">
    <header class="p-11 bg-gray-100 dark:bg-slate-950 text-center border-slate-600">
      <img src="./assets/Comfort.png" alt="ergo comfort logo" class="absolute left-0 top-0 w-28">
      <h1 class="text-xl font-bold text-gray-900 capitalize dark:text-white font-serif">Ergo Comfort</h1>
      <toggle-button class="right-4 absolute top-8"></toggle-button>
    </header>
    <main class="dark:bg-slate-950 min-h-screen font-serif">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


import ToggleButton from "@/components/ToggleButton";
export default {
  name: 'App',
  components: {ToggleButton},
};
</script>

<style>
/* Global styles */
#app {
  text-align: center;
}

header {
  border-bottom: 1px solid rgb(30 41 59);
}

.answer {
  border-bottom: 1px solid rgb(30 41 59);
}

.summary {
  width: 50%;
  margin: auto;
}

/* You can add more styles as per your need */
</style>

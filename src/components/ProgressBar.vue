<template>
  <div class="text-gray-700 dark:text-gray-200">
    Step {{ step + 1 }} of {{ total }}
  </div>
</template>

<script>
export default {
  props: {
    step: Number,
    total: Number
  }
};
</script>

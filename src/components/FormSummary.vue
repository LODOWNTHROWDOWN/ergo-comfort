<template>
  <div>
    <div v-for="(answer, key) in answers" :key="key" class="text-gray-700 dark:text-gray-200 pt-8 text-lg pb-4 summary">
      <p class="answer py-2 uppercase tracking-wider dark:border-slate-600">{{ key }}</p><p class="py-6">{{ answer }}</p>
      <button class="my-1 mb-2 text-white md:mb-0 bg-red-700 dark:bg-green-400 dark:hover:bg-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider dark:text-slate-900 rounded-full hover:shadow-lg hover:bg-red-800"
              @click="edit(key)">Edit</button>
    </div>
    <div class="mt-6">
      <div class="mb-4">
    <button class="font-medium text-white text-sm inline-flex items-center justify-center px-3 py-4 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full dark:hover:bg-green-500 bg-red-700 dark:bg-green-400 hover:bg-red-800 dark:text-slate-900 focus:outline-none focus-visible:ring-2"
            @click="submit" >Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array,
    answers: Object
  },
  methods: {
    edit(questionKey) {
      const step = this.questions.findIndex(q => q.label === questionKey);
      console.log(step)
      if (step >= 0) {
        this.$emit('edit', step);
      }
    },
    submit() {
      this.$emit('submit');
    }
  }
};
</script>

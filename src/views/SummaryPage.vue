<template>
  <div class="summary-page">
    <FormSummary :questions="questions" :answers="answers" @edit="handleEdit" @submit="handleSubmit" />
  </div>
</template>

<script>
import FormSummary from '@/components/FormSummary.vue'; // Adjust the path as necessary

export default {
  components: {
    FormSummary
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    answers() {
      return this.$store.state.answers;
    }
  },
  methods: {
    async handleSubmit() {
      console.log('Form Submitted: ', this.answers);
      alert('Thank You For Your Form Submission!');
      localStorage.removeItem('formState'); // Clear local storage state on submission
      this.$store.commit('resetState'); // Resets the Vuex state
      this.$router.push({ path: '/'})

    },
    handleEdit(step) {
      this.$router.push({ path: '/form', query: { question: step }})
    },
  }
};
</script>

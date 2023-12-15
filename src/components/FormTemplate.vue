<template>
  <div class="min-h-max pb-12 bg-gray-100 dark:bg-slate-950 flex items-center justify-center bg-white rounded shadow-lg p-4 px-4 mb-6">
    <div class="container max-w-3xl mx-auto">
    <ProgressBar :step="currentStep" :total="questions.length - 1"/>
    <FormQuestion
        v-if="currentQuestion"
        :question="currentQuestion"
        :initialAnswer="answers[currentQuestion.label]"
        :currentStep="currentStep"
        :questionsLength="questions.length - 1"
        @showSummaryPage="showSummaryPage"
        @next="handleNext"
        @previous="handlePrevious"
        @update="updateAnswers"
    />

  </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';
import FormQuestion from './FormQuestion.vue';
import formConfig from '@/assets/formConfig.json';

export default {
  components: {
    ProgressBar,
    FormQuestion
  },
  data() {
    return {
      questions: formConfig,
      currentStep: 0,
      answers: {},
    };
  },
  created() {
    // Loads saved question data based on current step
    this.loadState();

  },
  mounted() {
      const questionId = this.$route.query.question;
      this.setCurrentQuestion(questionId);
  },
  watch: {
    // saves data from current step on change
    currentStep() {
      this.saveState();
    },
    answers: {
      deep: true, // Watch for changes in nested properties
      // saves data from current step on change
      handler() {
        this.saveState();
      }
    }
  },
  computed: {
    // Sets current question
    currentQuestion() {
      return this.questions.length - 1 > this.currentStep ? this.questions[this.currentStep] : null;
    },

  },

  methods: {
    // Switches to specific question based on corresponding step number
    setCurrentQuestion(questionId){
      this.currentStep = Number(questionId);
    },
    // Advances next step to show next question
    handleNext() {
      if (this.currentStep < this.questions.length) {
        this.currentStep++;
        this.$router.push({ query: { question: this.currentStep + 1}})

      }
    },
    // reduces current step to show previous question
    handlePrevious() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.$router.push({ query: { question: this.currentStep + 1}})
      }
    },
    // Updates answer object
    updateAnswers(answer) {
      this.answers[this.currentQuestion.label] = answer;
    },

    showSummaryPage() {
      // Direct Vuex commit
      this.$store.commit('setFormData', {
        questions: this.questions,
        answers: this.answers
      });
      // Navigate to the summary page
      this.$router.push('/summary');
    },

    saveState() {
      const formState = {
        currentStep: this.currentStep,
        answers: this.answers
      };
      localStorage.setItem('formState', JSON.stringify(formState));
    },
    // Parses saved state from localStorage to repopulate question with saved answer
    loadState() {
      const savedState = localStorage.getItem('formState');
      if (savedState) {
        const {currentStep, answers} = JSON.parse(savedState);
        this.currentStep = currentStep;
        this.answers = answers;
      }
    }
  }
};
</script>

<template>
  <div class="pt-11">
    <h2 class="text-gray-700 dark:text-gray-200 pt-8 text-lg pb-4">{{ question.label }}</h2>
    <!-- Text Input -->
    <div class="lg:col-span-2">
      <div class="grid grid-cols-6 gap-4 text-sm">
        <div class="md:col-start-2 col-span-4">
          <input v-if="question.type === 'text'" type="text" :name="question.name" v-model="localAnswer"
                 @input="updateAnswer"
                 class="text-center block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-green-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          <p class="text-sm text-red-600 error" v-if="error && question.name === 'email'">**You must enter a valid Email Address**</p>
        </div>
      </div>
    </div>

    <!-- Telephone Input -->
    <div class="lg:col-span-2">
      <div class="grid grid-cols-6 gap-4 text-sm">
        <div class="md:col-start-2 col-span-4">
          <input v-if="question.type === 'tel'" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" :name="question.name" v-model="localAnswer"
                 @input="updateAnswer"
                 class="text-center block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-green-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          <p class="text-sm text-red-600 error" v-if="error && question.name === 'email'">**You must enter a valid Email Address**</p>
        </div>
      </div>
    </div>

    <!-- Dropdown Input -->
    <div class="lg:col-span-2">
      <div class="grid grid-cols-6 gap-4 text-sm">
        <div class="md:col-start-2 col-span-4">
    <select v-if="question.type === 'dropdown'" :name="question.name" v-model="localAnswer" @change="updateAnswer"
            class="text-center block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
      <option v-for="option in question.options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
        </div>
      </div>
    </div>

    <!-- Radio Input -->
    <div v-if="question.type === 'radio'" class="flex justify-center">
      <div v-for="option in question.options" :key="option.value" class="p-4 mx-2 basis-1/4 items-center ps-4 border border-gray-300 rounded dark:border-gray-700">
        <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               type="radio" :id="option.value" :value="option.value" :name="question.name"
               v-model="localAnswer" @change="updateAnswer">
        <label class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" :for="option.value">{{ option.label }}</label>
      </div>
    </div>

    <!-- Datepicker Input -->
    <div class="lg:col-span-2">
      <div class="grid grid-cols-6 gap-4 text-sm">
        <div class="md:col-start-2 col-span-4">
    <input v-if="question.type === 'datepicker'" type="date" :name="question.name" v-model="localAnswer"
           @input="updateAnswer"
           class="text-center block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
    <p class="text-sm text-red-600 error" v-if="error">**This is a required field**</p>
        </div>
      </div>
    </div>

    <!-- Checkbox Input -->
        <div v-if="question.type === 'checkbox'" class="flex flex-wrap justify-center">
          <div v-for="option in question.options" :key="option.value" class="p-4 mx-2 my-2 basis-1/3 items-center ps-4 border border-gray-300 rounded dark:border-gray-700">
            <input
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                :id="option.value"
                :value="option.value"
                :name="question.name"
                :checked="localAnswer.includes(option.value)"
                @change="handleCheckboxChange(option.value)"
            >
            <label class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" :for="option.value">{{ option.label }}</label>
          </div>
        </div>

    <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
    <button class="mb-2 md:mb-0 bg-gray-700 dark:bg-white dark:hover:bg-gray-100 px-5 py-2 text-sm shadow-sm text-white font-medium tracking-wider border dark:text-slate-900 dark:text-gray-800 rounded-full hover:shadow-lg hover:bg-gray-800"
            @click="previous">Back</button>
    <button class="mb-2 md:mb-0 bg-red-700 dark:bg-green-400 dark:hover:bg-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-800"
            v-if="!isLastQuestion" @click="next">Next</button>
    <!-- Show Summary Button -->
    <button class="mb-2 md:mb-0 bg-red-700 dark:bg-green-400 dark:hover:bg-green-500 px-5 py-2 text-sm shadow-sm text-white font-medium tracking-wider dark:text-slate-900 rounded-full hover:shadow-lg hover:bg-red-800"
            v-if="isLastQuestion" @click="lastQuestion">Show Summary</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
    currentStep: Number,
    questionsLength: Number,
    initialAnswer: [String, Array, Number] // depending on your data structure
  },
  data() {
    return {
      localAnswer: this.question.type === 'checkbox' ?
          (Array.isArray(this.initialAnswer) ? this.initialAnswer : []) :
          [],
      error: false,
      isValid: true
    };
  },
  watch: {
    initialAnswer: {
      immediate: true,
      // If type checkbox set localAnswer for question to array
      handler(newVal) {
        if (this.question.type === 'checkbox' && Array.isArray(newVal)) {
          this.localAnswer = newVal;
        } else if (this.question.type !== 'checkbox') {
          this.localAnswer = newVal || '';
        }
      }
    },
    question(newQuestion, oldQuestion) {
      // Check if question has changed
      if (newQuestion.name !== oldQuestion.name) {
        this.localAnswer = this.initialAnswer || ''; // Reset answer for new question
      }
    }
  },
  computed: {
    isLastQuestion() {
      return this.currentStep === this.questionsLength
    }
  },
  methods: {
    // Make sure field was filled in
    isValidRequired(value) {
      if (Array.isArray(value)) {
        // For arrays check if it's not empty
        return value.length > 0;
      } else if (typeof value === 'string') {
        // For strings, trim and check length
        return value.trim().length > 0;
      }
      return false;
    },
    isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validate email
    },
    validation(value) {
      const validations = this.question.validation.split('|'); // Pulls in validation rules from JSON
      // Checks to see if answer passes validation based on rules from JSON
      for (let validation of validations) {
        if (validation === 'required' && !this.isValidRequired(value)) {
          this.isValid = false;
          break;
        }
        if (validation === 'email' && !this.isValidEmail(this.localAnswer)) {
          this.isValid = false;
          break;
        }
      }
    },
    next() {
      this.validation(this.localAnswer)

      if (this.isValid) {
        this.error = false;
        this.$emit('update', this.localAnswer); // Emit answer to parent component
        this.$emit('next'); // Emit next button click to parent component
      } else {
        this.error = true;
        this.$emit('update', '');
      }
    },

    previous() {
      this.$emit('previous'); // Emit previous button click to parent component
    },
    lastQuestion() {
      this.validation(this.localAnswer)

      if (this.isValid) {
        this.error = false;
        this.$emit('update', this.localAnswer); // Emit answer to parent component
        this.$emit('showSummaryPage');
      } else {
        this.error = true;
        this.$emit('update', '');
      }
    },
    // Removes or adds checkbox value to localAnswer @change
    handleCheckboxChange(optionValue) {
      if (this.localAnswer.includes(optionValue)) {
        this.localAnswer = this.localAnswer.filter(value => value !== optionValue);
      } else {
        this.localAnswer.push(optionValue);
      }
      this.$emit('update', ''); // Pushes update to parent component
    },
  }
};
</script>

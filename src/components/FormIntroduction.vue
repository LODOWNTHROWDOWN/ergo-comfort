<template>
  <div>
    <p class="text-gray-700 dark:text-gray-200 pt-8 text-lg pb-4"
    >Welcome to the future of ergonomic computing with ErgoComfort's Chair Mount Keyboard and Mouse Tray System.
      Designed for the modern professional, this innovative system transforms any chair into a productivity powerhouse.
      Perfect for those who spend long hours at their desks, our chair mount system alleviates strain on your neck,
      back, and shoulders, promoting a healthier and more comfortable workspace. Whether you're a gamer, programmer,
      writer, or office worker, ErgoComfort ensures that your comfort and efficiency are always at the forefront.

      In our commitment to understanding and addressing your specific needs, we kindly ask you to complete our client
      information form. This is a great opportunity for us to learn more about you and how our products can enhance your
      daily life. Your feedback is crucial in helping us create solutions that truly resonate with our diverse audience.
      Please take a moment to fill out the form.
    </p>
    <button class="my-1 mb-2 text-white md:mb-0 bg-red-700 dark:bg-green-400 dark:hover:bg-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider dark:text-slate-900 rounded-full hover:shadow-lg hover:bg-red-800"
    @click="goToForm">Go To Form</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToForm() {
      this.$router.push({ path: '/form', query: { question: 1 }})
    }
  }
};
</script>
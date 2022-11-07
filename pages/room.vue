<template>
  <div class="py-10 min-h-screen">
    <div class="container max-w-2xl mx-auto">
      <div class="flex">
        <nuxt-link
          to="/series"
          class="font-bold px-5 py-4 rounded-lg bg-gray-900 text-xs sm:text-sm flex items-center gap-x-2 hover:bg-gray-800 transition-colors mb-10"
          v-wave
        >
          <IconArrowLeft class="h-5" />
          <span>All series</span>
        </nuxt-link>
      </div>
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>NST Room</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <!-- <p class="mt-3">
        
      </p> -->

      <SeriesList :series="series" class="mt-6" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `NST Room – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      series: this.$store.getters.getSeriesByCategory("NST Room"),
    };
  },
};
</script>

<style></style>

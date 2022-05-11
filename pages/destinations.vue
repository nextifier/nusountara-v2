<template>
  <div class="py-10 md:py-16 min-h-screen">
    <div class="container max-w-2xl mx-auto px-4">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>NST Destinations</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <p class="mt-3">
        Join us in our music expedition, as we explore and unhide destinations
        and local talents throughout Indonesia.
      </p>

      <SeriesList :series="series" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `NST Destinations – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      series: this.$store.getters.getSeriesByCategory("NST Destinations"),
    };
  },
};
</script>

<style></style>

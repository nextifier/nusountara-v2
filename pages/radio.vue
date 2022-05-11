<template>
  <div class="py-10 md:py-16 min-h-screen">
    <div class="container max-w-2xl mx-auto px-4">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>NST Radio</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <p class="mt-3">
        NST RADIO brings you a series numbers of talented artists/musicians
        beyond Indonesia!
      </p>

      <SeriesList :series="series" class="mt-6" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `NST Radio – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      series: this.$store.getters.getSeriesByCategory("NST Radio"),
    };
  },
};
</script>

<style></style>

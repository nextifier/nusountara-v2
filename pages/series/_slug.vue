<template>
  <div class="lg:pt-10 pb-32">
    <div class="container xl:max-w-7xl mx-auto">
      <div class="grid grid-cols-1 gap-8 2xl:gap-12 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <iframe
            v-if="series.embed_link"
            class="aspect-video w-full"
            :src="series.embed_link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>

          <div class="px-4 mt-6 flex flex-col">
            <div
              v-if="series.categories && series.categories.length"
              class="flex flex-wrap gap-2"
            >
              <span
                v-for="(category, index) in series.categories"
                :key="index"
                class="px-3 py-2 bg-gray-900 rounded-md"
                >{{ category }}</span
              >
            </div>

            <h1
              class="mt-4 text-white font-bold tracking-tight text-xl md:text-2xl"
            >
              {{ series.title }}
            </h1>
            <span class="mt-1 sm:mt-2 text-gray-400">{{
              $formatDate(series.release_date)
            }}</span>

            <div
              class="mt-6 prose prose-invert"
              v-html="series.description"
            ></div>
          </div>
        </div>

        <div
          v-if="recommendedSeries && recommendedSeries.length"
          class="lg:col-span-4 px-4"
        >
          <div class="font-bold tracking-tight text-white text-base">
            Recommended videos
          </div>
          <SeriesList :series="recommendedSeries" class="mt-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.series.title} – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      series: {},
      recommendedSeries: [],
    };
  },

  created() {
    const seriesSlug = this.$route.params.slug;
    this.series = this.$store.getters.getSeriesBySlug(seriesSlug);
    this.recommendedSeries = this.$store.getters.getRecommendedSeries(
      this.series.categories[0],
      seriesSlug
    );
  },
};
</script>

<style></style>

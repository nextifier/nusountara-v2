<template>
  <div class="py-10 md:py-16">
    <div class="container max-w-md mx-auto px-4">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>Top Charts</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <div class="genres flex flex-col mt-10">
        <span class="font-bold text-base">Choose Genre</span>
        <div v-if="genres && genres.length" class="flex flex-wrap gap-2 mt-3">
          <button
            type="button"
            v-for="(genre, index) in genres"
            :key="index"
            class="px-4 py-2 rounded-lg border border-gray-500"
            :class="{ active: activeGenre == genre.slug }"
            v-wave
            @click="activeGenre = genre.slug"
          >
            {{ genre.name }}
          </button>
        </div>
      </div>

      <div v-if="genres && genres.length">
        <div v-for="(genre, index) in genres" :key="index">
          <div v-if="genre.slug == activeGenre">
            <div
              v-if="genre.tracks && genre.tracks.length"
              class="flex flex-col gap-y-2 md:gap-y-4 mt-10"
            >
              <div
                v-for="(track, index) in genre.tracks"
                :key="index"
                class="flex items-center gap-x-3 md:gap-x-5"
              >
                <div
                  class="rank-number w-4 flex-shrink-0 flex-grow-0 font-bold flex flex-col items-center gap-y-1"
                >
                  <div v-if="index < 3">
                    <IconStar
                      class="h-3"
                      :class="{
                        'text-[#FACC15]': index == 0,
                        'text-[#94A3B8]': index == 1,
                        'text-[#C47D36]': index == 2,
                      }"
                    />
                  </div>
                  {{ index + 1 }}
                </div>
                <nuxt-link :to="`/tracks/${track.slug}`">
                  <div
                    class="w-16 h-16 bg-gray-900 rounded-lg flex-shrink-0 flex-grow-0"
                  ></div>
                </nuxt-link>
                <div class="flex flex-col items-start gap-y-0.5">
                  <nuxt-link
                    :to="`/tracks/${track.slug}`"
                    class="font-bold text-white text-base sm:text-lg line-clamp-1"
                    >{{ track.title }}</nuxt-link
                  >
                  <span class="line-clamp-1">{{ track.artist }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Top Charts – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      genres: [],
      activeGenre: "house",
    };
  },

  created() {
    this.genres = this.$store.state.topCharts.genres;
  },
};
</script>

<style scoped>
.genres .active {
  @apply bg-primary text-white font-bold border-transparent;
}
</style>

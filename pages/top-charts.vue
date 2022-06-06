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
        <div
          v-if="genres && genres.length"
          class="flex flex-wrap gap-x-2 gap-y-3 mt-3"
        >
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
              v-if="tracks && tracks.length"
              class="flex flex-col md:gap-y-2 mt-10"
            >
              <nuxt-link
                :to="`/tracks/${track.slug}`"
                v-for="(track, index) in tracks"
                :key="index"
                class="flex items-center gap-x-3 md:gap-x-5 hover:bg-gray-900 transition-colors px-3 sm:px-4 py-2 rounded-xl"
                v-wave
              >
                <div
                  class="rank-number w-6 flex-shrink-0 flex-grow-0 flex flex-col items-center gap-y-1"
                  :class="{ 'font-bold text-white': index < 3 }"
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
                  <div class="inline-flex items-baseline">
                    {{ index + 1 }}
                    <div class="text-xs sm:text-sm">
                      <span v-if="index == 0">st</span>
                      <span v-else-if="index == 1">nd</span>
                      <span v-else-if="index == 2">rd</span>
                      <span v-else>th</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0 flex-grow-0"
                  >
                    <img
                      v-if="track.cover_image"
                      :src="require(`~/assets/img/tracks/${track.cover_image}`)"
                      :alt="track.title"
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="flex flex-col items-start gap-y-0.5">
                  <span
                    class="font-bold text-white text-base sm:text-lg line-clamp-1"
                    >{{ track.title }}</span
                  >
                  <span class="line-clamp-1">{{ track.artist }}</span>
                </div>
              </nuxt-link>
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
      genres: [
        {
          name: "House",
          slug: "house",
        },
        {
          name: "Techno",
          slug: "techno",
        },
        {
          name: "Dark Disco",
          slug: "dark-disco",
        },
        {
          name: "Melodic House and Techno",
          slug: "melodic-house-and-techno",
        },
        {
          name: "R&B and Hip-Hop",
          slug: "R&B-and-Hip-Hop",
        },
      ],
      activeGenre: "house",
    };
  },

  computed: {
    tracks() {
      return this.$store.getters.getTopChartTracksByGenre(this.activeGenre);
    },
  },
};
</script>

<style scoped>
.genres .active {
  @apply bg-primary text-white font-bold border-transparent;
}
</style>

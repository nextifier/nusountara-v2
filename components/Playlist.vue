<template>
  <div>
    <div class="flex items-center gap-x-3 lg:gap-x-6 mt-10 md:mt-16">
      <img
        :src="require(`~/assets/img/playlists/${playlist.cover_image}`)"
        :alt="playlist.name"
        class="w-20 h-20 lg:w-32 lg:h-32 object-cover rounded-lg smooth-corners sc-4 pointer-events-none"
      />
      <h1
        class="flex-shrink font-bold text-gray-100 text-2xl sm:text-4xl lg:text-6xl tracking-tighter"
      >
        {{ playlist.name }}
      </h1>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-4 sm:gap-y-16 mt-8 sm:mt-12"
    >
      <div
        v-for="(song, index) in playlist.songs"
        :key="index"
        class="flex flex-row items-center gap-x-3 sm:flex-col sm:items-start sm:gap-x-0 sm:gap-y-3"
      >
        <nuxt-link :to="`/tracks/${song.slug}`" class="sm:w-full flex-shrink-0">
          <div
            class="w-16 h-16 sm:w-full sm:h-full sm:aspect-w-1 sm:aspect-h-1"
          >
            <img
              v-if="song.cover_image"
              :src="require(`~/assets/img/tracks/${song.cover_image}`)"
              :alt="song.title"
              class="w-full h-full object-cover rounded-lg border border-gray-700/60 pointer-events-none"
              loading="lazy"
            />
            <div
              v-else
              class="w-full h-full rounded-lg bg-gray-900 border border-gray-700/60 flex items-center justify-center"
            >
              <Logomark class="h-24 xl:h-32 pointer-events-none" />
            </div>
          </div>
        </nuxt-link>

        <div class="slide-content px-1 flex flex-col">
          <nuxt-link
            :to="`/tracks/${song.slug}`"
            class="line-clamp-3 text-gray-200 hover:text-white transition-colors"
          >
            {{ song.title }}
          </nuxt-link>
          <div v-if="song.artist" class="text-xs sm:text-sm text-gray-400 mt-1">
            {{ song.artist }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: Object,
  },
};
</script>

<style></style>

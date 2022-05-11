<template>
  <div class="py-4 md:py-8">
    <BackFloatingButton />

    <div class="container max-w-md mx-auto px-4 flex flex-col">
      <img
        :src="require(`~/assets/img/tracks/${track.cover_image}`)"
        :alt="track.title"
        class="w-full aspect-square object-cover pointer-events-none rounded-lg border border-gray-900"
        loading="lazy"
      />
      <h1 class="font-bold tracking-tight text-white text-xl mt-4">
        {{ track.title }}
      </h1>
      <span class="mt-1">{{ track.artist }}</span>
      <div
        v-if="track.genres && track.genres.length"
        class="flex flex-wrap gap-2 mt-3"
      >
        <span
          v-for="(genre, index) in track.genres"
          :key="index"
          class="px-3 py-2 bg-gray-900 rounded-md uppercase text-xs sm:text-sm"
          >{{ genre }}</span
        >
      </div>

      <div v-if="track.spotify_embed_src" class="mt-6">
        <iframe
          :id="`${track.slug}-audio`"
          :src="track.spotify_embed_src"
          class="w-full h-20 rounded-lg"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <a
        :href="track.link.spotify"
        target="_blank"
        v-if="track.link.spotify"
        class="mt-3 flex justify-end items-center"
      >
        <span class="font-bold text-sm">Open in</span>
        <LogoSpotify class="ml-1 h-6 text-[#1ED760]" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.track.title}`,
    };
  },

  data() {
    return {
      track: {},
    };
  },

  created() {
    const trackSlug = this.$route.params.slug;
    this.track = this.$store.getters.getTrackBySlug(trackSlug);
  },
};
</script>

<style></style>

<template>
  <div class="py-10 md:py-16">
    <div class="container mx-auto px-4">
      <div class="flex">
        <nuxt-link
          to="/playlists"
          class="flex items-center gap-x-1 bg-gray-900 hover:bg-gray-800 text-gray-300 px-4 py-3 rounded-lg text-xs sm:text-sm"
          v-wave
        >
          <IconArrowLeft class="h-4 text-white" />
          <span>All Playlists</span>
        </nuxt-link>
      </div>

      <Playlist :playlist="playlist" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.playlist.name} – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      playlist: {},
    };
  },

  created() {
    const playlistSlug = this.$route.params.slug;
    this.playlist = this.$store.getters.getPlaylistBySlug(playlistSlug);
  },
};
</script>

<style></style>

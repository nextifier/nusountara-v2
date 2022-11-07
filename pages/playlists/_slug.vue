<template>
  <div class="pt-10 md:pt-16 pb-32">
    <div class="container">
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

<template>
  <div class="flex gap-x-5 items-center lg:flex-col lg:items-start gap-y-3">
    <span class="footer-link-label">Available on</span>
    <div class="flex gap-x-5">
      <a
        :href="$store.state.youtube"
        target="_blank"
        class="tooltipped"
        data-tooltip="YouTube"
      >
        <IconYouTube class="h-8" />
      </a>
      <a
        :href="$store.state.spotify"
        target="_blank"
        class="tooltipped"
        data-tooltip="Spotify"
      >
        <IconSpotify class="h-8" />
      </a>
      <a
        :href="$store.state.soundcloud"
        target="_blank"
        class="tooltipped"
        data-tooltip="SoundCloud"
      >
        <IconSoundCloud class="h-8" />
      </a>
      <a
        :href="$store.state.mixcloud"
        target="_blank"
        class="tooltipped"
        data-tooltip="MixCloud"
      >
        <IconMixCloud class="h-8" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

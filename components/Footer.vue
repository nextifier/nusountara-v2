<template>
  <footer class="pb-24 lg:pb-6">
    <div class="container mx-auto">
      <div
        class="grid grid-cols-2 md:grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-16 py-24 md:py-32"
      >
        <div
          class="col-span-2 md:col-span-6 lg:col-span-5 xl:col-span-5 2xl:col-span-4 flex flex-col items-start gap-y-3 md:gap-y-5 overflow-hidden"
        >
          <div class="flex items-center gap-x-2.5">
            <a
              :href="`https://www.instagram.com/${$store.state.instagram}`"
              target="_blank"
              class="p-[3px] rounded-full bg-gradient-to-tr from-[#FCB045] to-[#FD1D1D]"
            >
              <div
                class="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center border-4 border-black"
              >
                <Logomark class="h-7 text-white" />
              </div>
            </a>

            <div
              class="flex flex-col items-start gap-y-0.5 font-bold tracking-tight text-white"
            >
              <span class="text-base !leading-none"
                >Connect with us on Instagram</span
              >
              <a
                :href="`https://www.instagram.com/${$store.state.instagram}`"
                target="_blank"
                class="text-2xl !leading-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FCB045] hover:to-[#FD1D1D] transition"
                >@nusountara</a
              >
            </div>
          </div>

          <AvailableOn class="lg:hidden" />
        </div>

        <div class="footer-link-container">
          <span class="footer-link-label">Series</span>
          <div class="footer-link-list">
            <nuxt-link to="/series">All Series</nuxt-link>
            <nuxt-link to="/talks">NST Talks</nuxt-link>
            <nuxt-link to="/radio">NST Radio</nuxt-link>
            <nuxt-link to="/destinations">NST Destinations</nuxt-link>
          </div>
        </div>

        <div class="footer-link-container">
          <span class="footer-link-label">Discover</span>
          <div class="footer-link-list">
            <nuxt-link to="/top-charts">Top Charts</nuxt-link>
            <nuxt-link to="/events">Events</nuxt-link>
            <nuxt-link to="/collections">Collections</nuxt-link>
            <nuxt-link to="/news">News</nuxt-link>
            <nuxt-link to="/artists">Artists</nuxt-link>
            <nuxt-link to="/playlists">Playlists</nuxt-link>
          </div>
        </div>

        <div class="footer-link-container">
          <AvailableOn class="hidden lg:flex" />
        </div>
      </div>

      <div
        class="lg:py-2 flex items-center justify-center gap-x-4 footer-link-list"
      >
        <nuxt-link to="/terms" class="footer-link">Terms</nuxt-link>
        <span class="w-px h-1 bg-gray-600"></span>
        <nuxt-link to="/privacy" class="footer-link">Privacy</nuxt-link>
        <span class="w-px h-1 bg-gray-600"></span>
        <nuxt-link to="/contact" class="footer-link">Contact</nuxt-link>
      </div>

      <div
        class="py-6 text-xs flex justify-center items-center text-center text-gray-400"
      >
        <span
          >Copyright © {{ new Date().getFullYear() }} Nusountara. All rights
          reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    M.Tooltip.init(document.querySelectorAll(".tooltipped"), {
      position: "bottom",
    });
  },
};
</script>

<style lang="scss">
.footer-link-label {
  @apply text-base sm:text-lg font-bold text-white;
}

.footer-link-container {
  @apply col-span-1 md:col-span-2 flex flex-col;

  & .footer-link-list {
    @apply flex flex-col text-sm mt-4 gap-y-3;

    & a {
      @apply hover:text-white transition-colors;
    }
  }
}

.footer-link {
  @apply hover:text-white transition-colors;
}
</style>

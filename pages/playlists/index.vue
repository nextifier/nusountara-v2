<template>
  <div class="py-10 md:py-16">
    <div
      v-if="$store.state.playlists.list && $store.state.playlists.list.length"
    >
      <div
        v-for="(playlist, index) in $store.state.playlists.list"
        :key="index"
        class="swiper-container w-full mb-16 md:mb-24"
      >
        <div
          class="container mx-auto px-4 mb-4 sm:mb-6 flex items-end justify-between gap-x-3"
        >
          <div class="flex items-center gap-x-3 lg:gap-x-6">
            <div class="smooth-corners sc-4">
              <nuxt-link :to="`/playlists/${playlist.slug}`">
                <img
                  :src="
                    require(`~/assets/img/playlists/${playlist.cover_image}`)
                  "
                  :alt="playlist.name"
                  class="w-20 h-20 lg:w-32 lg:h-32 object-cover rounded-lg"
                />
              </nuxt-link>
            </div>
            <nuxt-link
              :to="`/playlists/${playlist.slug}`"
              class="flex flex-col gap-y-1 lg:gap-y-3 items-start"
            >
              <h3
                class="flex-shrink font-bold text-gray-100 text-xl sm:text-3xl lg:text-5xl tracking-tighter"
              >
                {{ playlist.name }}
              </h3>
              <div
                class="flex-shrink-0 font-bold tracking-tight text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <span>See all</span>
                <IconArrowRight class="h-4 ml-1" />
              </div>
            </nuxt-link>
          </div>
        </div>
        <div
          v-swiper="swiperOption"
          :instance-name="playlist.slug"
          class="mt-6 md:mt-10"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide slide-px mr-4"></div>
            <div
              v-for="(track, index) in playlist.tracks"
              :key="index"
              class="swiper-slide slide-item flex flex-col gap-y-3"
            >
              <nuxt-link
                :to="`/tracks/${track.slug}`"
                class="sm:w-full flex-shrink-0"
              >
                <div class="aspect-square">
                  <img
                    v-if="track.cover_image"
                    :src="require(`~/assets/img/tracks/${track.cover_image}`)"
                    :alt="track.title"
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
                  :to="`/tracks/${track.slug}`"
                  class="line-clamp-3 text-gray-200 hover:text-white transition-colors"
                >
                  {{ track.title }}
                </nuxt-link>
                <div
                  v-if="track.artist"
                  class="text-xs sm:text-sm text-gray-400 mt-1"
                >
                  {{ track.artist }}
                </div>
              </div>
            </div>
            <div class="swiper-slide slide-px"></div>
          </div>

          <div class="swiper-button-prev !hidden md:!flex">
            <IconArrowLeft class="w-5 h-5 text-white stroke-current" />
          </div>
          <div class="swiper-button-next !hidden md:!flex">
            <IconArrowRight class="w-5 h-5 text-white stroke-current" />
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
      title: `Playlists – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        freeMode: true,
        grabCursor: true,
        slidesPerView: "auto",
      },
    };
  },
};
</script>

<style scoped>
.slide-item {
  @apply rounded-lg overflow-hidden mr-3 sm:mr-6 w-[150px] sm:w-[250px] h-auto;
}
</style>

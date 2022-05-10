<template>
  <section
    v-if="$store.state.banners.list"
    id="banners"
    class="container mx-auto px-1.5 py-10 md:py-16"
  >
    <div class="swiper-container w-full">
      <div v-swiper="swiperOption" instance-name="banners" class="group !py-10">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in $store.state.banners.list"
            :key="index"
            class="swiper-slide slide-item flex flex-col gap-y-3 relative"
          >
            <a v-if="slide.externalLink" :href="slide.link" target="_blank">
              <div class="aspect-w-16 aspect-h-9">
                <img
                  :src="require(`~/assets/img/banners/${slide.img}`)"
                  class="w-full h-full rounded-lg bg-gray-900 object-cover pointer-events-none border border-gray-900"
                />
              </div>
            </a>
            <nuxt-link v-else :to="slide.link">
              <div class="aspect-w-16 aspect-h-9">
                <img
                  :src="require(`~/assets/img/banners/${slide.img}`)"
                  class="w-full h-full rounded-lg bg-gray-900 object-cover pointer-events-none border border-gray-900"
                />
              </div>
            </nuxt-link>
            <a
              v-if="slide.withButton"
              :href="slide.link"
              target="_blank"
              class="absolute bottom-4 right-4 px-3 py-2 bg-primary hover:bg-primary-darken border border-white/10 transition-color duration-300 backdrop-blur-xl rounded-lg text-white uppercase text-xs sm:text-sm flex items-center shadow-md"
              v-wave
            >
              <svg
                class="h-2.5 sm:h-3 fill-current text-white mr-1.5 sm:mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 14"
              >
                <path d="M8,5V19l11-7Z" transform="translate(-8 -5)" />
              </svg>
              <span>{{ slide.buttonLabel }}</span>
            </a>
          </div>
        </div>

        <div class="swiper-pagination !bottom-0"></div>

        <div
          class="swiper-button-prev !hidden md:!flex !-translate-x-16 group-hover:!translate-x-0 transition-transform"
        >
          <IconArrowLeft class="w-5 h-5 stroke-current" />
        </div>
        <div
          class="swiper-button-next !hidden md:!flex !translate-x-16 group-hover:!translate-x-0 transition-transform"
        >
          <IconArrowRight class="w-5 h-5 stroke-current" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // freeMode: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.slide-item {
  @apply rounded-lg overflow-hidden;
}
</style>

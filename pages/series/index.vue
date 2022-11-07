<template>
  <div class="py-10 md:py-16 xl:max-w-5xl xl:mx-auto">
    <div class="flex flex-col gap-y-16">
      <div v-for="(category, index) in categories" :key="index">
        <div class="container">
          <h2
            class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
          >
            <span>{{ category.title }}</span>
            <span class="bg-primary h-2.5 w-5"></span>
          </h2>
          <p class="mt-2">{{ category.description }}</p>
        </div>

        <div class="sm:container">
          <div
            v-swiper="swiperOption"
            :instance-name="category.slug"
            class="group mt-6"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide slide-px"></div>

              <nuxt-link
                :to="`/series/${series.slug}`"
                v-for="(series, index) in category.series"
                :key="index"
                class="swiper-slide slide-item"
              >
                <div
                  class="aspect-video bg-gray-900 rounded-lg overflow-hidden"
                >
                  <img
                    v-if="series.cover_image"
                    :src="require(`~/assets/img/series${series.cover_image}`)"
                    :alt="series.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="flex flex-col px-1.5">
                  <span class="text-white mt-2.5 line-clamp-3">{{
                    series.title
                  }}</span>
                  <span class="text-xs sm:text-sm mt-2 text-gray-400">{{
                    $formatDate(series.release_date)
                  }}</span>
                </div>
              </nuxt-link>

              <div class="swiper-slide slide-px"></div>
            </div>

            <div
              class="swiper-button-prev !hidden md:!flex !-translate-x-20 group-hover:!translate-x-4 transition-transform !top-[35%]"
            >
              <IconArrowLeft class="w-5 h-5 stroke-current" />
            </div>
            <div
              class="swiper-button-next !hidden md:!flex !translate-x-20 group-hover:!-translate-x-4 transition-transform !top-[35%]"
            >
              <IconArrowRight class="w-5 h-5 stroke-current" />
            </div>
          </div>
        </div>

        <div class="container mt-6 md:mt-8">
          <div class="flex">
            <nuxt-link
              :to="`/${category.slug}`"
              class="font-bold px-5 py-4 rounded-lg bg-gray-900 text-xs sm:text-sm flex items-center gap-x-2 hover:bg-gray-800 transition-colors"
              v-wave
            >
              <span>View all episodes</span>
              <IconArrowRight class="h-5" />
            </nuxt-link>
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
      title: `Series – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      categories: [
        {
          title: "NST Talks",
          slug: "talks",
          description:
            "NST TALKS brings you to the world of the professional music scene in Indonesia and their personal life stories!",
          series: this.$store.getters.getSeriesByCategoryWithLimit("NST Talks"),
        },
        {
          title: "NST Radio",
          slug: "radio",
          description:
            "NST RADIO brings you a series numbers of talented artists/musicians beyond Indonesia!",
          series: this.$store.getters.getSeriesByCategoryWithLimit("NST Radio"),
        },
        {
          title: "NST Room",
          slug: "room",
          series: this.$store.getters.getSeriesByCategoryWithLimit("NST Room"),
        },
        {
          title: "NST Destinations",
          slug: "destinations",
          description:
            "Join us in our music expedition, as we explore and unhide destinations and local talents throughout Indonesia.",
          series:
            this.$store.getters.getSeriesByCategoryWithLimit(
              "NST Destinations"
            ),
        },
      ],

      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        freeMode: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        slidesPerView: "auto",
      },
    };
  },
};
</script>

<style scoped>
.slide-item {
  @apply w-[240px] sm:w-[300px] mr-2 md:mr-4 flex flex-col;
}

.slide-item:nth-last-of-type(1) {
  @apply !mr-0;
}
</style>

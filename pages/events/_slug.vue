<template>
  <div class="lg:pt-10 pb-32">
    <div class="sm:container">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-16">
        <div class="lg:col-span-6 lg:pl-4">
          <div
            v-swiper="swiperOption"
            :instance-name="event.slug"
            class="group"
            ref="swiperTop"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(image, index) in event.images"
                :key="index"
                class="swiper-slide slide-item"
              >
                <img
                  :src="require(`~/assets/img/events${image}`)"
                  class="w-full aspect-[4/5] object-contain lg:rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              class="swiper-button-prev !hidden md:!flex !-translate-x-20 group-hover:!translate-x-2 transition-transform"
            >
              <IconArrowLeft class="w-5 h-5 stroke-current" />
            </div>
            <div
              class="swiper-button-next !hidden md:!flex !translate-x-20 group-hover:!-translate-x-2 transition-transform"
            >
              <IconArrowRight class="w-5 h-5 stroke-current" />
            </div>
          </div>

          <div
            v-swiper="swiperThumbsOption"
            :instance-name="`${event.slug}-thumbs`"
            ref="swiperThumbs"
            class="gallery-thumbs mt-4"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(image, index) in event.images"
                :key="index"
                class="swiper-slide slide-item"
              >
                <img
                  :src="require(`~/assets/img/events${image}`)"
                  class="aspect-square object-cover rounded-xl smooth-corners sc-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 px-4 lg:pl-0">
          <div class="flex flex-col items-start lg:pt-8">
            <div
              class="flex items-center gap-x-2 px-4 py-4 rounded-full bg-gray-900 text-white text-xs sm:text-sm"
            >
              <span class="flex h-3 w-3 relative">
                <span
                  class="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75"
                  :class="{
                    'bg-green-400': event.status.toLowerCase() == 'upcoming',
                    'bg-rose-500': event.status.toLowerCase() == 'passed',
                  }"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3"
                  :class="{
                    'bg-green-600': event.status.toLowerCase() == 'upcoming',
                    'bg-rose-600': event.status.toLowerCase() == 'passed',
                  }"
                ></span>
              </span>
              <span class="uppercase">{{ event.status }}</span>
            </div>

            <div
              class="font-bold text-white text-xl lg:text-3xl xl:text-4xl mt-3 flex items-center gap-x-1"
            >
              <h1>{{ event.title }}</h1>
            </div>

            <div class="flex flex-col gap-y-3 mt-4">
              <div class="flex items-center gap-x-3">
                <IconCalendar class="h-5 sm:h-6" />
                <span>{{ event.date }}</span>
              </div>

              <div v-if="event.time" class="flex items-center gap-x-3">
                <IconTime class="h-5 sm:h-6" />
                <span>{{ event.time }}</span>
              </div>

              <div class="flex items-center gap-x-3">
                <IconLocation class="h-5 sm:h-6" />
                <span>{{ event.location }}</span>
              </div>

              <div v-if="event.description" class="mt-8 flex flex-col gap-y-2">
                <span class="font-bold text-base">Overview</span>
                <div
                  v-html="event.description"
                  class="prose prose-invert prose-a:text-accent-yellow text-sm sm:text-base leading-normal"
                ></div>
              </div>

              <div
                v-if="event.status.toLowerCase() == 'upcoming'"
                class="fixed bottom-0 inset-x-0 bg-black/80 backdrop-blur-lg border-t border-gray-700"
              >
                <div class="container">
                  <div
                    class="max-w-md ml-auto py-2 flex items-center justify-between"
                  >
                    <div class="text-white text-base sm:text-lg">
                      Total:
                      <span class="font-bold">{{ event.price }}</span>
                    </div>

                    <a
                      @click.prevent="openModal('bottom-sheet-checkout')"
                      class="px-6 py-3 bg-accent-yellow text-black font-bold rounded-lg cursor-pointer"
                      v-wave
                      >Checkout</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <bottom-sheet ref="bottom-sheet-checkout" id="bottom-sheet-checkout">
      <div class="modal-content px-4 sm:px-6 pt-2 pb-6 flex flex-col gap-y-3">
        <a
          v-if="event.tiketDotComLink"
          :href="event.tiketDotComLink"
          target="_blank"
          class="checkout-link"
          v-wave
        >
          <span>Continue on</span>
          <img src="~/assets/img/logo/tiketdotcom.svg" class="h-6" />
        </a>
        <a
          v-if="event.loketDotComLink"
          :href="event.loketDotComLink"
          target="_blank"
          class="checkout-link"
        >
          <span>Continue on</span>
          <span>LOKET.com</span>
        </a>
        <p class="text-xs sm:text-sm text-gray-400 mt-2">
          The price might be slightly different on any platform you choose to
          checkout with.
        </p>
      </div>
    </bottom-sheet>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.event.title} – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      event: {},
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        grabCursor: true,
        slidesPerView: 1,
      },
      swiperThumbsOption: {
        grabCursor: true,
        slidesPerView: 5,
        spaceBetween: 5,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        touchRatio: 0.2,
        centeredSlides: true,
      },
    };
  },

  methods: {
    openModal(modalSlug) {
      this.$refs[modalSlug].open();
    },

    closeModal(modalSlug) {
      this.$refs[modalSlug].close();
    },
  },

  created() {
    this.event = this.$store.getters.getEventBySlug(this.$route.params.slug);
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery-thumbs .swiper-slide {
  @apply opacity-60;

  &.swiper-slide-active {
    @apply opacity-100;
  }
}

#bottom-sheet-checkout {
  & .checkout-link {
    @apply bg-white text-black font-bold tracking-tight rounded-full py-3 px-4 flex items-center justify-center gap-x-1;
  }
}
</style>

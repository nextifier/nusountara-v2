<template>
  <section id="about">
    <div class="container max-w-7xl mx-auto">
      <div
        class="swiper-container w-full rotate-[-4deg] lg:rotate-0 scale-125 lg:scale-100"
      >
        <div v-swiper="swiperOption" instance-name="about" class="group !py-10">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide-item">
              <div class="relative">
                <img
                  src="~/assets/img/about/unhide-places.jpg"
                  alt="Unhide Places"
                  width="540"
                  height="675"
                  loading="lazy"
                />

                <div
                  class="absolute bottom-0 translate-y-1/2 inset-x-0 flex items-center justify-center"
                >
                  <IconUnhidePlaces />
                </div>
              </div>

              <div class="about-card-content">
                <div class="about-title">
                  <span>unhide</span>
                  <span>places</span>
                </div>
                <div class="about-description">
                  <p>
                    Get ready to witness the greens, the blues, and every other
                    shades of our beautiful Indonesia. As we explore hidden
                    corners and exotic places around the archipelago.
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide-item">
              <div class="relative">
                <img
                  src="~/assets/img/about/unmask-people.jpg"
                  alt="Unmask People"
                  width="540"
                  height="675"
                  loading="lazy"
                />

                <div
                  class="absolute bottom-0 translate-y-1/2 inset-x-0 flex items-center justify-center"
                >
                  <IconUnmaskPeople />
                </div>
              </div>

              <div class="about-card-content">
                <div class="about-title">
                  <span>unmask</span>
                  <span>people</span>
                </div>
                <div class="about-description">
                  <p>
                    Are you ready to get culture-shocked? As we present
                    Indonesia's very own high-voltage talents to the world.
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide slide-item">
              <div class="relative">
                <img
                  src="~/assets/img/about/unleash-parties.jpg"
                  alt="Unleash Parties"
                  width="540"
                  height="675"
                  loading="lazy"
                />

                <div
                  class="absolute bottom-0 translate-y-1/2 inset-x-0 flex items-center justify-center"
                >
                  <IconUnleashParties />
                </div>
              </div>
              <div class="about-card-content">
                <div class="about-title">
                  <span>unleash</span>
                  <span>parties</span>
                </div>
                <div class="about-description">
                  <p>
                    From mountains to forests to still waters. We turn them into
                    dance floor like never before. From whenever you are
                    watching, let's dance with us!
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        freeMode: true,
        loop: true,
        autoplay: true,
        speed: 4000,
        grabCursor: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   dynamicBullets: true,
        //   clickable: true,
        // },
        slidesPerView: 2,
        spaceBetween: 6,
        breakpoints: {
          1024: {
            loop: false,
            autoplay: false,
            slidesPerView: 3,
            spaceBetween: 12,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-item {
  @apply flex flex-col items-center text-center;

  & img {
    @apply aspect-[4/5] w-full object-cover rounded-lg;
  }

  & .about-card-content {
    @apply px-4 pt-8 md:pt-12;

    & .about-title {
      @apply flex flex-col text-white font-bold tracking-tighter text-3xl md:text-5xl xl:text-6xl leading-none mt-3 font-display relative;

      & span:first-child {
        @apply relative z-10 shadow-[0_10px_5px_rgba(0,0,0,0.5)] md:shadow-[0_20px_10px_rgba(0,0,0,0.5)];
      }

      & span:nth-child(2) {
        @apply relative z-0 md:-mt-1;
      }
    }

    & .about-description {
      @apply hidden lg:block mt-6;
    }
  }
}
</style>

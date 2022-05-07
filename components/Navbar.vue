<template>
  <div>
    <header
      class="fixed z-[998] w-full h-16 lg:h-[80px] flex items-center justify-center transition-all duration-300 ease-in-out text-sm bg-black"
    >
      <div
        class="container lg:max-w-[1920px] mx-auto px-4 lg:pl-8 lg:pr-12 h-full flex items-center"
      >
        <nuxt-link
          to="/"
          @click.native="$scrollToTopIfCurrentPageIs('index')"
          class="brand-logo flex items-center gap-x-2.5 sm:gap-x-3 flex-shrink-0"
          v-wave
        >
          <img
            src="~/assets/img/logo/logo-nusountara-icon-purple.svg"
            alt="Nusountara Logomark"
            class="h-7 sm:h-9 pointer-events-none"
          />
          <img
            src="~/assets/img/logo/logo-nusountara-type-white.svg"
            alt="Nusountara Logotype"
            class="lg:hidden xl:block h-4 sm:h-[18px] pointer-events-none"
          />
        </nuxt-link>

        <nav
          class="hidden absolute left-1/2 -translate-x-1/2 lg:flex lg:items-center gap-x-3"
        >
          <nuxt-link
            exact
            to="/"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('index')"
            v-wave
          >
            <span>Home</span>
          </nuxt-link>

          <nuxt-link
            to="/top-charts"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('top-charts')"
            v-wave
          >
            <span>Top Charts</span>
          </nuxt-link>

          <a
            data-target="dropdown-series"
            class="nav-link flex !items-end dropdown-trigger cursor-pointer"
            :class="{
              'nuxt-link-active': [
                'series',
                'talks',
                'radio',
                'destinations',
              ].includes($route.name),
            }"
            v-wave
          >
            <span>Series</span>
            <IconChevronDown class="h-4 ml-1" />
          </a>

          <ul id="dropdown-series" class="dropdown-content">
            <li>
              <div class="nav-dropdown-item">
                <div class="nav-dropdown-icon smooth-corners sc-3">
                  <nuxt-link
                    to="/series"
                    class="nav-dropdown-icon-container bg-gradient-to-br from-primary to-primary-darken"
                  >
                    <IconSeriesSolid class="h-6" />
                  </nuxt-link>
                </div>
                <nuxt-link to="/series" class="nav-dropdown-link"
                  >All Series</nuxt-link
                >
              </div>
            </li>

            <li>
              <div class="nav-dropdown-item">
                <div class="nav-dropdown-icon smooth-corners sc-3">
                  <nuxt-link
                    to="/talks"
                    class="nav-dropdown-icon-container bg-gradient-to-br from-blue-500 to-blue-600"
                  >
                    <IconTalksSolid class="h-6" />
                  </nuxt-link>
                </div>
                <nuxt-link to="/talks" class="nav-dropdown-link"
                  >NST Talks</nuxt-link
                >
              </div>
            </li>

            <li>
              <div class="nav-dropdown-item">
                <div class="nav-dropdown-icon smooth-corners sc-3">
                  <nuxt-link
                    to="/radio"
                    class="nav-dropdown-icon-container bg-gradient-to-br from-rose-500 to-rose-600"
                  >
                    <IconRadioSolid class="h-6" />
                  </nuxt-link>
                </div>
                <nuxt-link to="/radio" class="nav-dropdown-link"
                  >NST Radio</nuxt-link
                >
              </div>
            </li>

            <li>
              <div class="nav-dropdown-item">
                <div class="nav-dropdown-icon smooth-corners sc-3">
                  <nuxt-link
                    to="/destinations"
                    class="nav-dropdown-icon-container bg-gradient-to-br from-green-600 to-green-700"
                  >
                    <IconDestinationsSolid class="h-6" />
                  </nuxt-link>
                </div>
                <nuxt-link to="/destinations" class="nav-dropdown-link"
                  >NST Destinations</nuxt-link
                >
              </div>
            </li>
          </ul>

          <nuxt-link
            to="/events"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('events')"
            v-wave
          >
            <span>Events</span>
          </nuxt-link>

          <nuxt-link
            to="/collections"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('collections')"
            v-wave
          >
            <span>Collections</span>
          </nuxt-link>

          <nuxt-link
            to="/news"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('news')"
            v-wave
          >
            <span>News</span>
          </nuxt-link>

          <nuxt-link
            to="/contact"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('contact')"
            v-wave
          >
            <span>Contact</span>
          </nuxt-link>
        </nav>

        <div class="flex items-center gap-x-5 ml-auto">
          <div
            id="music-channels"
            class="hidden xl:flex items-center gap-x-5 text-gray-400"
          >
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
          <a
            @click.prevent="openModal('bottom-sheet-nav')"
            class="cursor-pointer lg:hidden flex-shrink-0 w-10 h-10 rounded-xl flex flex-col justify-center items-center"
            v-wave
          >
            <span class="h-px rounded-full bg-white w-6 -translate-y-1"></span>
            <span class="h-px rounded-full bg-white w-6 translate-y-1"></span>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {
      coverTrigger: false,
      hover: false,
      alignment: "left",
    });

    M.Tooltip.init(document.querySelectorAll(".tooltipped"), {
      position: "bottom",
    });
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  @apply px-4 xl:px-5 py-3 hover:bg-gray-900 flex justify-center items-center transition-colors relative h-full rounded-lg text-gray-200 flex-shrink-0;

  &.nuxt-link-active {
    @apply bg-gray-900 text-white;
  }
}

.dropdown-content {
  @apply hidden bg-gray-900 shadow-xl rounded-xl focus:outline-none overflow-y-auto opacity-0 absolute left-0 top-0 z-[1000] origin-center py-5 px-5;

  min-width: 160px !important;
  width: max-content !important;

  & li {
    @apply py-2;

    & .nav-dropdown-item {
      @apply flex relative h-12;

      & .nav-dropdown-icon {
        @apply absolute inset-y-0 left-0;

        & .nav-dropdown-icon-container {
          @apply w-12 h-12 rounded-2xl flex items-center justify-center text-white;
        }
      }

      & .nav-dropdown-link {
        @apply flex items-center w-full pl-16 pr-6 hover:bg-gray-800 rounded-xl;

        &.nuxt-link-active {
          @apply text-white bg-gray-800;
        }
      }
    }
  }
}
</style>

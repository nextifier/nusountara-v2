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
          <Logomark class="h-7 sm:h-9 text-primary" />
          <Logotype class="h-4 sm:h-[18px] lg:hidden xl:block text-white" />
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
                    to="/room"
                    class="nav-dropdown-icon-container bg-gradient-to-br from-yellow-500 to-yellow-600"
                  >
                    <IconRoomSolid class="h-6" />
                  </nuxt-link>
                </div>
                <nuxt-link to="/room" class="nav-dropdown-link"
                  >NST Room</nuxt-link
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

    <bottom-sheet
      ref="bottom-sheet-nav"
      id="bottom-sheet-nav"
      maxHeight="507px"
    >
      <div class="modal-content">
        <ul>
          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <nuxt-link
              to="/talks"
              @click.native="$scrollToTopIfCurrentPageIs('talks')"
              class="bottom-sheet-nav-link"
            >
              <IconTalks class="nav-link-icon" />
              <span>NST Talks</span>
            </nuxt-link>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <nuxt-link
              to="/radio"
              @click.native="$scrollToTopIfCurrentPageIs('radio')"
              class="bottom-sheet-nav-link"
            >
              <IconRadio class="nav-link-icon" />
              <span>NST Radio</span>
            </nuxt-link>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <nuxt-link
              to="/room"
              @click.native="$scrollToTopIfCurrentPageIs('room')"
              class="bottom-sheet-nav-link"
            >
              <IconRoom class="nav-link-icon" />
              <span>NST Room</span>
            </nuxt-link>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <nuxt-link
              to="/destinations"
              @click.native="$scrollToTopIfCurrentPageIs('destinations')"
              class="bottom-sheet-nav-link"
            >
              <IconDestinations class="nav-link-icon" />
              <span>NST Destinations</span>
            </nuxt-link>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <nuxt-link
              to="/news"
              @click.native="$scrollToTopIfCurrentPageIs('news')"
              class="bottom-sheet-nav-link"
            >
              <IconNews class="nav-link-icon" />
              <span>News</span>
            </nuxt-link>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <nuxt-link
              to="/contact"
              @click.native="$scrollToTopIfCurrentPageIs('contact')"
              class="bottom-sheet-nav-link"
            >
              <IconContact class="nav-link-icon" />
              <span>Contact</span>
            </nuxt-link>
          </li>
        </ul>

        <span class="divider"></span>

        <ul>
          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <a
              :href="$store.state.youtube"
              target="_blank"
              class="bottom-sheet-nav-link"
            >
              <IconYouTube class="nav-link-icon" />
              <span>YouTube</span>
            </a>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <a
              :href="$store.state.spotify"
              target="_blank"
              class="bottom-sheet-nav-link"
            >
              <IconSpotify class="nav-link-icon" />
              <span>Spotify</span>
            </a>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <a
              :href="$store.state.soundcloud"
              target="_blank"
              class="bottom-sheet-nav-link"
            >
              <IconSoundCloud class="nav-link-icon" />
              <span>SoundCloud</span>
            </a>
          </li>

          <li
            @click="closeModal('bottom-sheet-nav')"
            class="bottom-sheet-nav-item"
          >
            <a
              :href="$store.state.mixcloud"
              target="_blank"
              class="bottom-sheet-nav-link"
            >
              <IconMixCloud class="nav-link-icon" />
              <span>MixCloud</span>
            </a>
          </li>
        </ul>
      </div>
    </bottom-sheet>
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

  methods: {
    openModal(modalSlug) {
      this.$refs[modalSlug].open();
    },

    closeModal(modalSlug) {
      this.$refs[modalSlug].close();
    },
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

#bottom-sheet-nav {
  & .modal-content {
    @apply px-4 pt-2 pb-6 flex flex-col gap-y-4;

    & ul {
      @apply flex flex-col gap-y-2;

      & li {
        & a {
          @apply flex items-center gap-x-6 hover:bg-gray-800 transition-colors px-4 py-2 rounded-lg;

          &.nuxt-link-active {
            @apply text-white bg-gray-800;
          }

          & .nav-link-icon {
            @apply h-6;
          }
        }
      }
    }

    & .divider {
      @apply w-full h-px bg-gray-700;
    }
  }
}
</style>

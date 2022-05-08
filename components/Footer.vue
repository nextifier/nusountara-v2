<template>
  <footer>
    <div class="container mx-auto px-4">
      <div
        class="grid grid-cols-2 md:grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-16 py-32 md:py-48"
      >
        <div
          class="col-span-2 md:col-span-3 flex flex-col items-center md:items-start overflow-hidden"
        >
          <div class="flex flex-col items-center md:items-start">
            <nuxt-link
              to="/"
              @click.native="$scrollToTopIfCurrentPageIs('index')"
              class="brand-logo flex items-center gap-x-2.5 sm:gap-x-3 flex-shrink-0"
              v-wave
            >
              <Logomark class="h-7 sm:h-9 text-primary" />
              <Logotype class="h-4 sm:h-[18px] lg:hidden xl:block text-white" />
            </nuxt-link>

            <div class="flex items-center gap-x-8 mt-6">
              <a
                v-if="$store.state.youtube"
                :href="$store.state.youtube"
                target="_blank"
                class="hover:text-white transition-colors"
              >
                <svg
                  class="h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 37.174 27"
                >
                  <path
                    d="M-2359.408-851c-.116,0-11.643-.009-14.495-.816a4.78,4.78,0,0,1-3.29-3.412,38.9,38.9,0,0,1-.8-9.18,65.239,65.239,0,0,1,.779-9.339,4.78,4.78,0,0,1,3.29-3.412c2.842-.8,14.379-.84,14.5-.841s11.644.009,14.495.816a4.777,4.777,0,0,1,3.29,3.412c1.231,5.141.944,13.22.024,18.544a4.779,4.779,0,0,1-3.29,3.412C-2347.765-851.01-2359.292-851-2359.408-851Zm-3.719-19.285v11.571l9.632-5.785-9.632-5.786Z"
                    transform="translate(2378 878)"
                  />
                </svg>
              </a>

              <a
                v-if="$store.state.instagram"
                :href="`https://www.instagram.com/${$store.state.instagram}`"
                target="_blank"
                class="hover:text-white transition-colors"
              >
                <svg
                  class="h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27.006 27"
                >
                  <g transform="translate(0.075 -31.825)">
                    <g transform="translate(-0.075 31.825)">
                      <path
                        d="M13.431,38.4a6.922,6.922,0,1,0,6.922,6.922A6.911,6.911,0,0,0,13.431,38.4Zm0,11.423a4.5,4.5,0,1,1,4.5-4.5,4.509,4.509,0,0,1-4.5,4.5Zm8.82-11.706A1.615,1.615,0,1,1,20.637,36.5,1.611,1.611,0,0,1,22.251,38.119Zm4.585,1.639A7.99,7.99,0,0,0,24.655,34.1,8.043,8.043,0,0,0,19,31.92c-2.229-.127-8.911-.127-11.14,0A8.031,8.031,0,0,0,2.2,34.095,8.017,8.017,0,0,0,.02,39.752c-.127,2.229-.127,8.911,0,11.14A7.99,7.99,0,0,0,2.2,56.549,8.053,8.053,0,0,0,7.858,58.73c2.229.127,8.911.127,11.14,0a7.99,7.99,0,0,0,5.657-2.181,8.043,8.043,0,0,0,2.181-5.657c.127-2.229.127-8.9,0-11.134Zm-2.88,13.526A4.556,4.556,0,0,1,21.39,55.85c-1.777.7-5.995.542-7.959.542s-6.187.157-7.959-.542a4.556,4.556,0,0,1-2.567-2.567c-.7-1.777-.542-5.995-.542-7.959s-.157-6.187.542-7.959A4.556,4.556,0,0,1,5.472,34.8c1.777-.7,5.995-.542,7.959-.542s6.187-.157,7.959.542a4.556,4.556,0,0,1,2.567,2.567c.7,1.777.542,5.995.542,7.959S24.661,51.512,23.956,53.284Z"
                        transform="translate(0.075 -31.825)"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-link-container">
          <span class="footer-link-label">Discover</span>
          <div class="footer-link-list">
            <nuxt-link to="/events">Events</nuxt-link>
            <nuxt-link to="/guests">Guest Stars</nuxt-link>
            <nuxt-link to="/exhibitors">Exhibitors</nuxt-link>
            <nuxt-link to="/ticket">Buy Ticket</nuxt-link>
          </div>
        </div>

        <div class="footer-link-container">
          <span class="footer-link-label">Resources</span>
          <div class="footer-link-list">
            <nuxt-link to="/faq">FAQ</nuxt-link>
            <nuxt-link to="/safety-and-weapon-policy"
              >Safety & Weapon Policy</nuxt-link
            >
            <nuxt-link to="/anti-harassment-policy"
              >Anti-Harassment Policy</nuxt-link
            >
          </div>
        </div>

        <div class="footer-link-container">
          <span class="footer-link-label">Support</span>
          <div class="footer-link-list">
            <nuxt-link to="/report-incident">Report an Incident</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </div>
        </div>

        <div class="footer-link-container">
          <span class="footer-link-label">Legal</span>
          <div class="footer-link-list">
            <nuxt-link to="/terms">Terms of Service</nuxt-link>
            <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
          </div>
        </div>
      </div>

      <div
        class="py-6 text-xs flex justify-center items-center text-center text-gray-400"
      >
        <span
          >© {{ new Date().getFullYear() }} Indonesia Comic Con. All rights
          reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-link-container {
  @apply col-span-1 md:col-span-2 flex flex-col;

  .footer-link-label {
    @apply text-base sm:text-lg font-extrabold text-white;
  }

  & .footer-link-list {
    @apply flex flex-col text-sm mt-4 gap-y-3;

    & a {
      @apply hover:text-white transition-colors;
    }
  }
}
</style>

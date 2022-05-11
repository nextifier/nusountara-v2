<template>
  <div class="pb-32">
    <div
      class="w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 px-1 sm:px-4"
    >
      <img
        v-if="artist.cover_image"
        :src="require(`~/assets/img/artists/${artist.cover_image}`)"
        :alt="artist.name"
        class="w-full h-full object-cover rounded-lg sm:rounded-xl"
      />
    </div>

    <div class="max-w-[65ch] mx-auto px-4">
      <div class="flex flex-col items-center justify-center">
        <img
          :src="require(`~/assets/img/artists/${artist.profile_image}`)"
          :alt="artist.name"
          class="w-24 h-24 -mt-12 sm:w-32 sm:h-32 sm:-mt-y-16 xl:w-48 xl:h-48 xl:-mt-24 rounded-full object-cover object-top border-8 sm:border-[12px] border-black"
          @click.prevent="openModal('profile-img-modal')"
        />
        <h1
          class="text-white font-bold text-xl sm:text-2xl relative mt-2 text-center"
        >
          {{ artist.name }}
          <div
            class="absolute inset-y-0 -right-6 sm:-right-7 flex items-center"
          >
            <IconVerified class="h-5 sm:h-6" />
          </div>
        </h1>
        <span class="text-center">{{ artist.designation }}</span>
        <div class="social-media flex items-center gap-x-10 mt-6 sm:mt-10">
          <a
            v-if="artist.instagram"
            :href="artist.instagram"
            target="_blank"
            class="hover:text-white transition-colors"
          >
            <svg
              class="h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.006 27"
            >
              <g id="instagram" transform="translate(0.075 -31.825)">
                <g
                  id="Group_8109"
                  data-name="Group 8109"
                  transform="translate(-0.075 31.825)"
                >
                  <path
                    id="Path_7715"
                    data-name="Path 7715"
                    d="M13.431,38.4a6.922,6.922,0,1,0,6.922,6.922A6.911,6.911,0,0,0,13.431,38.4Zm0,11.423a4.5,4.5,0,1,1,4.5-4.5,4.509,4.509,0,0,1-4.5,4.5Zm8.82-11.706A1.615,1.615,0,1,1,20.637,36.5,1.611,1.611,0,0,1,22.251,38.119Zm4.585,1.639A7.99,7.99,0,0,0,24.655,34.1,8.043,8.043,0,0,0,19,31.92c-2.229-.127-8.911-.127-11.14,0A8.031,8.031,0,0,0,2.2,34.095,8.017,8.017,0,0,0,.02,39.752c-.127,2.229-.127,8.911,0,11.14A7.99,7.99,0,0,0,2.2,56.549,8.053,8.053,0,0,0,7.858,58.73c2.229.127,8.911.127,11.14,0a7.99,7.99,0,0,0,5.657-2.181,8.043,8.043,0,0,0,2.181-5.657c.127-2.229.127-8.9,0-11.134Zm-2.88,13.526A4.556,4.556,0,0,1,21.39,55.85c-1.777.7-5.995.542-7.959.542s-6.187.157-7.959-.542a4.556,4.556,0,0,1-2.567-2.567c-.7-1.777-.542-5.995-.542-7.959s-.157-6.187.542-7.959A4.556,4.556,0,0,1,5.472,34.8c1.777-.7,5.995-.542,7.959-.542s6.187-.157,7.959.542a4.556,4.556,0,0,1,2.567,2.567c.7,1.777.542,5.995.542,7.959S24.661,51.512,23.956,53.284Z"
                    transform="translate(0.075 -31.825)"
                  />
                </g>
              </g>
            </svg>
          </a>

          <a
            v-if="artist.facebook"
            :href="artist.facebook"
            target="_blank"
            class="hover:text-white transition-colors"
          >
            <svg
              class="h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.922 27"
            >
              <g id="Group_8108" data-name="Group 8108">
                <path
                  id="Path_7714"
                  data-name="Path 7714"
                  d="M4.045,27V14.924H0v-4.8H4.045V6.344C4.045,2.236,6.555,0,10.22,0a33.957,33.957,0,0,1,3.7.19V4.482H11.38C9.387,4.482,9,5.432,9,6.819v3.306h4.5l-.617,4.8H9V27"
                />
              </g>
            </svg>
          </a>

          <a
            v-if="artist.twitter"
            :href="artist.twitter"
            target="_blank"
            class="hover:text-white transition-colors"
          >
            <svg
              class="h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33.244 27"
            >
              <g id="twitter" transform="translate(0 -48.082)">
                <g
                  id="Group_8110"
                  data-name="Group 8110"
                  transform="translate(0 48.082)"
                >
                  <path
                    id="Path_7716"
                    data-name="Path 7716"
                    d="M29.827,54.811c.021.3.021.591.021.886,0,9.007-6.855,19.385-19.385,19.385A19.254,19.254,0,0,1,0,72.023a14.1,14.1,0,0,0,1.645.084A13.645,13.645,0,0,0,10.1,69.2a6.825,6.825,0,0,1-6.37-4.725,8.592,8.592,0,0,0,1.287.105,7.206,7.206,0,0,0,1.793-.232A6.814,6.814,0,0,1,1.35,57.659v-.084a6.862,6.862,0,0,0,3.08.865A6.823,6.823,0,0,1,2.32,49.327a19.366,19.366,0,0,0,14.048,7.13A7.691,7.691,0,0,1,16.2,54.9a6.82,6.82,0,0,1,11.791-4.662,13.414,13.414,0,0,0,4.324-1.645,6.8,6.8,0,0,1-3,3.755,13.659,13.659,0,0,0,3.923-1.055A14.646,14.646,0,0,1,29.827,54.811Z"
                    transform="translate(0 -48.082)"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>

        <div
          v-if="artist.email || artist.website"
          class="mt-6 flex flex-col justify-center items-center gap-y-3"
        >
          <a
            v-if="artist.email"
            :href="`mailto:${artist.email}`"
            class="flex items-center"
          >
            <span class="font-bold tracking-tighter text-white mr-3"
              >Email</span
            >
            <span class="hover:text-white transition-colors">{{
              artist.email
            }}</span>
          </a>
          <a
            v-if="artist.website"
            :href="`http://${artist.website}`"
            target="_blank"
            class="flex items-center"
          >
            <span class="font-bold tracking-tighter text-white mr-3"
              >Website</span
            >
            <span class="hover:text-white transition-colors">{{
              artist.website
            }}</span>
          </a>
        </div>

        <div
          v-if="artist.embeded_video"
          class="embeded-video w-full mt-10 sm:mt-16"
        >
          <iframe
            :src="artist.embeded_video"
            class="aspect-video w-full rounded-lg border border-white/5"
            loading="lazy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div
          v-if="
            artist.youtube ||
            artist.spotify ||
            artist.soundcloud ||
            artist.mixcloud
          "
          class="channels flex justify-center flex-wrap gap-x-2 gap-y-3 mt-8"
        >
          <a
            v-if="artist.youtube"
            :href="artist.youtube"
            target="_blank"
            class="bg-gray-900 hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg flex items-center justify-center"
            v-wave
          >
            <LogoYouTubeWhite class="w-20 sm:w-28" />
          </a>

          <a
            v-if="artist.spotify"
            :href="artist.spotify"
            target="_blank"
            class="bg-gray-900 hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg flex items-center justify-center"
            v-wave
          >
            <LogoSpotify
              class="w-20 sm:w-28 text-white hover:text-[#1ed760] transition-colors"
            />
          </a>

          <a
            v-if="artist.soundcloud"
            :href="artist.soundcloud"
            target="_blank"
            class="bg-gray-900 hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg flex items-center justify-center"
            v-wave
          >
            <LogoSoundCloud
              class="w-20 sm:w-28 text-white hover:text-[#ef5826] transition-colors"
            />
          </a>

          <a
            v-if="artist.mixcloud"
            :href="artist.mixcloud"
            target="_blank"
            class="bg-gray-900 hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg flex items-center justify-center"
            v-wave
          >
            <LogoMixCloud class="w-20 sm:w-28 text-white" />
          </a>
        </div>

        <div
          v-if="artist.biography"
          class="biography mt-16 md:mt-24 prose prose-invert"
        >
          <span
            class="font-bold tracking-tighter text-white text-base sm:text-lg"
            >Biography</span
          >
          <div class="mt-4" v-html="artist.biography"></div>
        </div>
      </div>
    </div>

    <div v-if="playlist" class="container mx-auto px-4 mt-16 md:mt-32">
      <Playlist :playlist="playlist" />
    </div>

    <bottom-sheet
      ref="profile-img-modal"
      id="profile-img-modal"
      :alignCenterOnBiggerScreen="true"
    >
      <img
        :src="require(`~/assets/img/artists/${artist.profile_image}`)"
        class="w-full rounded-md"
      />
    </bottom-sheet>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.artist.name} – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      artist: {},
      playlist: {},
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
    const artistSlug = this.$route.params.slug;
    this.artist = this.$store.getters.getArtistBySlug(artistSlug);
    this.playlist = this.$store.getters.getPlaylistByArtistSlug(artistSlug);
  },
};
</script>

<style></style>

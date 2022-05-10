<template>
  <div class="py-10 md:py-16">
    <div class="container mx-auto px-4">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>Artists</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <div
        v-if="$store.state.artists.list && $store.state.artists.list.length"
        class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-16 gap-2 md:gap-4 xl:gap-6"
      >
        <nuxt-link
          v-for="artist in $store.state.artists.list"
          :key="artist.id"
          :to="`/artists/${artist.slug}`"
          class="aspect-[3/4] bg-gray-900 text-white rounded-lg border border-gray-900 overflow-hidden relative hover:ring-4 hover:ring-primary hover:ring-offset-4 hover:ring-offset-black"
          v-wave
        >
          <img
            :src="require(`~/assets/img/artists/${artist.profile_image}`)"
            :alt="artist.name"
            class="w-full h-full object-cover"
          />

          <div
            class="absolute inset-x-0 bottom-0 h-1/3 px-3 py-4 lg:py-6 flex items-end justify-center text-center bg-gradient-to-t from-black/40 to-transparent"
          >
            <span class="font-bold text-xl lg:text-3xl tracking-tighter">
              {{ artist.name }}
            </span>
          </div>
        </nuxt-link>

        <div
          class="p-px bg-gradient-to-br from-gray-700/60 to-transparent rounded-xl overflow-hidden"
        >
          <div
            class="aspect-[3/4] text-white bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center"
            v-wave
          >
            <div
              class="flex flex-col items-center justify-center text-center gap-y-6 sm:gap-y-8 p-4 sm:p-6"
            >
              <div class="relative">
                <Logomark class="text-secondary h-14 sm:h-20 relative z-10" />
                <Logomark
                  class="text-secondary h-14 sm:h-20 absolute inset-0 z-0 blur-sm opacity-70"
                />
              </div>
              <span class="text-white sm:text-xl text-center !leading-tight"
                >More artists coming soon</span
              >
            </div>
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
      title: `Artists – ${this.$config.appName}`,
    };
  },
};
</script>

<style></style>

<template>
  <div class="py-10 md:py-16">
    <div
      v-if="$store.state.news.list && $store.state.news.list.length"
      class="container mx-auto px-4"
    >
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>News</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <div class="min-h-[600px] rounded-xl bg-gray-900 w-full mt-8"></div>
    </div>

    <div class="min-h-screen flex flex-col items-center">
      <div class="container max-w-md mx-auto px-4">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>News</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>

        <div class="w-full rounded-xl overflow-hidden mt-6">
          <lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>

        <div class="text-white mt-6 text-base sm:text-lg text-center">
          Sorry, there is no news at the moment. Please come back later :)
        </div>

        <!-- <ColorfulLoadingSpinner /> -->
      </div>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/astronaut-in-space.json";

export default {
  head() {
    return {
      title: `News – ${this.$config.appName}`,
    };
  },

  components: {
    lottie,
  },

  data() {
    return {
      posts: [],
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
    };
  },

  // async fetch() {
  //   this.posts = await this.$axios.$get(
  //     `https://backend.panorama.id/api/posts`
  //   );
  // },

  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },
};
</script>

<style></style>

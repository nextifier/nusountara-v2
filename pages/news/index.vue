<template>
  <div class="py-10 md:py-16">
    <div class="min-h-screen flex flex-col items-center">
      <div class="container max-w-xl mx-auto px-4">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>News</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>

        <div v-if="posts && posts.length" class="mt-8 flex flex-col gap-y-4">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="flex gap-x-4 sm:gap-x-6 items-center"
          >
            <nuxt-link
              :to="`/news/${post.slug}`"
              class="bg-gray-900 aspect-square w-1/4 sm:w-1/5 rounded-lg flex-shrink-0 flex-grow-0 overflow-hidden"
            >
              <img
                :src="require(`~/assets/img/news/${post.featured_image}`)"
                :alt="post.title"
                class="w-full h-full object-cover border border-white/5"
                loading="lazy"
              />
            </nuxt-link>
            <div class="flex flex-col gap-y-1.5">
              <nuxt-link
                :to="`/news/${post.slug}`"
                class="text-white line-clamp-3"
                >{{ post.title }}</nuxt-link
              >
              <span class="text-xs sm:text-sm">{{
                $formatDate(post.published_at)
              }}</span>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="w-full rounded-xl overflow-hidden mt-6">
            <lottie
              :options="defaultOptions"
              v-on:animCreated="handleAnimation"
            />
          </div>

          <div class="text-white mt-6 text-base sm:text-lg text-center">
            Sorry, there is no news at the moment. Please come back later :)
          </div>
        </div>
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
      posts: this.$store.state.posts.list,
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

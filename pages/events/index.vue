<template>
  <div class="py-10 md:py-16">
    <div
      v-if="
        (upcomingEvents && upcomingEvents.length) ||
        (pastEvents && pastEvents.length)
      "
      class="container mx-auto px-4 flex flex-col gap-y-24"
    >
      <div v-if="upcomingEvents && upcomingEvents.length">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>Upcoming Events</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>
      </div>

      <div v-if="pastEvents && pastEvents.length">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>Past Events</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>
      </div>
    </div>

    <div v-else class="min-h-screen flex flex-col items-center">
      <div class="container max-w-md mx-auto px-4">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>Events</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>

        <div class="w-full rounded-xl overflow-hidden mt-6">
          <lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>

        <div class="text-white mt-6 text-base sm:text-lg text-center">
          Sorry, there is no events at the moment. Please come back later :)
        </div>

        <SubscriptionBox class="mt-16" />
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
      title: `Events – ${this.$config.appName}`,
    };
  },

  components: {
    lottie,
  },

  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      upcomingEvents: [],
      pastEvents: [],
    };
  },

  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  },

  // created() {
  //   this.upcomingEvents = this.$store.getters.getEventsByStatus("upcoming");
  //   this.pastEvents = this.$store.getters.getEventsByStatus("passed");
  // },
};
</script>

<style></style>

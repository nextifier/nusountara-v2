<template>
  <div class="py-10 md:py-16">
    <div class="min-h-screen flex flex-col items-center">
      <div class="container max-w-3xl mx-auto">
        <h2
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>Upcoming Events</span>
        </h2>

        <div class="w-full aspect-[576/432] rounded-xl overflow-hidden mt-6">
          <lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
        </div>

        <div class="text-white mt-6 text-base sm:text-lg text-center">
          Sorry, there is no events at the moment. Please come back later :)
        </div>

        <SubscriptionBox class="mt-16" />

        <h2
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2 mt-16"
        >
          <span>Past Events</span>
        </h2>

        <div class="grid grid-cols-1 gap-8 mt-10">
          <div
            v-for="(event, index) in pastEvents"
            :key="index"
            class="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4"
          >
            <nuxt-link :to="`/events/${event.slug}`">
              <img
                :src="require(`~/assets/img/events${event.images[0]}`)"
                class="aspect-[4/5] rounded-lg object-cover w-full"
              />
            </nuxt-link>

            <div class="pt-3 flex flex-col items-start">
              <div class="flex items-center gap-x-1">
                <span class="aspect-square h-3 rounded-full bg-rose-600"></span>
                <span class="text-sm">Sold out</span>
              </div>

              <nuxt-link :to="`/events/${event.slug}`" class="mt-3">
                <span class="text-white font-bold tracking-tight text-xl">{{
                  event.title
                }}</span>
              </nuxt-link>

              <div class="flex flex-col items-start gap-y-4 mt-4">
                <div class="flex items-center gap-x-3">
                  <IconCalendar class="h-6 flex-shrink-0" />
                  <span>{{ event.date }}</span>
                </div>

                <div class="flex items-center gap-x-3">
                  <IconTime class="h-6 flex-shrink-0" />
                  <span>{{ event.time }}</span>
                </div>

                <div class="flex items-start gap-x-3">
                  <IconLocation class="h-6 flex-shrink-0" />
                  <span>{{ event.location }}</span>
                </div>
              </div>
            </div>
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

  created() {
    this.upcomingEvents = this.$store.getters.getEventsByStatus("upcoming");
    this.pastEvents = this.$store.getters.getEventsByStatus("passed");
  },
};
</script>

<style></style>

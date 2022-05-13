<template>
  <div class="py-10 md:py-16">
    <div
      v-if="
        (upcomingEvents && upcomingEvents.length) ||
        (pastEvents && pastEvents.length)
      "
      class="container xl:max-w-4xl mx-auto px-4 flex flex-col gap-y-24"
    >
      <div v-if="upcomingEvents && upcomingEvents.length">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>Upcoming Events</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>

        <div class="flex flex-col gap-12 mt-8">
          <div
            v-for="(event, index) in upcomingEvents"
            :key="index"
            class="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4 items-center"
          >
            <div class="lg:col-span-6">
              <nuxt-link :to="`/events/${event.slug}`">
                <img
                  :src="require(`~/assets/img/events${event.images[0]}`)"
                  :alt="event.title"
                  class="w-full rounded-lg aspect-video object-cover"
                />
              </nuxt-link>
            </div>
            <div class="lg:col-span-6 flex flex-col items-start">
              <span
                class="bg-emerald-700 text-white uppercase font-bold tracking-tight text-xs sm:text-sm px-3 py-2 rounded-md"
                >{{ event.status }}</span
              >

              <nuxt-link
                :to="`/events/${event.slug}`"
                class="text-white font-bold tracking-tight text-base md:text-xl mt-2"
                >{{ event.title }}</nuxt-link
              >

              <div class="flex flex-col gap-y-3 mt-3">
                <div v-if="event.date" class="flex items-center gap-x-3">
                  <IconCalendar class="h-5 flex-shrink-0" />
                  <span>{{ event.date }}</span>
                </div>

                <div v-if="event.location" class="flex items-center gap-x-3">
                  <IconLocation class="h-5 flex-shrink-0" />
                  <span>{{ event.location }}</span>
                </div>

                <div v-if="event.price" class="flex items-center gap-x-3">
                  <IconCalendar class="h-5 flex-shrink-0" />
                  <span
                    >Starts from
                    <span class="text-white">{{ event.price }}</span></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <SubscriptionBox class="mt-16 max-w-md" />
      </div>

      <div v-if="pastEvents && pastEvents.length">
        <h1
          class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
        >
          <span>Past Events</span>
          <span class="bg-primary h-2.5 w-5"></span>
        </h1>

        <div class="flex flex-col gap-y-4 mt-8">
          <div v-for="(event, index) in pastEvents" :key="index">
            <nuxt-link
              :to="`/events/${event.slug}`"
              class="flex gap-x-3 sm:gap-x-4 md:gap-x-6 items-center"
            >
              <div
                class="aspect-video w-[40%] bg-gray-900 flex-shrink-0 flex-grow-0 relative"
              >
                <img
                  :src="require(`~/assets/img/events${event.images[0]}`)"
                  :alt="event.title"
                  class="w-full h-full object-cover rounded-md"
                />

                <span
                  class="bg-rose-600 text-white uppercase font-bold tracking-tight text-xs sm:text-sm px-2 py-1 rounded absolute bottom-1 right-1 sm:hidden"
                  >Sold out</span
                >
              </div>

              <div class="flex flex-col items-start">
                <span
                  class="bg-rose-600 text-white uppercase font-bold tracking-tight text-xs sm:text-sm px-2 py-1 rounded hidden sm:block mb-2"
                  >Sold out</span
                >
                <span class="text-white sm:text-lg">{{ event.title }}</span>
                <div
                  class="flex items-center gap-x-2 mt-1.5 text-xs sm:text-sm text-gray-400"
                >
                  <span>{{ event.date }}</span>
                  <span class="bg-gray-500 w-px h-1"></span>
                  <span>{{ event.location }}</span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
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

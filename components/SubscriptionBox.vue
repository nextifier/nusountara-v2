<template>
  <div class="flex flex-col">
    <div class="flex items-center gap-x-2">
      <div class="h-8">
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
      </div>
      <span class="text-white">Notify me when a new event is coming out!</span>
    </div>

    <form @submit.prevent="subscribe">
      <div class="relative mt-2 w-full">
        <input
          type="email"
          name="email"
          v-model="form.email"
          placeholder="Your email address"
          class="bg-gray-900 focus:bg-white focus:text-black rounded-xl pl-6 py-5 w-full focus:outline-none pr-28 md:pr-32"
          required
        />
        <button
          type="submit"
          class="rounded-lg px-4 absolute inset-y-1 right-1 bg-primary text-white hover:bg-opacity-90 transition focus:outline-none flex items-center justify-center focus:ring-4 focus:ring-white"
          v-wave
        >
          <span class="font-bold">Subscribe</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/lottie/bell-notification.json";

export default {
  components: {
    lottie,
  },

  data() {
    return {
      loading: false,
      form: {
        email: "",
      },
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
    };
  },

  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    subscribe() {
      this.loading = true;

      this.$axios
        .post("https://contact.nextifier.com/api/subscribers", {
          email: this.form.email,
          client: "Nusountara",
        })
        .then((response) => {
          M.toast({
            html: `<span>
                    We will notify you when new event is coming out.
                  </span>`,
            displayLength: 6000,
            classes: "bg-gradient-to-br from-green-600 to-green-700 text-white",
          });

          this.form.email = "";
        })
        .catch((e) => {
          this.errors = e.response.data.errors;
          for (let [key, value] of Object.entries(this.errors)) {
            M.toast({
              html: `<span>
                        ${value}
                      </span><br>`,
              displayLength: 6000,
              classes: "bg-rose-700 text-white",
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>

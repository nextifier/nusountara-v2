<template>
  <div class="py-10 md:py-16">
    <div class="container max-w-lg mx-auto px-4">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>Contact</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <p class="mt-3">
        If you have any questions or any business inquiries, please contact us
        by filling out the form below.
      </p>

      <form @submit.prevent="sendMessage" id="contact-form" class="mt-8 w-full">
        <div class="hidden">
          <label>Zip Code</label>
          <input
            v-model="form.zipCode"
            type="text"
            name="zipCode"
            id="zipCode"
          />
        </div>

        <div class="input-group">
          <label>Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div class="input-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="text"
            name="email"
            id="email"
            required
          />
        </div>

        <div class="input-group">
          <label>Phone</label>
          <input
            v-model="form.phone"
            type="text"
            name="phone"
            id="phone"
            required
          />
        </div>

        <div class="input-group">
          <label>Message</label>
          <textarea
            v-model="form.message"
            name="message"
            id="message"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="mt-4 p-6 flex justify-center items-center gap-x-2 bg-primary text-white font-extrabold rounded-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 ring-white ring-offset-4 ring-offset-black"
        >
          <LoadingSpinner v-if="loading" />
          <span>Send message</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Contact – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      loading: false,
      isBot: false,
      errors: {},
      form: {
        zipCode: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      to: ["activerow@gmail.com"],
      cc: [],
      bcc: [],
    };
  },

  methods: {
    sendMessage() {
      this.loading = true;

      if (this.zipCode != null) {
        this.isBot = true;
      } else {
        this.$axios
          .post("https://contact.nextifier.com/api/messages", {
            name: this.form.name,
            email: this.form.email,
            phone: this.form.phone,
            message: this.form.message,
            client: "Nusountara",
            to: this.to,
            cc: this.cc,
            bcc: this.bcc,
          })
          .then((response) => {
            M.toast({
              html: `<span>
                    Message sent
                  </span>`,
              displayLength: 6000,
              classes:
                "bg-gradient-to-br from-green-600 to-green-700 text-white",
            });

            this.form.name = "";
            this.form.email = "";
            this.form.phone = "";
            this.form.message = "";
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
      }
    },
  },
};
</script>

<style scoped>
.input-group {
  @apply flex flex-col py-4 gap-y-2 w-full;
}

.input-group > label {
  @apply font-extrabold text-sm;
}

.input-group > input,
.input-group > textarea {
  @apply bg-gray-800 rounded md:rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 ring-secondary focus:ring-offset-4 ring-offset-black;
}
</style>

<template>
  <div class="pt-32 pb-24 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col justify-center items-center text-center">
        <div v-if="error.statusCode === 404" class="flex flex-col items-center">
          <span class="font-bold tracking-tighter text-9xl text-white/20"
            >404</span
          >
          <h1 class="font-bold tracking-tight text-white text-3xl md:text-5xl">
            Page not found
          </h1>
        </div>
        <div v-else>An error has occured.</div>
        <div class="mt-6 flex flex-col lg:flex-row lg:items-center">
          <nuxt-link
            to="/"
            class="flex justify-center items-center gap-x-1 text-center pl-4 pr-6 py-4 rounded-full bg-accent-yellow hover:scale-110 transition-transform duration-300 text-black"
            v-wave
          >
            <IconChevronLeft class="h-6" />
            <span class="font-bold">Back</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

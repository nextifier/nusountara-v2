<template>
  <div id="hero" class="relative">
    <div class="absolute inset-0 z-0">
      <video
        src="/media/bg-hero-video.mp4"
        poster="/media/bg-hero-thumb.jpg"
        id="bg-hero-video"
        class="w-full h-full object-cover"
        muted
        autoplay
        loop
      ></video>
    </div>

    <div
      class="relative z-10 min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] container max-w-4xl mx-auto px-4 flex flex-col items-center justify-center py-12"
    >
      <div class="flex flex-col items-center text-center -mt-16">
        <h1 class="text-white tracking-tight text-4xl md:text-6xl">
          Discover Indonesian exotic destinations through
          <span class="font-bold">music expedition</span>
        </h1>
        <Underline class="h-3 md:h-5 text-primary mt-1 md:mt-2" />
        <p class="mt-4 md:mt-6 text-base sm:text-lg">
          Showcasing audio and visuals of the exotic destinations of Indonesia.
        </p>
        <div class="flex gap-x-2 md:gap-x-4 mt-8">
          <nuxt-link
            to="/series"
            class="rounded-lg bg-primary hover:bg-primary-lighten border border-transparent transition-colors text-white font-bold px-6 py-5"
            v-wave
            >Browse All Series</nuxt-link
          >
          <nuxt-link
            to="/news"
            class="rounded-lg border border-transparent hover:border-white transition-colors text-white font-bold px-6 py-5"
            v-wave
            >What's New</nuxt-link
          >
        </div>
      </div>
    </div>

    <div
      class="absolute z-30 bottom-20 lg:bottom-4 inset-x-0 h-10 flex items-center justify-center"
    >
      <a
        class="w-10 h-10 bg-gray-900 hover:bg-gray-800 duration-300 transition-colors rounded-full cursor-pointer flex items-center justify-center animate-bounce-slow"
        v-scroll-to="'#banner'"
        v-wave
      >
        <IconChevronDown class="h-4" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  activated() {
    let video = document.querySelector("#bg-hero-video");
    video.play();
  },
};
</script>

<style></style>

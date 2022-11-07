<template>
  <section id="unmute-nusantara" class="py-24 md:py-48">
    <div class="relative">
      <div class="absolute z-0 inset-0 flex items-center justify-center">
        <img
          src="~/assets/img/background/wave-purple-full.svg"
          class="w-full scale-150 md:scale-125 xl:scale-100"
        />
      </div>
      <div class="container px-1 relative z-10">
        <div
          class="w-3/4 xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto relative z-0"
        >
          <div
            class="absolute z-0 inset-0 flex items-center justify-center aspect-w-1 aspect-h-1"
          >
            <div
              class="bg-primary w-full rounded-full ring-2 ring-secondary ring-offset-[10px] sm:ring-offset-[20px] lg:ring-offset-[30px] ring-offset-black"
            ></div>
          </div>
        </div>
        <div
          class="relative z-20 flex max-w-5xl -space-x-4 -translate-y-8 mx-auto justify-center items-center isolate scale-105 sm:scale-100"
        >
          <img
            id="screen-soundcloud"
            src="~/assets/img/screen-soundcloud.svg"
            alt="SoundCloud"
            class="relative z-[21] drop-shadow-dark-lg md:drop-shadow-dark-2xl w-1/3 pointer-events-none"
          />
          <img
            id="screen-youtube"
            src="~/assets/img/screen-youtube.svg"
            alt="YouTube"
            class="relative z-[23] drop-shadow-dark-lg md:drop-shadow-dark-2xl scale-110 w-1/3 pointer-events-none"
          />
          <img
            id="screen-spotify"
            src="~/assets/img/screen-spotify.svg"
            alt="Spotify"
            class="relative z-[22] drop-shadow-dark-lg md:drop-shadow-dark-2xl w-1/3 pointer-events-none"
          />
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 mt-10 md:mt-16">
      <div class="flex flex-col items-center justify-center text-center">
        <h1
          class="font-bold text-white text-3xl md:text-5xl tracking-tighter !leading-[1.1] flex flex-col items-center relative isolate"
        >
          <span class="relative z-10">
            <span class="font-display text-secondary">unmute nusantara</span>
            now</span
          >
          <span class="relative z-0">on your favorite music platform</span>
        </h1>

        <div
          class="flex flex-wrap justify-center items-center gap-x-6 lg:gap-x-8 gap-y-6 mt-12"
        >
          <a :href="$store.state.youtube" target="_blank">
            <LogoYouTubeWhite
              class="w-28 md:w-24 lg:w-32 drop-shadow-md opacity-70 hover:opacity-100"
            />
          </a>
          <a :href="$store.state.spotify" target="_blank">
            <LogoSpotify
              class="w-28 md:w-24 lg:w-32 drop-shadow-md text-white hover:text-[#1ed760] opacity-70 hover:opacity-100 transition duration-300"
            />
          </a>
          <a :href="$store.state.soundcloud" target="_blank">
            <LogoSoundCloud
              class="w-28 md:w-24 lg:w-32 drop-shadow-md text-white hover:text-[#ef5826] opacity-70 hover:opacity-100 transition duration-300"
            />
          </a>
          <a :href="$store.state.mixcloud" target="_blank">
            <LogoMixCloud
              class="w-28 md:w-24 lg:w-32 drop-shadow-md text-white opacity-70 hover:opacity-100 transition duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

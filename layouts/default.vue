<template>
  <div
    id="front-layout"
    class="min-h-screen font-sans antialiased flex flex-col text-sm md:text-base bg-black text-gray-300 overflow-x-hidden"
  >
    <Navbar />
    <BottomNav v-if="!excludeRoutes.includes($route.name)" />
    <Nuxt class="flex-auto mt-16 lg:mt-[80px]" keep-alive />
    <BackFloatingButton v-if="excludeRoutes.includes($route.name)" />
    <Footer v-if="!excludeRoutes.includes($route.name)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      excludeRoutes: [
        "tracks-slug",
        "series-slug",
        "events-slug",
        "collections-slug",
        "news-slug",
        "artists-slug",
        "playlists-slug",
      ],
    };
  },
};
</script>

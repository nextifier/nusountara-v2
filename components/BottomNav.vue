<template>
  <div
    v-if="!excludeRoutes.includes($route.name)"
    id="bottom-nav"
    class="lg:hidden h-16 w-full fixed z-[998] bottom-0 border-t border-white/10 flex items-center justify-center transition-all overflow-x-hidden"
  >
    <div
      class="max-w-md mx-auto flex items-center justify-center w-full h-full"
    >
      <nuxt-link
        to="/"
        exact
        class="nav-link"
        @click.native="$scrollToTopIfCurrentPageIs('index')"
        v-wave
      >
        <IconHome class="h-6" />
        <span class="nav-link-label">Home</span>
      </nuxt-link>
      <nuxt-link
        to="/top-charts"
        class="nav-link"
        @click.native="$scrollToTopIfCurrentPageIs('top-charts')"
        v-wave
      >
        <IconTopCharts class="h-6" />
        <span class="nav-link-label">Top Charts</span>
      </nuxt-link>
      <nuxt-link
        to="/series"
        class="nav-link"
        @click.native="$scrollToTopIfCurrentPageIs('series')"
        v-wave
      >
        <IconSeries class="h-6" />
        <span class="nav-link-label">Series</span>
      </nuxt-link>
      <nuxt-link
        to="/events"
        class="nav-link"
        @click.native="$scrollToTopIfCurrentPageIs('events')"
        v-wave
      >
        <IconEvents class="h-6" />
        <span class="nav-link-label">Events</span>
      </nuxt-link>
      <nuxt-link
        to="/collections"
        class="nav-link"
        @click.native="$scrollToTopIfCurrentPageIs('collections')"
        v-wave
      >
        <IconCollections class="h-6" />
        <span class="nav-link-label">Collections</span>
      </nuxt-link>
    </div>
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

<style scoped>
@supports (backdrop-filter: none) {
  #bottom-nav {
    @apply bg-black/80 backdrop-filter backdrop-blur-lg;
  }
}

@supports not (backdrop-filter: none) {
  #bottom-nav {
    @apply bg-black/100;
  }
}

.nav-link {
  @apply flex-1 h-full flex flex-col justify-center items-center gap-y-1 transition-colors duration-300 overflow-x-visible tracking-tight text-center;
}

.nuxt-link-active {
  @apply text-white;
}

.nav-link-label {
  @apply text-[11px] xs:text-xs;
}
</style>

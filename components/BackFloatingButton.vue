<template>
  <button
    type="button"
    @click="$router.back()"
    class="fixed left-4 bottom-12 z-[997] flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-gray-900/80 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-primary md:bottom-auto md:top-1/2 md:left-6 md:-translate-y-1/2 2xl:left-12"
    v-wave
  >
    <IconChevronLeft class="h-5" />
  </button>
</template>

<script>
export default {};
</script>

<style></style>

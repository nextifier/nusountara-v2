<template>
  <button
    type="button"
    @click="$router.back()"
    class="fixed left-4 bottom-12 z-[997] flex w-14 h-14 md:w-16 md:h-16 items-center justify-center rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-colors hover:bg-primary hover:text-white md:bottom-auto md:top-1/2 md:left-6 md:-translate-y-1/2 2xl:left-12"
    v-wave
  >
    <IconChevronLeft class="h-4 md:h-5" />
  </button>
</template>

<script>
export default {};
</script>

<style></style>

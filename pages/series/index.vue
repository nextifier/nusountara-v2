<template>
  <div class="py-10 md:py-16">
    <div class="container mx-auto px-4">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>Series</span>
        <span class="bg-primary h-2.5 w-5"></span>
      </h1>

      <div class="min-h-[600px] rounded-xl bg-gray-900 w-full mt-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Series – ${this.$config.appName}`,
    };
  },
};
</script>

<style></style>

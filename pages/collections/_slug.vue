<template>
  <div class="py-10 md:py-16">
    <div class="container">
      <h1
        class="text-white font-bold tracking-tight text-3xl md:text-4xl flex items-baseline gap-x-2"
      >
        <span>Collection Detail</span>
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
      title: `Collection Detail – ${this.$config.appName}`,
    };
  },
};
</script>

<style></style>

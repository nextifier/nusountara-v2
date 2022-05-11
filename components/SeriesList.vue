<template>
  <div
    v-if="series && series.length"
    class="flex flex-col gap-y-4 sm:gap-y-5 mt-6 sm:mt-8"
  >
    <div v-for="(item, index) in series" :key="index">
      <nuxt-link
        :to="`/series/${item.slug}`"
        class="flex gap-x-3 sm:gap-x-6 items-center"
      >
        <div class="aspect-video w-[40%] bg-gray-900 flex-shrink-0 flex-grow-0">
          <img
            :src="require(`~/assets/img/series${item.cover_image}`)"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-y-2">
          <span class="text-white sm:text-lg line-clamp-2 sm:line-clamp-3">{{
            item.title
          }}</span>
          <span class="text-xs sm:text-sm text-gray-400 line-clamp-1">{{
            $formatDate(item.release_date)
          }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    series: Array,
  },
};
</script>

<style></style>

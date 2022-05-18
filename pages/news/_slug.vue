<template>
  <div class="pt-10 md:pt-16 pb-32">
    <div class="container mx-auto max-w-xl px-4">
      <BackFloatingButton />

      <div class="showed-post">
        <!-- <div
          v-if="post.topic.length > 0"
          class="post-topic inline-block rounded-lg bg-orange-100/80 px-2 py-1 text-xs font-bold text-orange-600 sm:text-sm mb-2"
        >
          {{ post.topic[0].name }}
        </div> -->
        <h1
          class="text-2xl font-semibold !leading-tight tracking-tighter text-white lg:text-4xl"
        >
          {{ post.title }}
        </h1>
        <!-- <p v-if="post.summary" class="mt-3">{{ post.summary }}</p> -->
        <div
          class="post-info mt-4 flex items-start justify-between sm:items-center"
        >
          <div class="flex items-center gap-x-3">
            <a
              :href="`https://instagram.com/${$store.state.instagram}`"
              target="_blank"
              class="p-0.5 rounded-full bg-gradient-to-tr from-[#fcb045] to-[#fd1d1d]"
            >
              <div
                class="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center border-2 border-black"
              >
                <Logomark class="h-6 text-white" />
              </div>
            </a>
            <div class="flex flex-col">
              <span class="font-bold tracking-tight text-white"
                >Nusountara</span
              >
              <div class="flex items-center gap-x-2 text-xs sm:text-sm">
                <div>{{ $formatDate(post.created_at) }}</div>
                <span class="h-2 w-px bg-gray-500"></span>
                <div>{{ post.reading_time }} min read</div>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-y-0 sm:gap-x-4 text-xs sm:text-sm"
          >
            <!-- <div class="post-views flex items-center gap-x-2">
              <svg
                class="h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  id="vuesax_outline_eye"
                  data-name="vuesax/outline/eye"
                  transform="translate(-108 -188)"
                >
                  <g id="eye">
                    <path
                      id="Vector"
                      d="M4.33,8.66A4.33,4.33,0,1,1,8.66,4.33,4.332,4.332,0,0,1,4.33,8.66Zm0-7.16A2.83,2.83,0,1,0,7.16,4.33,2.834,2.834,0,0,0,4.33,1.5Z"
                      transform="translate(115.67 195.67)"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M10.545,18.04c-3.76,0-7.31-2.2-9.75-6.02a6.058,6.058,0,0,1,0-6C3.245,2.2,6.8,0,10.545,0s7.3,2.2,9.74,6.02a6.058,6.058,0,0,1,0,6C17.845,15.84,14.3,18.04,10.545,18.04Zm0-16.54c-3.23,0-6.32,1.94-8.48,5.33a4.544,4.544,0,0,0,0,4.38c2.16,3.39,5.25,5.33,8.48,5.33s6.32-1.94,8.48-5.33a4.544,4.544,0,0,0,0-4.38C16.865,3.44,13.775,1.5,10.545,1.5Z"
                      transform="translate(109.455 190.98)"
                    />
                    <path
                      id="Vector-3"
                      data-name="Vector"
                      d="M0,0H24V24H0Z"
                      transform="translate(108 188)"
                      fill="none"
                      opacity="0"
                    />
                  </g>
                </g>
              </svg>
              <span>{{ post.views_count }} views</span>
            </div> -->
            <!-- <div class="post-comments flex items-center gap-x-2 cursor-pointer">
              <svg
                class="h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  id="vuesax_outline_message-text"
                  data-name="vuesax/outline/message-text"
                  transform="translate(-236 -252)"
                >
                  <g id="message-text">
                    <path
                      id="Vector"
                      d="M10.75,21.56a2.265,2.265,0,0,1-1.8-.96l-1.5-2a.472.472,0,0,0-.2-.1h-.5C2.58,18.5,0,17.37,0,11.75v-5C0,2.33,2.33,0,6.75,0h8c4.42,0,6.75,2.33,6.75,6.75v5c0,4.42-2.33,6.75-6.75,6.75h-.5a.261.261,0,0,0-.2.1l-1.5,2A2.265,2.265,0,0,1,10.75,21.56ZM6.75,1.5C3.17,1.5,1.5,3.17,1.5,6.75v5C1.5,16.27,3.05,17,6.75,17h.5a1.876,1.876,0,0,1,1.4.7l1.5,2a.694.694,0,0,0,1.2,0l1.5-2a1.752,1.752,0,0,1,1.4-.7h.5C18.33,17,20,15.33,20,11.75v-5c0-3.58-1.67-5.25-5.25-5.25Z"
                      transform="translate(237.25 253.25)"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M0,0H24V24H0Z"
                      transform="translate(236 252)"
                      fill="none"
                      opacity="0"
                    />
                    <path
                      id="Vector-3"
                      data-name="Vector"
                      d="M10.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h10a.755.755,0,0,1,.75.75A.755.755,0,0,1,10.75,1.5Z"
                      transform="translate(242.25 259.25)"
                    />
                    <path
                      id="Vector-4"
                      data-name="Vector"
                      d="M6.75,1.5h-6A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h6A.755.755,0,0,1,7.5.75.755.755,0,0,1,6.75,1.5Z"
                      transform="translate(242.25 264.25)"
                    />
                  </g>
                </g>
              </svg>
              <nuxt-link :to="`/blog/${this.post.slug}#disqus_thread`">
                <DisqusCount :identifier="`/blog/${this.post.slug}`" />
              </nuxt-link>
            </div> -->
          </div>
        </div>

        <div class="mt-10">
          <img
            :src="require(`~/assets/img/news/${post.featured_image}`)"
            :alt="post.title"
            class="materialboxed w-full rounded-lg"
            loading="lazy"
          />
        </div>
        <article
          class="post-body prose prose-invert prose-a:text-indigo-400 mt-10"
          v-html="post.body"
        ></article>

        <!-- <div
          v-if="post.tags"
          class="post-tags mt-8 flex flex-wrap gap-x-2 gap-y-2"
        >
          <div
            v-for="tag in post.tags"
            :key="tag.id"
            class="flex items-center justify-center rounded-lg bg-gray-200 px-3 py-2 text-xs text-gray-700 sm:text-sm"
          >
            #{{ tag.name }}
          </div>
        </div> -->
      </div>

      <!-- <SocialShare :post="post" class="mt-16" /> -->

      <!-- <div class="comments mt-16">
        <Disqus />
      </div> -->

      <!-- <PopularPosts class="mt-16" :apiURL="$config.apiURL" /> -->
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.post.title} – ${this.$config.appName}`,
    };
  },

  data() {
    return {
      post: {},
    };
  },

  created() {
    this.post = this.$store.getters.getPostBySlug(this.$route.params.slug);
  },
};
</script>

<style></style>

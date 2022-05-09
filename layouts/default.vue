<template>
  <div
    id="front-layout"
    class="min-h-screen font-sans antialiased flex flex-col text-sm md:text-base bg-black text-gray-300 overflow-x-hidden"
  >
    <Navbar />
    <BottomNav />
    <Nuxt class="flex-auto mt-16 lg:mt-[80px]" keep-alive />
    <!-- <Footer /> -->
  </div>
</template>

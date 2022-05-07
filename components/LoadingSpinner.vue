<template>
  <div class="border-black rounded-full loader w-4 h-4 border-2"></div>
</template>

<script>
export default {};
</script>

<style>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border-right-color: transparent !important;
  animation: loader-rotate 1s linear infinite;
}
</style>

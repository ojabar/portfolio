<template>
  <div class="creative-page">
    <CreativeProfile />
    <CreativeDescription class="mb-[18.75rem]" />
    <CreativeTimeLine />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "creative-layout",
});
</script>

<style lang="scss">
html {

  font-size: calc((100vw / 1900) * 16);
  .creative-page {
    @apply text-white;
  }
}

h1,
h2,
h3 {
  @apply font-josefin-slab font-semibold;
}
</style>

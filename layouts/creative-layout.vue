<template>
  <slot class="bg" />
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style lang="scss">
html {
  @apply bg-black1;
}
</style>

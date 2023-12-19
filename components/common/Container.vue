<template>
  <div
    class="mx-auto px-2 md:px-5"
    :class="{
      'container-sm': size === 'sm',
      container: size !== 'sm',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { size } = defineProps({
  size: String,
});
</script>

<style lang="scss">
.container-sm {
  @apply max-w-4xl;
  @screen mdMax {
    @apply max-w-3xl;
  }
}
</style>

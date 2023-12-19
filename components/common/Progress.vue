<template>
  <div class="progress">
    <label>{{ label }}</label>
    <div class="progress-wrapper">
      <div class="progress-percent" :style="{ width: `${percent}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { percent, label } = defineProps({
  label: String,
  percent: Number,
});
</script>

<style lang="scss">
.progress {
  label {
    @apply font-primary text-2xl -mb-2 inline-block;
    @screen mdMax {
      @apply text-xl;
    }

    @screen mdMax {
      @apply text-sm;
    }
  }
  &-wrapper {
    @apply relative h-3 w-full bg-[var(--progress-bg)];

    @screen mdMax {
      @apply h-2
    }
  }
  &-percent {
    @apply absolute h-full left-0 top-0 bg-[var(--progress-bg-percent)];
  }
}
</style>

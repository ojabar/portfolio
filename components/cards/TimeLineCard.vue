<template>
  <div class="timeLineCard" :class="{ 'timeLineCard--left': left }">
    <div class="timeLineCard-header">
      <h3 class="timeLineCard-title">
        <span>{{ title }}</span>
        <small>{{ date }}</small>
      </h3>
    </div>
    <div class="timeLineCard-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, date, left } = defineProps({
  title: String,
  date: String,
  left: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss">
.timeLineCard {
  @apply bg-tdark rounded-3xl relative;

  &::before {
    content: "";
    @apply absolute w-5 h-5 bg-white rounded-full -left-12;
  }

  &::after {
    content: "";
    @apply absolute w-0.5 -top-[80px] bg-white -left-[39px];
    height: calc(100% + 160px);
  }
  &-title {
    @apply text-lg mb-4;
    small {
      @apply text-sm font-light ml-3;
    }
  }
  &-body {
    @apply text-sm leading-relaxed;
  }
  &--left {
    @apply text-right;
    &::before {
      content: "";
      @apply left-auto -right-12;
    }
    &::after {
      content: "";
      @apply left-auto -right-[39px];
    }
    .timeLineCard {
    }
  }
}
</style>

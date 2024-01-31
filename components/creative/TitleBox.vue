<template>
  <div class="titleBox">
    <span class="line line-left" :style="{ width: getSpacing() }"></span>
    <h2 class="titleBox-title">{{ title }}</h2>
    <span class="line line-right"></span>
  </div>
</template>

<script setup lang="ts">
const { spacing, title } = defineProps({
  spacing: {
    type: String,
    default: "0rem",
  },
  title: {
    type: String,
    default: "Empty",
  },
});

const getSpacing = (): string => {
  return `calc(((100vw - var(--container-width))/2) - 1.625rem + ${spacing})`;
};
</script>

<style scoped lang="scss">
.titleBox {
  --container-width: 1574px;
  @screen xlMax {
    --container-width: 1280px;
  }
  @screen lgMax {
    --container-width: 992px;
  }
  @screen mdMax {
    --container-width: 768px;
  }
  @screen smMax {
    --container-width: 640px;
  }

  @apply flex items-end gap-x-6 mb-[16rem];
  &-title {
    @apply text-[8rem] leading-none mb-[-2.5rem];
  }
  .line {
    @apply h-[0.5625rem] bg-white;

    &-right {
      @apply flex-1;
    }
  }
}
</style>

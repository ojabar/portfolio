<template>
  <div class="titleBox">
    <span class="line line-left" :style="{ width: getSpacing() }"></span>
    <h2 class="titleBox-title">{{ $t("My Timeline") }}</h2>
    <span class="line line-right"></span>
  </div>
</template>

<script setup lang="ts">
const { spacing } = defineProps({
  spacing: {
    type: String,
    default: "0rem",
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
    @apply text-[10rem] leading-none mb-[-2.5rem];
  }
  .line {
    @apply h-[0.5625rem] bg-white;

    &-right {
      @apply flex-1;
    }
  }
}
</style>

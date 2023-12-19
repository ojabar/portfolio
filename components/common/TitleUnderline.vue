<template>
  <component :is="tag" class="title-underline">
    <span>
      <span><slot /> </span> <i></i
    ></span>
  </component>
</template>

<script setup lang="ts">
const { tag } = defineProps({
  tag: {
    default: "h2",
    type: String,
  },
});
</script>

<style lang="scss">
.title-underline {
  & > span {
    @apply relative;

    & > span {
      @apply relative z-10;
    }
    & > i {
      @apply absolute bottom-[0.1em] left-0 w-full h-1 bg-blue2;

      transform: matrix(1, 0, -1, 1, 0, 0);
    }
  }
}
.light-mode {
  .title-underline {
    & > span {
      & > i {
        @apply bg-yellow2;
      }
    }
  }
}
</style>

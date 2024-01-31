<template>
  <div class="creativeTimeLineCard">
    <div class="grid grid-cols-2 gap-x-[12.875rem] items-center">
      <div class="col-span-1 px-9">
        <img :src="image" :alt="title" class="h-full" />
      </div>
      <div class="col-span-1" :class="{ '-order-1': left }">
        <div class="creativeTimeLineCard-right" :class="{ reverse: left }">
          <h3>
            {{ title }}
            <small>
              {{ date }}
            </small>
          </h3>
          <div class="creativeTimeLineCard-body">
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, date, image, left } = defineProps({
  title: String,
  date: String,
  image: String,
  left: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss">
.creativeTimeLineCard {
  &-right {
    @apply border-[0.5625rem] border-white py-12 px-16 relative;
    &::before {
      content: "";
      @apply w-[8.375rem] h-[8.375rem] bg-white rounded-full
    absolute top-0 left-0 -translate-x-full ml-[-3rem];
    }
    &::after {
      content: "";
      @apply w-14 h-[0.5625rem] bg-white 
    absolute top-[3.75rem] left-0 -translate-x-full;
    }
    &.reverse {
      &::before {
        content: "";
        @apply left-auto right-0 translate-x-full ml-0 mr-[-2.6rem];
      }

      &::after {
        content: "";
        @apply left-auto right-0 translate-x-full;
      }
    }
  }
  h3 {
    @apply font-josefin-slab text-[2.5rem];
    small {
      @apply block text-[#8A8A8A] text-3xl font-light;
    }
  }
  &-body {
    @apply pt-11;
    ul {
      @apply list-disc  text-3xl leading-[1.5666];
    }
  }
}
</style>

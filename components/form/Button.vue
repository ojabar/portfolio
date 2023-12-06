<template>
  <button :type="submit ? 'submit' : 'button'" class="button">
    <i v-if="$slots.after" class="iconbox iconbox--after">
      <slot name="after" />
    </i>
    <span>
      <slot />
    </span>
    <i v-if="$slots.before" class="iconbox iconbox--before">
      <slot name="before" />
    </i>
  </button>
</template>

<script setup lang="ts">
const { submit } = defineProps({
  submit: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.button {
  @apply bg-primary py-3 px-5 rounded-[10px]
  flex items-center
  font-primary text-lg;

  .iconbox {
    @apply inline-flex justify-center items-center w-6 h-6;
    &--after {
      @apply mr-2;
    }
    &--before {
      @apply ml-2;
    }
  }
}
</style>

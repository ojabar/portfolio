<template>
  <div class="imageCard" :class="{ 'imageCard--small': size === 'sm' }">
    <div class="imageCard-header">
      <img :src="src" :alt="alt" />
    </div>
    <div class="imageCard-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { size, src, alt } = defineProps({
  size: String,
  src: String,
  alt: String,
});
</script>

<style lang="scss">
.imageCard {
  @apply p-8 bg-primary rounded-xl flex flex-col justify-center items-center;
  @screen mdMax {
    @apply p-7;
  }

  @screen smMax {
    @apply py-4 p-2;
  }
  &-header {
    @apply flex justify-center items-center mb-6;

    @screen mdMax {
    }
    @screen smMax {
      @apply mb-3;
    }
  }

  &-body {
    @apply text-3xl;
    @screen mdMax {
      @apply text-xl;
    }
    @screen smMax {
      @apply text-base;
    }
  }

  &--small {
    @apply p-6;

    @screen mdMax {
      @apply p-5;
    }
    @screen smMax {
      @apply py-4 px-2;
    }
    .imageCard {
      &-header {
        @apply w-10 h-10 mb-4;

        @screen mdMax {
          @apply w-8 h-8;
        }

        @screen smMax {
          @apply w-7 h-7 mb-3;
        }
      }
    }
  }
}

.light-mode {
  .imageCard {
    @apply bg-white-text;
  }
}
</style>

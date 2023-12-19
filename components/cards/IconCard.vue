<template>
  <div class="iconCard" :class="{ 'iconCard--small': size === 'sm' }">
    <div class="iconCard-header">
      <slot name="icon" />
    </div>
    <div class="iconCard-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const { size } = defineProps({
  size: String,
});
</script>

<style lang="scss">
.iconCard {
  @apply p-8 bg-primary rounded-xl flex flex-col justify-center items-center;
  @screen mdMax {
    @apply p-7;
  }

  @screen smMax {
    @apply py-4 p-2;
  }
  &-header {
    @apply w-14 h-14 flex justify-center items-center;

    @screen mdMax {
      @apply w-10 h-10;
    }
    @screen smMax {
      @apply w-7 h-7 mb-3;
    }
  }

  &-body {
    @screen mdMax {
      @apply text-sm;
    }
    @screen smMax {
      @apply text-xs;
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
    .iconCard {
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
  .iconCard {
    @apply bg-white-text;
  }
}
</style>

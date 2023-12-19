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
  @apply rounded-3xl relative;
  @screen smMax {
    @apply pl-5;
  }

  &::before {
    content: "";
    @apply absolute w-5 h-5 bg-white rounded-full -left-12;
    @screen smMax {
      @apply w-3 h-3 top-1;
    }
  }

  &::after {
    content: "";
    @apply absolute w-0.5 -top-[80px] bg-white -left-[39px];
    height: calc(100% + 160px);
    @screen mdMax {
      @apply -top-[40px];
      height: calc(100% + 80px);
    }
    @screen smMax {
      @apply -top-[10px];
      height: calc(100% + 20px);
    }
  }
  &-title {
    @apply text-lg mb-4;

    @screen mdMax {
      @apply text-base mb-2;
    }

    @screen smMax {
      @apply mb-0;
    }
    small {
      @apply text-sm font-light ml-3;

      @screen mdMax {
        @apply text-xs ml-2;
      }
    }
  }
  &-body {
    @apply text-sm leading-relaxed;
    @screen mdMax {
      @apply text-xs leading-[1.8];
    }
  }
  &--left {
    @apply text-right;
    @screen smMax {
      @apply text-left;
    }
    &::before {
      content: "";
      @apply left-auto -right-12;

      @screen smMax {
        @apply left-0 right-auto;
      }
    }
    &::after {
      content: "";
      @apply left-auto -right-[39px];

      @screen smMax {
        @apply left-[5px] w-[1px] right-auto;
      }
    }
    .timeLineCard {
    }
  }
}

.light-mode {
  .timeLineCard {
    &::before {
      @apply bg-gray-600;
    }

    &::after {
      @apply bg-gray-600;
    }
  }
}
</style>

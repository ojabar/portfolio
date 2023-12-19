<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.card {
  @apply bg-tdark px-20 py-10 rounded-3xl;
  @screen mdMax {
    @apply px-12 py-8;
  }
  @screen smMax {
    @apply px-3 py-4 pb-6  rounded-xl;
  }

  &-header {
    @apply text-5xl mb-6;
    @screen mdMax {
      @apply text-4xl mb-4;
    }

    @screen smMax {
      @apply text-2xl mb-3;
    }
  }
}

.light-mode {
  .card {
    @apply bg-white;
  }
}
</style>

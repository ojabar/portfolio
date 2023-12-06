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

  &-header {
    @apply text-5xl mb-6;
  }
}
</style>

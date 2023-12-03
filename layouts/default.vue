<template>
  <div class="mode">
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
  <slot />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style lang="postcss">

.mode {
  @apply fixed bottom-5 right-5 z-50
}

</style>

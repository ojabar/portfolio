<template>
  <div class="main-bg"></div>
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

<style lang="scss">
.mode {
  @apply fixed bottom-5 right-5 z-50;
}

.main-bg {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-image: url("@/assets/images/bg-dark.jpg");
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  @apply text-white-text font-secondary;
}
.light-mode {
  .main-bg {
    background-image: url("@/assets/images/bg-light.jpg");
    background-position: center top;
    @apply text-black;
  }
}
</style>

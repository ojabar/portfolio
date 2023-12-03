<template>
  <div class="hello">
    <p>{{ $t("welcome") }}</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss">
$red: red;
.hello {
  color: $red;
}

.dark-mode {
  .hello {
    @apply text-green-500;
  }
}
</style>

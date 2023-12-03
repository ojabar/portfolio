<template>
  <div class="hello">
    <p>{{ $t("welcome") }}</p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
$red: red;
.hello {
  color: $red;
  font-family: $font-primary
}

.dark-mode {
  .hello {
    @apply text-green-500;
  }
}
</style>

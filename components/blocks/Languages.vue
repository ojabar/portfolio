<template>
  <Card>
    <template #header>
      <h2>{{ $t("Languages") }}</h2>
    </template>
    <div class="language">
      <Progress :label="$t('French')" :percent="80" />
      <Progress :label="$t('English')" :percent="60" />
      <Progress :label="$t('Arabic')" :percent="100" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from "~/components/cards/Card.vue";
import Progress from "~/components/common/Progress.vue";
</script>

<style lang="scss">
.language {
  @apply bg-primary pt-2 md:pt-8 pb-4 md:pb-10 px-5 md:px-7 
  rounded-[20px] 
  flex flex-col gap-y-4 lg:gap-y-6;
}

.light-mode {
  .language {
    @apply bg-white-text;
  }
}
</style>

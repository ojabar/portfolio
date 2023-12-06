<template>
  <Container :size="'sm'">
    <div class="grid grid-cols-1 gap-y-16">
      <div class="mt-40">
        <Information />
      </div>
      <div>
        <TimeLine />
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import Container from "@/components/common/Container.vue";
import TimeLine from "@/components/blocks/TimeLine.vue";
import Information from "@/components/blocks/Information.vue";
</script>

<style lang="scss"></style>

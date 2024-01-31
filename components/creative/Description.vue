<template>
  <div class="description">
    <div class="container mx-auto relative">
      <div class="description-bg">
        <Icon
          name="simple-icons:react"
          size="24.6rem"
          class="absolute top-[1%] right-[5rem]"
        />
        <Icon
          name="teenyicons:javascript-outline"
          size="24.6rem"
          class="absolute top-[20%] right-[40rem]"
        />
        <Icon
          name="flowbite:vue-solid"
          size="24.6rem"
          class="absolute top-[30%] right-[10rem]"
        />
        <Icon
          name="mdi:nuxt"
          size="24.6rem"
          class="absolute top-[56%] right-[60rem]"
        />
        <Icon
          name="teenyicons:nextjs-outline"
          size="24.6rem"
          class="absolute top-[72%] right-[15rem]"
        />
      </div>
      <div class="description-wrapper">
        With a focus on user experience. Passionate about learning new
        technologies and methodologies
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.description {
  @apply text-[8.75rem] font-literata tracking-[0.9625rem];

  &-wrapper {
    @apply max-w-[79.125rem];
  }
  &-bg {
    @apply absolute h-full w-full left-0  z-[-1] opacity-[0.04];
  }
}
</style>

<template>
  <div class="main-bg"></div>
  <div class="topmenu">
    <div class="topmenu-cv">
      <ul class="flex">
        <li>
          <a href="/Jabar-Omar-cv.pdf" download>{{ $t("Resume.pdf") }}</a>
        </li>
        <li class="ml-7 mr-3"><span>|</span></li>
      </ul>
    </div>
    <div class="topmenu-lang">
      <ul>
        <li v-if="locale === 'fr'"><NuxtLink href="/">En</NuxtLink></li>
        <li v-if="locale === 'en'"><NuxtLink href="/fr">Fr</NuxtLink></li>
      </ul>
    </div>
    <ul class="topmenu-mode">
      <li v-if="$colorMode.preference === 'light'">
        <span
          class="cursor-pointer !leading-none text-2xl md:text-3xl"
          @click="$colorMode.preference = 'dark'"
          title="dark-Mode"
        >
          <Icon name="material-symbols-light:dark-mode" />
        </span>
      </li>
      <li v-if="$colorMode.preference === 'dark'">
        <span
          class="cursor-pointer !leading-none text-2xl md:text-3xl"
          @click="$colorMode.preference = 'light'"
          title="light-Mode"
        >
          <Icon name="material-symbols:light-mode" />
        </span>
      </li>
    </ul>
  </div>
  <slot />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { locale } = useI18n();
</script>

<style lang="scss">
.topmenu {
  @apply absolute top-5 right-5 z-50 duration-75 flex items-center gap-x-4;

  @screen smMax {
    @apply top-4 right-3;
  }

  &-mode {
    @apply opacity-50;

    &:hover {
      @apply opacity-100;
    }
  }
  &-lang {
    @apply font-bold text-white opacity-50  duration-75;
    &:hover {
      @apply opacity-100;
    }
  }
  &-cv {
    a {
      @apply font-bold text-white opacity-50  duration-75;
      &:hover {
        @apply opacity-100;
      }
    }
    span {
      @apply opacity-50;
    }
  }
}

.main-bg {
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-image: url("@/assets/images/bg-dark.jpg");
  // background-position: center;
  background-image: linear-gradient(
    111.4deg,
    rgba(7, 7, 9, 1) 6.5%,
    rgba(27, 24, 113, 1) 93.2%
  );
  min-height: 100vh;
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
    // background-image: url("@/assets/images/bg-light.jpg");
    // background-position: center top;
    background-color: #ffdee9;
    background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%);
    @apply text-black;
  }
  .topmenu {
    &-lang {
      @apply text-black;
    }
    &-cv {
      a,
      span {
        @apply text-black;
      }
    }
  }
}
</style>

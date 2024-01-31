<template>
  <slot class="bg" />
</template>

<script setup lang="ts">
const { locale } = useI18n();

// const setHtmlFontSize = () => {
//   var windowHeight = window.innerHeight;
//   var windowWidth = window.innerWidth;

//   let length = windowHeight;
//   let width = windowWidth;

//   let diagonal = Number(
//     Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2)).toFixed(0)
//   );

//   var fontSize = (diagonal / 2125) * 16;

//   document.documentElement.style.fontSize = fontSize + "px";
// };
// if (process.client) {
//   setHtmlFontSize();
//   window.addEventListener("resize", setHtmlFontSize);
// }
</script>

<style lang="scss">
html {
  @apply bg-black1;
}
</style>

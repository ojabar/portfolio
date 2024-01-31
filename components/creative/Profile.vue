<template>
  <div class="profil">
    <div class="container mx-auto relative h-full">
      <span class="profil-title"> Front-End </span>
      <h1 class="profil-img">
        <img src="~/assets/images/profil.png" alt="Front-end developpoer" />
      </h1>
      <span class="profil-dev"> Develpper </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.profil {
  @apply font-josefin-slab font-semibold h-screen text-[15rem] leading-[1.2];

  &-img {
    @apply absolute border-[2rem] border-black rounded-full;
    height: calc(100vh - 18rem);
    width: calc(100vh - 18rem);
    top: calc(100vh - 42rem);
    left: 6rem;
    img {
      @apply h-full w-full;
    }
  }
  &-title {
    @apply absolute;
    top: calc(100vh - 50rem);
    left: 0;
  }
  &-dev {
    @apply absolute;
    top: calc(100vh - 50rem);
    right: 0;
    transform: translateY(100%);
  }
}
</style>

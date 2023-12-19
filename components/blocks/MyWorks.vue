<script setup lang="ts">
import Card from "@/components/cards/Card.vue";
import ImageCard from "@/components/cards/ImageCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const { locale } = useI18n();

const modules = [Navigation];

interface myworksItem {
  id: number;
  title: string;
  src: string;
}

const myworksItems: myworksItem[] = [
  {
    id: 1,
    title: "clicpneu.ma",
    src: "/images/myworks/clicpneu.png",
  },
  {
    id: 2,
    title: "kiaoccasion.ma",
    src: "/images/myworks/kiaoccasion.png",
  },
  {
    id: 3,
    title: "Voyages",
    src: "/images/myworks/clicpneu.png",
  },
];
</script>

<template>
  <div class="myworks">
    <Card>
      <template #header>
        <h2>{{ $t("My works") }}</h2>
      </template>
      <div class="myworks-body">
        <swiper
          :slides-per-view="2.1"
          :space-between="20"
          :modules="modules"
          class="w-full"
          navigation
        >
          <swiper-slide v-for="myworks in myworksItems" :key="myworks.id">
            <ImageCard :src="myworks.src" :alt="myworks.title">
              <h3>{{ myworks.title }}</h3>
            </ImageCard>
          </swiper-slide>
        </swiper>
      </div>
    </Card>
  </div>
</template>

<style lang="scss">
.myworks {
  --swiper-navigation-size: 18px;
  --swiper-theme-color: white;
  --swiper-navigation-sides-offset: -40px;
  .swiper {
    position: unset;
  }
  &-body {
    @apply relative flex flex-col gap-y-14;
  }
}
</style>

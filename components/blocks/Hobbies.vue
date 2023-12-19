<script setup lang="ts">
import Card from "@/components/cards/Card.vue";
import IconCard from "@/components/cards/IconCard.vue";

const { locale } = useI18n();

interface HobbiesItem {
  id: number;
  title: string;
  icon: string;
}

const hobbiesItemsEn: HobbiesItem[] = [
  {
    id: 1,
    title: "Design UX UI",
    icon: "fluent:design-ideas-20-filled",
  },
  {
    id: 2,
    title: "Music",
    icon: "entypo:music",
  },
  {
    id: 3,
    title: "Travel",
    icon: "healthicons:travel-alt",
  },
];

const hobbiesItemsFr: HobbiesItem[] = [
  {
    id: 1,
    title: "Design UX UI",
    icon: "fluent:design-ideas-20-filled",
  },
  {
    id: 2,
    title: "Musique",
    icon: "entypo:music",
  },
  {
    id: 3,
    title: "Voyages",
    icon: "healthicons:travel-alt",
  },
];

const hobbiesItems = computed((): HobbiesItem[] => {
  return locale.value === "en" ? hobbiesItemsEn : hobbiesItemsFr;
});
</script>

<template>
  <div class="hobbies">
    <Card>
      <template #header>
        <h2>{{ $t("Hobbies") }}</h2>
      </template>
      <div class="hobbies-body">
        <div class="grid grid-cols-12 gap-5">
          <div
            class="col-span-4"
            v-for="hobbie in hobbiesItems"
            :key="hobbie.id"
          >
            <IconCard>
              <template #icon>
                <Icon :name="hobbie.icon" size="3rem" />
              </template>
              <h3>{{ hobbie.title }}</h3>
            </IconCard>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style lang="scss">
.hobbies {
  &-body {
    @apply flex flex-col gap-y-14;
  }
  // .timeLineCard {
  //   width: calc(50% - 38px);
  // }
}
</style>

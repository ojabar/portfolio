<script setup lang="ts">
import Card from "@/components/cards/Card.vue";
import TimeLineCard from "@/components/cards/TimeLineCard.vue";
import TitleUnderline from "@/components/common/TitleUnderline.vue";

type TimeLineType = {
  id: number;
  title: string;
  date: string;
  body: string;
  type: "experiences" | "educations";
};

const TimeLineDataEn1 = {
  "From 01/20": [
    {
      id: 1,
      title: "EGIODIGITAL",
      body: `<ul>
            <li>• Vue js (Nuxt js)</li>
            <li>• Maintenance and development of new features</li>
            <li>
              • Frontend development in CMS solutions such as Magento,
              PrestaShop, Wordpress
            </li>
            <li>• Frontend development in the Symfony framework</li>
            <li>• Fixed bugs</li>
          </ul>`,
      type: "experiences",
    },
  ],
};

const timeLineDataEn: TimeLineType[][] = [
  [
    {
      id: 1,
      title: "EGIODIGITAL",
      date: "From 01/20",
      body: `<ul>
            <li>• Vue js (Nuxt js)</li>
            <li>• Maintenance and development of new features</li>
            <li>
              • Frontend development in CMS solutions such as Magento,
              PrestaShop, Wordpress
            </li>
            <li>• Frontend development in the Symfony framework</li>
            <li>• Fixed bugs</li>
          </ul>`,
      type: "experiences",
    },
  ],
  [
    {
      id: 2,
      title: "SUPMTI - Engineering cycle",
      date: "21/22",
      body: "Information Systems Engineering",
      type: "educations",
    },
  ],
  [
    {
      id: 4,
      title: "SUPMTI - Professional license",
      date: "18/19",
      body: "Professional degree in computer systems",
      type: "educations",
    },
    {
      id: 3,
      title: "FORNET",
      date: "18/19",
      body: `<ul>
            <li>• Integration of responsive HTML mockups</li>
            <li>• Creation of starter themes</li>
            <li>• Integration into Drupal and WordPress CMS</li>
          </ul>`,
      type: "experiences",
    },
  ],
  [
    {
      id: 5,
      title: "ISTA - DTS",
      date: "16/17",
      body: "Technician specializing in software development",
      type: "educations",
    },
  ],
  [
    {
      id: 6,
      title: "Baccalaureate",
      date: "June 2013",
      body: "Baccalauréat sciences de la vie et de la terre",
      type: "educations",
    },
  ],
];
</script>

<template>
  <div class="timeLine">
    <Card>
      <template #header>
        <h2>My Timeline</h2>
      </template>
      <div class="timeLine-body">
        <div class="grid grid-cols-12 mt-8 -mb-2.5">
          <div class="col-span-6 pr-[38px]">
            <TitleUnderline tag="h3" class="text-2xl text-right">
              Educations
            </TitleUnderline>
          </div>
          <div class="col-span-6 pl-[38px]">
            <TitleUnderline tag="h3" class="text-2xl">
              Experiances
            </TitleUnderline>
          </div>
        </div>
        <div v-for="(timeLineItem, index) in timeLineDataEn" :key="index">
          <div v-if="timeLineItem.length === 1" class="grid grid-cols-12">
            <template v-for="item in timeLineItem" :key="item.id">
              <div class="col-span-6 pr-[38px]">
                <TimeLineCard
                  v-if="item.type === 'educations'"
                  :title="item.title"
                  :date="item.date"
                  class="ml-auto mr-0"
                  left
                >
                  <div v-html="item.body"></div>
                </TimeLineCard>
              </div>
              <div class="col-span-6 pl-[38px]">
                <TimeLineCard
                  v-if="item.type === 'experiences'"
                  :title="item.title"
                  :date="item.date"
                  class="ml-auto mr-0"
                >
                  <div v-html="item.body"></div>
                </TimeLineCard>
              </div>
            </template>
          </div>
          <div v-else class="grid grid-cols-12">
            <template v-for="item in timeLineItem" :key="item.id">
              <div
                class="col-span-6 pr-[38px]"
                v-if="item.type === 'educations'"
              >
                <TimeLineCard
                  :title="item.title"
                  :date="item.date"
                  class="ml-auto mr-0"
                  left
                >
                  <div v-html="item.body"></div>
                </TimeLineCard>
              </div>
              <div
                class="col-span-6 pl-[38px]"
                v-if="item.type === 'experiences'"
              >
                <TimeLineCard
                  :title="item.title"
                  :date="item.date"
                  class="ml-auto mr-0"
                >
                  <div v-html="item.body"></div>
                </TimeLineCard>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style lang="scss">
.timeLine {
  @apply pb-[1.125rem];
  &-body {
    @apply relative flex flex-col gap-16;
  }

  // .timeLineCard {
  //   width: calc(50% - 38px);
  // }
}
</style>

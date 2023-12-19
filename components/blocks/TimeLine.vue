<script setup lang="ts">
import Card from "@/components/cards/Card.vue";
import TimeLineCard from "@/components/cards/TimeLineCard.vue";
import TitleUnderline from "@/components/common/TitleUnderline.vue";

const { locale } = useI18n();

type TimeLineType = {
  id: number;
  title: string;
  date: string;
  body: string;
  type: "experiences" | "educations";
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
const timeLineDataFr: TimeLineType[][] = [
  [
    {
      id: 1,
      title: "EGIODIGITAL",
      date: "Depuis 01/20",
      body: `<ul>
            <li>• Vue js (Nuxt js)</li>
            <li>• Maintenance et développement de nouvelles fonctionnalités</li>
            <li>
              • Développement frontend dans des solutions CMS telles que Magento,
              PrestaShop, Wordpress
            </li>
            <li>• Développement frontend dans le framework Symfony</li>
            <li>• Correction de bugs</li>
          </ul>`,
      type: "experiences",
    },
  ],
  [
    {
      id: 2,
      title: "SUPMTI - Cycle d'ingénierie",
      date: "21/22",
      body: "Ingénierie des systèmes d'information",
      type: "educations",
    },
  ],
  [
    {
      id: 4,
      title: "SUPMTI - Licence professionnelle",
      date: "18/19",
      body: "Licence professionnelle en systèmes informatiques",
      type: "educations",
    },
    {
      id: 3,
      title: "FORNET",
      date: "18/19",
      body: `<ul>
            <li>• Intégration de maquettes HTML responsives</li>
            <li>• Création de thèmes de démarrage</li>
            <li>• Intégration dans les CMS Drupal et WordPress</li>
          </ul>`,
      type: "experiences",
    },
  ],
  [
    {
      id: 5,
      title: "ISTA - DTS",
      date: "16/17",
      body: "Technicien spécialisé en développement logiciel",
      type: "educations",
    },
  ],
  [
    {
      id: 6,
      title: "Baccalauréat",
      date: "Juin 2013",
      body: "Baccalauréat sciences de la vie et de la terre",
      type: "educations",
    },
  ],
];

const timeLineData = computed(
  (): {
    all: TimeLineType[][];
    education: TimeLineType[];
    experiance: TimeLineType[];
  } => {
    const timeLineEducation: TimeLineType[] = [];
    const timeLineExperiance: TimeLineType[] = [];

    const data = locale.value === "en" ? timeLineDataEn : timeLineDataFr;

    data.map((item) => {
      item.filter((item2) => {
        if (item2.type === "educations") {
          timeLineEducation.push(item2);
        } else {
          timeLineExperiance.push(item2);
        }
      });
    });

    return {
      all: data,
      education: timeLineEducation,
      experiance: timeLineExperiance,
    };
  }
);
</script>

<template>
  <div class="timeLine">
    <Card class="!pb-14 md:!pb-20 lg:!pb-32">
      <template #header>
        <h2>{{ $t("My Timeline") }}</h2>
      </template>
      <div class="timeLine-body hidden md:flex">
        <div class="grid grid-cols-12 mt-8 -mb-2.5">
          <div class="col-span-6 pr-[38px]">
            <TitleUnderline tag="h3" class="text-xl lg:text-2xl text-right">
              {{ $t("Educations") }}
            </TitleUnderline>
          </div>
          <div class="col-span-6 pl-[38px]">
            <TitleUnderline tag="h3" class="text-xl lg:text-2xl">
              {{ $t("Experiences") }}
            </TitleUnderline>
          </div>
        </div>
        <div v-for="(timeLineItem, index) in timeLineData.all" :key="index">
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

      <div class="timeLine-body flex md:hidden">
        <div class="grid grid-cols-12">
          <div class="col-span-12">
            <TitleUnderline tag="h3" class="text-xl lg:text-xl mb-5">
              {{ $t("Educations") }}
            </TitleUnderline>
          </div>
          <template v-for="item in timeLineData.education" :key="item.id">
            <div class="col-span-12 mb-5">
              <TimeLineCard
                :title="item.title"
                :date="item.date"
                class="ml-auto mr-0"
                left
              >
                <div v-html="item.body"></div>
              </TimeLineCard>
            </div>
          </template>
        </div>

        <div class="grid grid-cols-12 -mb-5">
          <div class="col-span-12">
            <TitleUnderline tag="h3" class="text-xl lg:text-xl mb-5">
              {{ $t("Experiences") }}
            </TitleUnderline>
          </div>
          <template v-for="item in timeLineData.experiance" :key="item.id">
            <div class="col-span-12 mb-5">
              <TimeLineCard
                :title="item.title"
                :date="item.date"
                class="ml-auto mr-0"
                left
              >
                <div v-html="item.body"></div>
              </TimeLineCard>
            </div>
          </template>
        </div>
      </div>
    </Card>
  </div>
</template>

<style lang="scss">
.timeLine {
  @apply pb-[1.125rem];
  &-body {
    @apply relative flex-col gap-16;

    @screen mdMax {
      @apply gap-10;
    }
    @screen smMax {
      @apply gap-5;
    }
  }

  // .timeLineCard {
  //   width: calc(50% - 38px);
  // }
}
</style>

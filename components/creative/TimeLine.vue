<template>
  <div class="creativeTimeline">
    <CreativeTitleBox :title="$t('My Timeline')" />
    <div class="container mx-auto relative">
      <div
        class="grid grid-cols-2 items-start gap-x-[9rem] creativeTimeline-top"
      >
        <div class="col-span-1 creativeTimeline-left">
          <span> Educations </span>
        </div>
        <div class="col-span-1 creativeTimeline-right">
          <span> Experiences </span>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-y-[9.375rem] relative py-[18.75rem]">
        <div class="v-line"></div>
        <div class="col-span-12" v-for="timeLineItem in timeLineData.all">
          <CardsCreativeTimeLineCard
            :date="timeLineItem.date"
            :title="timeLineItem.title"
            :left="timeLineItem.type === 'educations'"
            :image="timeLineItem.image"
          >
            <template #body>
              <div v-html="timeLineItem.body"></div>
            </template>
          </CardsCreativeTimeLineCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimeLineType } from "~/types/TimeLineType";
import { useTimeLine } from "@/composables/useTimeLine";
const timeLine = useTimeLine();

const { locale } = useI18n();

const timeLineDataEn: TimeLineType[][] = timeLine.timeLineDataEn;
const timeLineDataFr: TimeLineType[][] = timeLine.timeLineDataEn;

const timeLineData = computed(
  (): {
    all: TimeLineType[];
    education: TimeLineType[];
    experiance: TimeLineType[];
  } => {
    const timeLineEducation: TimeLineType[] = [];
    const timeLineExperiance: TimeLineType[] = [];
    const all: TimeLineType[] = [];

    const data = locale.value === "en" ? timeLineDataEn : timeLineDataFr;

    data.map((item) => {
      item.filter((item2) => {
        if (item2.type === "educations") {
          timeLineEducation.push(item2);
        } else {
          timeLineExperiance.push(item2);
        }
        all.push(item2);
      });
    });

    return {
      all: all,
      education: timeLineEducation,
      experiance: timeLineExperiance,
    };
  }
);
</script>

<style lang="scss" scoped>
.v-line {
  @apply w-[0.5625rem] left-1/2 bg-white h-full absolute -translate-x-full;
}

.creativeTimeline {
  &-top {
    @apply text-[6rem] font-josefin-slab font-semibold mb-[-12.775rem];
  }
  &-left {
    @apply text-right mt-[8rem] relative;
    &:after {
      content: "";
      @apply w-12 h-[0.5625rem] bg-white 
      absolute right-0 top-1/2 
      -translate-y-1/2 translate-x-full mr-[-1.5rem];
    }
  }
  &-right {
    @apply relative;
    &:after {
      content: "";
      @apply w-12 h-[0.5625rem] bg-white 
      absolute left-0 top-1/2 
      -translate-y-1/2 -translate-x-full ml-[-2rem];
    }
  }
}
</style>

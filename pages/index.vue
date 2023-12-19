<template>
  <Container :size="'sm'">
    <div
      class="grid grid-cols-1 gap-y-6 md:gap-y-12 lg:gap-y-16 my-20 lg:my-40"
    >
      <div>
        <Information />
      </div>
      <div>
        <TimeLine />
      </div>
      <div>
        <MyWorks />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Languages />
      </div>
      <div>
        <Hobbies />
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import Container from "@/components/common/Container.vue";
import Information from "@/components/blocks/Information.vue";
import TimeLine from "@/components/blocks/TimeLine.vue";
import Skills from "@/components/blocks/Skills.vue";
import Languages from "@/components/blocks/Languages.vue";
import Hobbies from "@/components/blocks/Hobbies.vue";
import MyWorks from "~/components/blocks/MyWorks.vue";

const { locale, t } = useI18n();

useHead({
  title: t("homeMetaTitle"),
  meta: [{ name: "description", content: t("homeMetaDescription") }],
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>

<style lang="scss"></style>

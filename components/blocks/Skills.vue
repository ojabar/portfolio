<script setup lang="ts">
import Card from "@/components/cards/Card.vue";
import IconCard from "@/components/cards/IconCard.vue";
import TitleUnderline from "@/components/common/TitleUnderline.vue";

const { locale } = useI18n();

interface SkillItem {
  id: number;
  title: string;
  icon: string;
}

interface SkillCategory {
  id: number;
  title: string;
  items: SkillItem[];
}

const skillsDataEn: SkillCategory[] = [
  {
    id: 1,
    title: "Programming languages",
    items: [
      {
        id: 1,
        title: "JavaScript",
        icon: "ri:javascript-fill",
      },
      {
        id: 2,
        title: "TypeScript",
        icon: "bxl:typescript",
      },
      {
        id: 3,
        title: "Php",
        icon: "akar-icons:php-fill",
      },
      {
        id: 4,
        title: "Java",
        icon: "mdi:language-java",
      },
      {
        id: 5,
        title: "C#",
        icon: "simple-icons:csharp",
      },
    ],
  },

  {
    id: 2,
    title: "Markup and annotation languages",
    items: [
      {
        id: 1,
        title: "HTML",
        icon: "akar-icons:html-fill",
      },
      {
        id: 2,
        title: "CSS",
        icon: "akar-icons:css-fill",
      },
      {
        id: 3,
        title: "SCSS",
        icon: "bi:filetype-scss",
      },
      {
        id: 4,
        title: "JSON",
        icon: "lucide:file-json",
      },
      {
        id: 5,
        title: "XML",
        icon: "tabler:file-type-xml",
      },
      {
        id: 6,
        title: "YAML",
        icon: "file-icons:yaml-alt3",
      },
      {
        id: 7,
        title: "SVG",
        icon: "ph:file-svg-bold",
      },
    ],
  },
  {
    id: 3,
    title: "Frameworks and libraries",
    items: [
      {
        id: 1,
        title: "VueJs",
        icon: "mdi:vuejs",
      },
      {
        id: 2,
        title: "NuxtJs",
        icon: "mdi:nuxt",
      },
      {
        id: 3,
        title: "ReactJs",
        icon: "mdi:react",
      },
      {
        id: 4,
        title: "NextJs",
        icon: "cib:next-js",
      },
      {
        id: 5,
        title: "Tailwind css",
        icon: "mdi:tailwind",
      },
      {
        id: 6,
        title: "Bootstrap",
        icon: "ri:bootstrap-fill",
      },
      {
        id: 7,
        title: "Strapi",
        icon: "simple-icons:strapi",
      },
      {
        id: 8,
        title: "GraphQl",
        icon: "tabler:brand-graphql",
      },
      {
        id: 9,
        title: "Symfony",
        icon: "simple-icons:symfony",
      },
      {
        id: 10,
        title: "Laravel",
        icon: "teenyicons:laravel-solid",
      },
      {
        id: 11,
        title: "JQuery",
        icon: "mdi:jquery",
      },
      {
        id: 12,
        title: "Android",
        icon: "ant-design:android-filled",
      },
    ],
  },
  {
    id: 4,
    title: "Source code management and version control tools",
    items: [
      {
        id: 1,
        title: "Git",
        icon: "ph:git-merge-fill",
      },
      {
        id: 2,
        title: "GitHub",
        icon: "mdi:github",
      },
      {
        id: 3,
        title: "GitLab",
        icon: "mdi:gitlab",
      },
    ],
  },
  {
    id: 5,
    title: "Design of visualization tools",
    items: [
      {
        id: 1,
        title: "Figma",
        icon: "ph:figma-logo",
      },
      {
        id: 2,
        title: "Adobe XD",
        icon: "simple-icons:adobexd",
      },
      {
        id: 3,
        title: "PhotoShop",
        icon: "iconoir:adobe-photoshop-solid",
      },
    ],
  },
  {
    id: 6,
    title: "IDE",
    items: [
      {
        id: 1,
        title: "VS Code",
        icon: "cib:visual-studio",
      },
      {
        id: 2,
        title: "PHP Storm",
        icon: "simple-icons:phpstorm",
      },
      {
        id: 3,
        title: "Android Studio",
        icon: "mdi:android-studio",
      },
    ],
  },
];

const skillsDataFr: SkillCategory[] = [
  {
    id: 1,
    title: "Langages de programmation",
    items: [
      {
        id: 1,
        title: "JavaScript",
        icon: "ri:javascript-fill",
      },
      {
        id: 2,
        title: "TypeScript",
        icon: "bxl:typescript",
      },
      {
        id: 3,
        title: "Php",
        icon: "akar-icons:php-fill",
      },
      {
        id: 4,
        title: "Java",
        icon: "mdi:language-java",
      },
      {
        id: 5,
        title: "C#",
        icon: "simple-icons:csharp",
      },
    ],
  },

  {
    id: 2,
    title: "Langages de balisage et d'annotation",
    items: [
      {
        id: 1,
        title: "HTML",
        icon: "akar-icons:html-fill",
      },
      {
        id: 2,
        title: "CSS",
        icon: "akar-icons:css-fill",
      },
      {
        id: 3,
        title: "SCSS",
        icon: "bi:filetype-scss",
      },
      {
        id: 4,
        title: "JSON",
        icon: "lucide:file-json",
      },
      {
        id: 5,
        title: "XML",
        icon: "tabler:file-type-xml",
      },
      {
        id: 6,
        title: "YAML",
        icon: "file-icons:yaml-alt3",
      },
      {
        id: 7,
        title: "SVG",
        icon: "ph:file-svg-bold",
      },
    ],
  },
  {
    id: 3,
    title: "Frameworks et bibliothèques",
    items: [
      {
        id: 1,
        title: "VueJs",
        icon: "mdi:vuejs",
      },
      {
        id: 2,
        title: "NuxtJs",
        icon: "mdi:nuxt",
      },
      {
        id: 3,
        title: "ReactJs",
        icon: "mdi:react",
      },
      {
        id: 4,
        title: "NextJs",
        icon: "cib:next-js",
      },
      {
        id: 5,
        title: "Tailwind css",
        icon: "mdi:tailwind",
      },
      {
        id: 6,
        title: "Bootstrap",
        icon: "ri:bootstrap-fill",
      },
      {
        id: 7,
        title: "Strapi",
        icon: "simple-icons:strapi",
      },
      {
        id: 8,
        title: "GraphQl",
        icon: "tabler:brand-graphql",
      },
      {
        id: 9,
        title: "Symfony",
        icon: "simple-icons:symfony",
      },
      {
        id: 10,
        title: "Laravel",
        icon: "teenyicons:laravel-solid",
      },
      {
        id: 11,
        title: "JQuery",
        icon: "mdi:jquery",
      },
      {
        id: 12,
        title: "Android",
        icon: "ant-design:android-filled",
      },
    ],
  },
  {
    id: 4,
    title: "Outils de gestion de code source et de contrôle de version",
    items: [
      {
        id: 1,
        title: "Git",
        icon: "ph:git-merge-fill",
      },
      {
        id: 2,
        title: "GitHub",
        icon: "mdi:github",
      },
      {
        id: 3,
        title: "GitLab",
        icon: "mdi:gitlab",
      },
    ],
  },
  {
    id: 5,
    title: "Conception d'outils de visualisation",
    items: [
      {
        id: 1,
        title: "Figma",
        icon: "ph:figma-logo",
      },
      {
        id: 2,
        title: "Adobe XD",
        icon: "simple-icons:adobexd",
      },
      {
        id: 3,
        title: "PhotoShop",
        icon: "iconoir:adobe-photoshop-solid",
      },
    ],
  },
  {
    id: 6,
    title: "IDE",
    items: [
      {
        id: 1,
        title: "VS Code",
        icon: "cib:visual-studio",
      },
      {
        id: 2,
        title: "PHP Storm",
        icon: "simple-icons:phpstorm",
      },
      {
        id: 3,
        title: "Android Studio",
        icon: "mdi:android-studio",
      },
    ],
  },
];

const skillsData = computed((): SkillCategory[] => {
  return locale.value === "en" ? skillsDataEn : skillsDataFr;
});
</script>

<template>
  <div class="skills">
    <Card>
      <template #header>
        <h2>{{$t("Skills")}}</h2>
      </template>
      <div class="skills-body">
        <div v-for="skillCategory in skillsData" :key="skillCategory.id">
          <TitleUnderline tag="h3" class="mb-5 text-base lg:text-lg">
            {{ skillCategory.title }} :
          </TitleUnderline>
          <div class="grid grid-cols-12 gap-3 md:gap-5">
            <div
              class="col-span-4 md:col-span-3"
              v-for="skill in skillCategory.items"
              :key="skill.id"
            >
              <IconCard size="sm" class="h-full">
                <template #icon>
                  <Icon :name="skill.icon" size="3rem" />
                </template>
                <h4>{{ skill.title }}</h4>
              </IconCard>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style lang="scss">
.skills {
  &-body {
    @apply flex flex-col gap-y-14;
    @screen smMax {
      @apply gap-y-8;
    }
  }
  // .timeLineCard {
  //   width: calc(50% - 38px);
  // }
}
</style>

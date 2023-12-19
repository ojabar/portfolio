<script setup lang="ts">
import Button from "~/components/form/Button.vue";
import Card from "~/components/cards/Card.vue";

const { locale } = useI18n();

type InformationType = {
  h1: string;
  disc: string;
};

const dataEn: InformationType = {
  h1: `<span> Hey, I’m <b>Omar Jabar</b> </span>
      <strong> Frontend Developer. </strong>`,
  disc: `Experienced Frontend Developer with 4 years of expertise, specializing in
      Vue.js and React.js. Proven track record of creating engaging and
      responsive web applications.<br>
      Adept at collaborating with cross-functional
      teams to deliver high-quality solutions.<br>
      Passionate about staying abreast
      of the latest technologies to enhance development skills.<br>
      Ready to
      contribute dynamic frontend development skills to innovative projects.`,
};

const dataFr: InformationType = {
  h1: `<span> Hey, je suis <b>Omar Jabar</b> </span>
       <strong> Développeur Front-end. </strong>`,
  disc: `Développeur Frontend expérimenté avec 4 ans d'expertise, spécialisé dans
       Vue.js et React.js.<br> 
       Expérience avérée dans la création d’engagements et
       applications Web réactives. Adepte de la collaboration avec des équipes interfonctionnelles
       équipes pour fournir des solutions de haute qualité. Passionné par le fait de rester à l'écoute
       des dernières technologies pour améliorer les compétences en développement. <br> 
       Prêt à apporter des compétences dynamiques en matière de développement front-end à des projets innovants.`,
};

const data = computed((): InformationType => {
  return locale.value === "en" ? dataEn : dataFr;
});
</script>

<template>
  <Card>
    <h1 class="fullname" v-html="data.h1"></h1>
    <ul class="flex flex-wrap gap-y-3 gap-x-3 md:gap-x-4 lg:gap-x-4">
      <li>
        <a
          href="https://www.linkedin.com/in/omar-jabar-55239716b/"
          target="_blank"
        >
          <Button>
            <template #after>
              <Icon name="uil:linkedin" size="1.5rem" />
            </template>
            Linkedin
          </Button>
        </a>
      </li>
      <li>
        <a href="mailto:jabar.omr@gmail.com" title="jabar.omr@gmail.com">
          <Button>
            <template #after>
              <Icon name="material-symbols:mail-rounded" size="1.5rem" />
            </template>
            Mail
          </Button>
        </a>
      </li>
      <li>
        <a href="tel:+21265454385" title="(+212)654 54 53 85">
          <Button>
            <template #after>
              <Icon name="mdi:phone" size="1.5rem" />
            </template>
            {{ $t("Phone") }}
          </Button>
        </a>
      </li>
      <li>
        <a href="https://github.com/ojabar" target="_blank" title="ojabar">
          <Button>
            <template #after>
              <Icon name="uil:github" size="1.5rem" />
            </template>
            Github
          </Button>
        </a>
      </li>
      <li>
        <a
          href="https://maps.app.goo.gl/H6Z9xjRTWE8UKNvz5"
          target="_blank"
          title="Salé"
        >
          <Button>
            <template #after>
              <Icon name="mdi:location" size="1.5rem" />
            </template>
            Address
          </Button>
        </a>
      </li>
    </ul>
    <div class="info-discription" v-html="data.disc"></div>
  </Card>
</template>

<style lang="scss">
.fullname {
  @apply relative text-8xl w-[1102px] px-5 mb-12;

  @screen mdMax {
    @apply text-[3.3rem] w-[628px];
  }
  @screen smMax {
    @apply text-[1.8rem] w-full px-0;
  }

  left: 50%;
  transform: translateX(-50%);
  & > span {
    > b {
      @apply relative;
      &::before {
        content: "";
        @apply absolute bottom-[0.08em] left-0 w-full h-[0.25em] bg-blue2;
        z-index: -1;

        transform: matrix(1, 0, -1, 1, 0, 0);
      }
    }
  }
  strong {
    display: block;
    background: linear-gradient(
      90deg,
      #2666cf 0.99%,
      #2666cf 20.44%,
      #bc0288 106.11%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @apply mt-10 ml-[140px];
    @screen mdMax {
      @apply mt-6 ml-[80px];
    }
    @screen smMax {
      @apply mt-3 ml-0;
    }
  }
}

.info-discription {
  @apply bg-primary 
  py-2 px-4 lg:py-5 lg:px-7 
  rounded-[12px] lg:rounded-[20px]
  mt-8 lg:mt-11 
  text-xs md:text-base 
  leading-[2] lg:leading-[2.2];
}

.light-mode {
  .info-discription {
    @apply bg-white-text;
  }
}
// 5.1rem

html:lang(fr) {
  .fullname {
    @apply text-[5.1rem];
    @screen mdMax {
      @apply text-[2.8rem];
    }
    @screen smMax {
      @apply text-[1.7rem];
    }
  }
}
</style>

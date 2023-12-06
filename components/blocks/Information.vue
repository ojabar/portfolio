<template>
  <Card>
    <h1 class="fullname">
      <span> Hey, I’m <b>Omar Jabar</b> </span>
      <strong> Frontend Developer. </strong>
    </h1>
    <ul class="flex gap-x-10">
      <li>
        <Button>
          <template #after>
            <Icon name="uil:linkedin" size="1.5rem" />
          </template>
          Linkedin
        </Button>
      </li>
      <li>
        <Button>
          <template #after>
            <Icon name="material-symbols:mail-rounded" size="1.5rem" />
          </template>
          Mail
        </Button>
      </li>
      <li>
        <Button>
          <template #after>
            <Icon name="uil:github" size="1.5rem" />
          </template>
          Github
        </Button>
      </li>
      <li>
        <Button>
          <template #after>
            <Icon name="mdi:location" size="1.5rem" />
          </template>
          Address
        </Button>
      </li>
    </ul>
    <div class="bg-primary py-5 px-7 rounded-[20px] mt-11">
      <p>
        Experienced Frontend Developer with 4 years of expertise, specializing in Vue.js
        and React.js. Proven track record of creating engaging and responsive web
        applications. Adept at collaborating with cross-functional teams to deliver
        high-quality solutions. Passionate about staying abreast of the latest
        technologies to enhance development skills. Ready to contribute dynamic frontend
        development skills to innovative projects.
      </p>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Button from "~/components/form/Button.vue";
import Card from "~/components/cards/Card.vue";
</script>

<style lang="scss">
.fullname {
  @apply relative text-8xl w-[1102px] px-5 mb-12;

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
    background: linear-gradient(90deg, #2666cf 0.99%, #2666cf 20.44%, #bc0288 106.11%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 140px;
    @apply mt-10;
  }
}
</style>

<template>
  <section>
    <h2 class="font-bebas_neue text-3xl md:text-4xl">
      Chronicles of mattgrah.am
    </h2>
    <div class="flex flex-wrap justify-around md:justify-between">
      <div v-for="portfolio in portfolios">
        <div
          class="mb-4 flex flex-col items-center rounded border border-neutral-700 bg-neutral-800 p-2"
        >
          <h3 class="pb-2">{{ portfolio.title }}</h3>
          <img
            :src="portfolio.image"
            :alt="portfolio.alt"
            class="mb-2 rounded border border-neutral-700"
          />
          <p class="pb-0 text-xs">{{ portfolio.date }}</p>
        </div>
        <div class="mb-4 flex gap-4">
          <ButtonSolid
            :href="portfolio.link"
            target="_blank"
            class="flex gap-2 py-2 px-3 !no-underline"
            >LIVE <IconLink />
          </ButtonSolid>
          <ButtonSolid
            :link="portfolio.github"
            target="_blank"
            class="flex gap-2 py-2 px-3 !no-underline"
            >GITHUB <IconGithub />
          </ButtonSolid>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portfolios = reactive([
  {
    title: "Version 1",
    date: "March 2021",
    link: "https://portfolio-v1.mattgrah.am/",
    github: "https://github.com/mattgrah-am/portfolio",
    image: "/img/portfolio-v1.webp",
    alt: "Thumbnail of mattgrah.am v1",
  },
  {
    title: "Version 2",
    date: "February 2022",
    link: "https://portfolio-v2.mattgrah.am/",
    github: "https://github.com/mattgrah-am/portfolio-v2",
    image: "/img/portfolio-v2.webp",
    alt: "Thumbnail of mattgrah.am v2",
  },
  {
    title: "Version 3",
    date: "February 2023 (Current)",
    link: "https://mattgrah.am/",
    github: "https://github.com/mattgrah-am/portfolio-v3",
    image: "/img/portfolio-v3.webp",
    alt: "Thumbnail of mattgrah.am v3",
  },
]);
</script>

<template>
  <section id="projects" class="mb-8">
    <div
      class="mb-8 h-[1px] w-full bg-gradient-to-r from-rose-600 to-purple-600"
    ></div>

    <h2 class="font-bebas_neue text-3xl md:text-4xl">Projects</h2>
    <div v-for="project in projects">
      <img :src="project.image" :alt="project.alt" class="mb-4 w-full" />
      <h3>{{ project.title }}</h3>
      <p class="mb-2">{{ project.desc }}</p>
      <div class="mb-8 flex gap-4">
        <ButtonSolid
          class="flex items-center justify-center gap-2 !px-4 !py-2 !no-underline"
          :link="project.link"
          target="_blank"
          >LIVE<IconLink />
        </ButtonSolid>
        <ButtonSolid
          class="flex items-center justify-center gap-2 !no-underline"
          :link="project.github"
          target="_blank"
          >GITHUB<IconGithub />
        </ButtonSolid>
      </div>
      <div class="mb-8 h-[1px] w-full bg-neutral-700"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = reactive([
  {
    title: "I know that song!",
    github: "https://github.com/mattgrah-am/iknowthatsong-vue",
    link: "https://iknowthatsong.mattgrah.am",
    id: "iknowthatsong",
    alt: "A Screenshot of I know that song app",
    thumb: "/img/iknowthatsong-200x200.webp",
    image: "/img/iknowthatsong-600x300.webp",
    desc: "A simple web app that allows the end user to search for an artist or band, which in turn generates a set of multiple choice questions where the end user is to guess the song whilst a short 30sec music clip is played. If the user guesses correctly the name of the song is highlighted green, if the user selects incorrectly the name of the selected guess is highlighted red. At the end the web app will tell the end user how they did.",
  },
  {
    title: "Tic Tac Toe",
    github: "https://github.com/mattgrah-am/tictactoe",
    link: "https://mattgrah-am.github.io/tictactoe/",
    id: "tictactoe",
    alt: "A Screenshot of tictactoe app",
    thumb: "/img/tictactoe-200x200.webp",
    image: "/img/tictactoe-600x300.webp",
    desc: "A simple Tic Tac Toe game that uses HTML, CSS, & JavaScript.",
  },
]);

const portfolios = reactive([
  {
    title: "Version 1",
    date: "March 2021",
    link: "https://portfolio-v1.mattgrah-am/",
    github: "https://github.com/mattgrah-am/portfolio",
    image: "/img/portfolio-v1.webp",
  },
  {
    title: "Version 2",
    date: "February 2022",
    link: "https://portfolio-v2.mattgrah-am/",
    github: "https://github.com/mattgrah-am/portfolio-v2",
    image: "/img/portfolio-v2.webp",
  },
  {
    title: "Version 3 - Current",
    date: "February 2023",
    link: "https://mattgrah-am/",
    github: "https://github.com/mattgrah-am/portfolio-v3",
    image: "/img/portfolio-v3.webp",
  },
]);
</script>

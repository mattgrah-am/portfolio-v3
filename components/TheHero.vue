<template>
  <main>
    <img
      src="../assets/img/hero.png"
      alt="Hero Logo - Matthew Graham"
      class="mb-4 md:mb-8"
    />
    <section>
      <h2 class="font-bebas_neue text-3xl md:text-4xl">
        Web developer, career switcher, & problem solver.
      </h2>
      <p>
        I am a Melbourne (AU) based software developer, who has recently
        completed
        <a
          href="https://generalassemb.ly/education/software-engineering-immersive-remote-flex"
          target="_blank"
          rel="noopener noreferrer"
          class="decoration-purple-600 hover:no-underline"
        >
          General Assembly's Software Engineering Immersive Online (Flex)
          program</a
        >. I recently changed careers from Facilities Management to the Tech
        industry as a Web Developer, and I take pleasure working in a career
        that I am extremely passionate about. As quoted by Marc Anthony;
      </p>
      <blockquote>
        “If you do what you love, you'll never work a day in your life.”
      </blockquote>
      <p>
        I also offer an extensive array of soft skills, such as problem solving,
        leadership, mentoring, team building, project management and
        presentations.
      </p>
    </section>
    <section class="my-4 flex justify-start gap-4">
      <ButtonGradient>
        <NuxtLink to="/about" class="!no-underline">LEARN MORE</NuxtLink>
      </ButtonGradient>
      <ButtonSolid
        class="flex items-center justify-center gap-2 !no-underline"
        link="https://github.com/mattgrah-am"
        target="_blank"
        >GITHUB<IconGithub />
      </ButtonSolid>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

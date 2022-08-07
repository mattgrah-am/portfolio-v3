<script setup lang="ts">
import IconRightArrow from "@/components/IconRightArrow.vue";
</script>

<template>
  <div>
    <h2 class="text-3xl font-black uppercase tracking-tighter sm:text-5xl">
      Hi, I'm Matt Graham.
    </h2>
    <h3 class="mb-4 text-xl font-bold uppercase tracking-tighter sm:text-2xl">
      Web developer, career switcher & problem solver.
    </h3>
    <p class="mb-4 leading-6 tracking-wider text-neutral-500">
      A Melbourne (AU) based software developer, who recently completed General
      Assembly's Software Engineering Immersive Online (Flex) program, and
      changed careers from Facilities Management into the Tech industry, as a
      Web Developer.
    </p>
    <router-link
      to="/about"
      class="rounded bg-neutral-700 px-2 py-1 hover:bg-[#111]"
      >Learn More <IconRightArrow />
    </router-link>
  </div>
</template>

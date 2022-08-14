<script setup lang="ts">
import projects from "@/composables/projectData.js";
</script>

<template>
  <div class="py-16">
    <router-link to="/projects">
      <h2 class="text-xl font-black uppercase tracking-tight sm:text-3xl">
        Featured Projects
      </h2>
      <p class="mb-4 text-lg font-bold uppercase tracking-tight">
        A collection of projects that I have completed.
      </p>
    </router-link>

    <div class="flex flex-col gap-4 divide-y divide-neutral-700">
      <div
        v-for="project in projects.slice(0, 3)"
        :key="project.id"
        class="flex gap-4 py-4 hover:scale-105 hover:transition-transform"
      >
        <img
          :src="project.thumb"
          :alt="project.id"
          class="h-1/4 w-1/4 rounded py-2"
        />
        <div class="w-3/4">
          <h2 class="text-lg font-bold uppercase tracking-tight">
            {{ project.title }}
          </h2>
          <p class="text-neutral-300">
            {{ project.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

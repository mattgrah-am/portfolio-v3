<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="min-h-screen bg-[#111] text-neutral-100">
    <NavBar />
    <div class="mx-auto w-full max-w-2xl px-4">
      <RouterView></RouterView>
    </div>
  </div>
</template>

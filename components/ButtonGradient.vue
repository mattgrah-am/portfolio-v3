<template>
  <div class="grid justify-center">
    <div class="group relative">
      <div
        class="absolute -inset-1 rounded-md bg-gradient-to-r from-rose-600 to-purple-600 opacity-50 blur transition duration-500 group-hover:opacity-100 group-hover:duration-500"
      ></div>
      <component
        :is="element"
        :href="link"
        :target="target"
        class="relative flex items-center rounded-md bg-gradient-to-r from-rose-600 to-purple-600 p-[2px] leading-none"
      >
        <span
          class="block rounded-md bg-black px-4 py-3 transition duration-500 group-hover:blur-[1px] group-hover:duration-500"
        >
          <slot />
        </span>
      </component>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  link?: string;
  target?: string;
}>();
const element = computed(() => (props.link ? "a" : "button"));
</script>

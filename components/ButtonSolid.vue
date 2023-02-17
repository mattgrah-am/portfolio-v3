<template>
  <component
    :is="element"
    :href="link"
    :target="target"
    class="rounded-md border-2 border-neutral-500 bg-black px-3 py-1 text-sm font-medium transition duration-500 hover:border-neutral-100 hover:blur-[2px] focus:bg-neutral-900 lg:text-base"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  link?: string;
  target?: string;
}>();
const element = computed(() => (props.link ? "a" : "button"));
</script>

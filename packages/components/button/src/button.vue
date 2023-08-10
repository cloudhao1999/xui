<script setup lang="ts">
defineOptions({
  name: "XButton"
});
</script>

<template>
  <component :is="'button'">
    <span>
      <slot></slot>
    </span>
  </component>
</template>

<style scoped></style>

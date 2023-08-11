<script setup lang="ts">
defineOptions({
  name: "XButton"
});

defineProps({
  type: {
    type: String,
    default: "default"
  }
});
</script>

<template>
  <component :is="'button'" :class="`el-button el-button--${type}`">
    <span>
      <slot></slot>
    </span>
  </component>
</template>

<style scoped></style>

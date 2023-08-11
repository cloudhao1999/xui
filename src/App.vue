<template>
  <div>
    <div class="row">
      <x-button>Default</x-button>
      <x-button type="primary">Primary</x-button>
      <x-button type="success">Success</x-button>
      <x-button type="info">Info</x-button>
      <x-button type="warning">Warning</x-button>
      <x-button type="danger">Danger</x-button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>

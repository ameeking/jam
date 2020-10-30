<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
</style>
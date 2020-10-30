<template>
  <a class="chip">
    <slot></slot>
  </a>
</template>

<style lang="scss">
.chip {
  font-size: 0.75rem;
  border: 1px solid gray;
  margin: 0.5rem 0.5rem 0.5rem 0;
  text-decoration: none;
  padding: 2px 5px;
}
</style>
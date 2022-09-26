<script>
export default {
  props: {
    href: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    class="c-doc"
  >
    <slot>Read more</slot>
  </component>
</template>

<style lang="scss" scoped>

a.c-doc {
  color: $default-link-color;
  text-decoration-line: underline;
  text-decoration-color: transparent;

  &:hover {
    color: $default-link-active-color;
    text-decoration-color: currentColor;
  }

}

</style>

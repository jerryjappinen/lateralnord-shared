<script>
import StyledButton from './StyledButton'

export default {
  name: 'StyledIconButton',

  components: {
    StyledButton
  },

  props: {
    color: {},
    href: {},
    to: {},
    mailto: {},
    tel: {},
    external: {},
    noIndex: {},
    submit: {},
    tab: {},
    icon: {},
    loading: {},
    disabled: {}
  },

  methods: {

    onClick (event) {
      this.$emit('click', event)
    }

  }

}
</script>

<template>
  <styled-button
    class="c-styled-icon-button"
    :class="'c-styled-icon-button-' + (color || 'default')"
    :color="color"
    :href="href"
    :to="to"
    :mailto="mailto"
    :tel="tel"
    :external="external"
    :no-index="noIndex"
    :submit="submit"
    :tab="tab"
    :icon-left="icon"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
  />
</template>

<style lang="scss">

.c-styled-icon-button {
  width: calc(#{$line-height-em} + #{2 * $pad-tight-vertical});
  height: calc(#{$line-height-em} + #{2 * $pad-tight-vertical});

  &.c-styled-button {
    @include round;
    @include no-pad;

    .c-click-button-icon-left {
      @include keep-full-center;
    }

  }

  &.c-styled-button-tertiary {
    @include hover-shadow-tight-rest($very-dark);

    &.c-click-button-enabled {
      &:focus,
      &:hover {
        @include hover-shadow-tight($very-dark, 0.25);
      }
    }

  }

}

</style>

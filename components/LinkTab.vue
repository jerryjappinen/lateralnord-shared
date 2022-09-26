<script>
import StyledButton from './StyledButton'

export default {
  name: 'LinkTab',

  components: {
    StyledButton
  },

  props: {

    exact: {
      default: false
    },

    selected: {
      type: Boolean,
      default: undefined
    },

    color: {
      default: 'tertiary'
    },

    href: {},
    to: {},
    mailto: {},
    tel: {},
    external: {},
    noIndex: {},
    submit: {},
    tab: {},
    block: {},
    center: {},
    iconLeft: {},
    iconRight: {},
    loading: {},
    disabled: {}
  }
}
</script>

<template>
  <styled-button
    :color="color"
    :href="href"
    :to="to"
    :mailto="mailto"
    :tel="tel"
    :external="external"
    :noIndex="noIndex"
    :submit="submit"
    :tab="tab"
    :block="block"
    :center="center"
    :icon-left="iconLeft"
    :icon-right="iconRight"
    :loading="loading"
    :disabled="disabled"
    :class="{
      'c-link-tab-exact': exact,
      'c-link-tab-not-exact': !exact,
      'c-link-tab-selected': selected
    }"
    class="c-link-tab"
    ref="button"
    v-on="$listeners"
  >
    <slot />
  </styled-button>
</template>

<style lang="scss">

.c-link-tab {

  &:after {
    @include absolute;
    content: '';
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: $very-dark;
    width: 100%;

    opacity: 0;
    @include transition-properties-common;
    @include transition-hover;
  }

  &.c-styled-button-tertiary {
    @include pad-vertical;
  }

  &.c-styled-button-primary {
    &:after {
      @include radius-tight-bottom;
      height: 4px;
      background-color: translucent($white, 0.6);
    }
  }

  &.c-styled-button-tertiary,
  &.c-styled-button-plain,
  &.c-styled-button-link {
    &.c-click-button-enabled {
      &:focus,
      &:hover {
        text-decoration-color: transparent;
      }
    }
  }
}

.c-link-tab:hover,
.c-link-tab-selected,
.c-link-tab-exact.router-link-exact-active,
.c-link-tab-not-exact.router-link-active,
.c-link-tab-exact.nuxt-link-exact-active,
.c-link-tab-not-exact.nuxt-link-active {
  &:after {
    opacity: 1;
    @include transition-fast;
  }
}

</style>

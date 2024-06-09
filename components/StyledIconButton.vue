<script>
import StyledButton from './StyledButton'

const negativePairings = {
  primary: 'white',
  secondary: 'secondary-white',
  tertiary: 'tertiary-white',
  outline: 'outline-white',
  link: 'link-negative',

  white: 'primary',
  'secondary-white': 'secondary',
  'tertiary-white': 'tertiary',
  'outline-white': 'outline',
  'link-negative': 'link'
}

export default {
  name: 'StyledIconButton',

  components: {
    StyledButton
  },

  props: {
    large: {
      type: Boolean,
      default: false
    },

    color: {},
    negative: {},
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

  computed: {

    computedColor () {
      return this.negative && negativePairings[this.color] ? negativePairings[this.color] : this.color
    }

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
    :class="{
      ['c-styled-icon-button-' + (computedColor || 'default')]: true,
      'c-styled-icon-button-small': !large,
      'c-styled-icon-button-large': large
    }"
    :color="color"
    :negative="negative"
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

  &.c-styled-button-tertiary-white {
    @include hover-shadow-tight-rest($white);

    &.c-click-button-enabled {
      &:focus,
      &:hover {
        @include hover-shadow-tight($white, 0.25);
      }
    }

  }

}

.c-styled-icon-button-small {
  width: calc(#{$line-height-em} + #{2 * $pad-tight-vertical});
  height: calc(#{$line-height-em} + #{2 * $pad-tight-vertical});
}

.c-styled-icon-button-large {
  width: calc(#{$line-height-em + ($line-height-em - $line-height-tight-em)} + #{2 * $pad-tight-vertical});
  height: calc(#{$line-height-em + ($line-height-em - $line-height-tight-em)} + #{2 * $pad-tight-vertical});

  .c-icon {
    width: $line-height-tight-em;
    height: $line-height-tight-em;
  }

}

</style>

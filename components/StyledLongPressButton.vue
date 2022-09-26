<script>
import longPress from 'linna/directives/longPress'

import StyledButton from './StyledButton'

export default {
  name: 'StyledButton',

  directives: {
    longPress
  },

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
    iconLeft: {},
    iconRight: {},
    loading: {},
    disabled: {}
  },

  methods: {

    onClick () {
      this.$emit('click')
    },

    onLongPress (event) {
      if (!this.disabled) {
        this.$emit('long-press', event)
      }
    }

  }

}
</script>

<template>
  <styled-button
    v-long-press="600"
    class="c-styled-button"
    :class="'c-styled-button-' + (color || 'default')"
    :href="href"
    :to="to"
    :mailto="mailto"
    :tel="tel"
    :external="external"
    :no-index="noIndex"
    :submit="submit"
    :tab="tab"
    :icon-left="iconLeft"
    :icon-right="iconRight"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
    @long-press-start="onLongPress"
  >
    <slot />
  </styled-button>
</template>

<script>
import Dropdown from 'linna/components/Dropdown'
import ownValue from 'linna/mixins/ownValue'

export default {
  name: 'StyledDropdown',

  components: {
    Dropdown
  },

  mixins: [ownValue],

  props: {
    options: {},
    value: {},
    disabled: {},
    inline: {}
  }

}
</script>

<template>
  <dropdown
    class="c-styled-dropdown"
    :options="options"
    :value.sync="ownValue"
    :disabled="disabled"
    :inline="inline"
  />
</template>

<style lang="scss">

.c-styled-dropdown {

  .c-dropdown-select {
    @include border-box;
    @include radius-tight;
    @include pad-vertical;
    @include pad-left;
    padding-right: calc(#{2 * $pad-tight-horizontal} + 1em);
    box-shadow: inset 0 0 0 1px $default-border-color;

    &:hover {
      box-shadow: inset 0 0 0 1px currentColor;
    }

    &:focus {
      box-shadow: inset 0 0 0 2px currentColor;
    }

  }

  &.c-dropdown-disabled {
    @include discreet;
  }

  .c-dropdown-icon {
    right: $pad-tight-horizontal;
  }

}

</style>

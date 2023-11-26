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
    negative: {
      type: Boolean,
      default: false
    },

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
    :class="{
      'c-styled-dropdown-default': !negative,
      'c-styled-dropdown-negative': negative,
      'c-styled-dropdown-enabled': !disabled,
      'c-styled-dropdown-disabled': disabled,
      'c-styled-dropdown-default-enabled': !negative && !disabled,
      'c-styled-dropdown-default-disabled': !negative && disabled,
      'c-styled-dropdown-negative-enabled': negative && !disabled,
      'c-styled-dropdown-negative-disabled': negative && disabled
    }"
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
    @include radius;
    @include pad-vertical;
    @include pad-left;
    padding-right: calc(#{2 * $pad-tight-horizontal} + 1em);
    box-shadow: inset 0 0 0 0 transparent;

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

.c-styled-dropdown-default-enabled {
  .c-dropdown-select {
    background-color: translucent($dark, 0.1);
  }
}

.c-styled-dropdown-negative-enabled {
  .c-dropdown-select {
    background-color: translucent($white, 0.1);
  }
}

</style>

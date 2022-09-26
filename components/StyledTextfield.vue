<script>
import Textfield from 'linna/components/Textfield'
import ownValue from 'linna/mixins/ownValue'

export default {
  name: 'StyledTextfield',

  components: {
    Textfield
  },

  mixins: [ownValue],

  props: {
    labelId: {},
    icon: {},
    type: {},
    clear: {},
    undo: {},
    name: {},
    autocomplete: {},
    multiline: {},
    placeholder: {},
    value: {},
    required: {},
    max: {},
    min: {},
    pattern: {},
    hex: {},
    inline: {},
    disabled: {}
  },

  methods: {

    focus () {
      return this.$refs.textfield.focus()
    },

    blur () {
      return this.$refs.textfield.blur()
    },

    onFocus (event) {
      this.$emit('focus', event)
    },

    onBlur (event) {
      this.$emit('blur', event)
    },

    select () {
      return this.$refs.textfield.select()
    }

  }

}
</script>

<template>
  <textfield
    ref="textfield"
    class="c-styled-textfield"
    :label-id="labelId"
    :icon="icon"
    :type="type"
    :clear="clear"
    :undo="undo"
    :name="name"
    :autocomplete="autocomplete"
    :multiline="multiline"
    :placeholder="placeholder"
    :value.sync="ownValue"
    :required="required"
    :max="max"
    :min="min"
    :pattern="pattern"
    :hex="hex"
    :inline="inline"
    :disabled="disabled"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<style lang="scss">

.c-styled-textfield {

  &.c-textfield-block {
    .c-textfield-input {
      @include block;
    }
  }

  .c-textfield-input {
    @include radius-tight;
    @include pad;
    box-shadow: inset 0 0 0 1px $default-border-color;

    &:hover {
      box-shadow: inset 0 0 0 1px currentColor;
    }

    &:focus {
      box-shadow: inset 0 0 0 2px currentColor;
    }

    &:hover {
      &:not(:focus) {
        opacity: 1;
      }
    }

  }

  .c-textfield-icon {
    left: $pad-tight-horizontal;
  }

  &.c-textfield-has-icon {
    .c-textfield-input {
      padding-left: calc(#{$pad-tight-horizontal * 2} + 1em);
    }
  }

}

.c-styled-textfield-disabled {

  .c-textfield-input {
    background-color: translucent($very-dark, 0.06);
  }

}

</style>

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
    negative: {
      type: Boolean,
      default: false
    },

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
    :class="{
      'c-styled-textfield-default': !negative,
      'c-styled-textfield-negative': negative,
      'c-styled-textfield-enabled': !disabled,
      'c-styled-textfield-disabled': disabled,
      'c-styled-textfield-default-enabled': !negative && !disabled,
      'c-styled-textfield-default-disabled': !negative && disabled,
      'c-styled-textfield-negative-enabled': negative && !disabled,
      'c-styled-textfield-negative-disabled': negative && disabled
    }"
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

  .c-textfield-button {
    color: inherit;
    background: transparent;
  }

  .c-textfield-input {
    @include radius;
    @include pad;
    box-shadow: inset 0 0 0 0 transparent;

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
    left: calc($pad-tight-horizontal + 0.25em);
  }

  &.c-textfield-has-icon {
    .c-textfield-input {
      padding-left: calc($pad-horizontal + 0.25em + 0.25em + 1em);
    }
  }

}

.c-styled-textfield-default-enabled {
  .c-textfield-input {
    background-color: translucent($dark, 0.1);
  }
}

.c-styled-textfield-negative-enabled {
  .c-textfield-input {
    background-color: translucent($white, 0.1);
  }
}

// .c-styled-textfield-disabled {
//   .c-textfield-input {
//     background-color: translucent($very-dark, 0.06);
//   }
// }

</style>

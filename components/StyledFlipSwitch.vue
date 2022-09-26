<script>
import FlipSwitch from 'linna/components/FlipSwitch'
import ownValue from 'linna/mixins/ownValue'

export default {
  name: 'FlipSwitch',

  components: {
    Textfield
  },

  mixins: [ownValue],

  props: {
    value: {},
    disabled: {}
  }

}
</script>

<template>
  <textfield
    ref="flip-switch"
    class="c-styled-flip-switch"
    :value.sync="ownValue"
    :disabled="disabled"
    v-on="$listeners"
  />
</template>

<style lang="scss">

// .c-styled-flip-switch {}

// .c-styled-textfield-disabled {}

</style>

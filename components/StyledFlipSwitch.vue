<script>
import FlipSwitch from 'linna/components/FlipSwitch'
import ownValue from 'linna/mixins/ownValue'

export default {
  name: 'FlipSwitch',

  components: {
    FlipSwitch
  },

  mixins: [ownValue],

  props: {
    value: {},
    disabled: {}
  }

}
</script>

<template>
  <flip-switch
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

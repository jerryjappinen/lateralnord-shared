<script>
import StyledDropdown from '../../components/StyledDropdown'

export default {

  components: {
    StyledDropdown
  },

  data () {
    return {
      value: 'fooo',
      options: [
        {
          label: 'Foo',
          value: 'foo'
        },
        {
          label: 'Fooo',
          value: 'fooo',
          disabled: true
        },
        {
          label: 'Bars',
          value: [
            {
              label: 'Bar',
              value: 'bar'
            },
            {
              label: 'Baar',
              value: 'baar'
            },
            {
              label: 'Baaar',
              value: 'baaar',
              disabled: true
            }
          ]
        }
      ]
    }
  }

}

</script>

<template>
  <div>

    <h1>StyledDropdown</h1>

    <div>
      <styled-dropdown
        :options="options"
        :value.sync="value"
      />
    </div>

  </div>
</template>

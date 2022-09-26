<script>
import StyledIconButton from '../../components/StyledIconButton'

export default {

  components: {
    StyledIconButton
  },

  methods: {

    onClick () {
      alert('Click')
    }

  }

}

</script>

<template>
  <div>

    <h1>StyledIconButton</h1>

    <p>
      <styled-icon-button
        icon="ellipsis-horizontal"
        @click="onClick"
      />
      <styled-icon-button
        color="primary"
        icon="ellipsis-horizontal"
        @click="onClick"
      />
      <styled-icon-button
        color="secondary"
        icon="ellipsis-horizontal"
        @click="onClick"
      />
      <styled-icon-button
        color="tertiary"
        icon="ellipsis-horizontal"
        @click="onClick"
      />
      <styled-icon-button
        color="link"
        icon="ellipsis-horizontal"
        @click="onClick"
      />
      <styled-icon-button
        color="highlight"
        icon="ellipsis-horizontal"
        @click="onClick"
      />
    </p>

  </div>
</template>

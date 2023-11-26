<script>
import Buttons from 'linna/components/Buttons'

import StyledButton from '../../components/StyledButton'

export default {

  components: {
    Buttons,
    StyledButton
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

    <h1>StyledButton</h1>

    <buttons>

      <styled-button
        @click="onClick"
      >
        No color
      </styled-button>

      <styled-button
        color="primary"
        @click="onClick"
      >
        Primary
      </styled-button>

      <styled-button
        color="secondary"
        @click="onClick"
      >
        Secondary
      </styled-button>

      <styled-button
        color="tertiary"
        @click="onClick"
      >
        Tertiary
      </styled-button>

      <styled-button
        color="plain"
        @click="onClick"
      >
        Plain
      </styled-button>

      <styled-button
        color="link"
        @click="onClick"
      >
        Link
      </styled-button>

      <styled-button
        color="highlight"
        @click="onClick"
      >
        Highlight
      </styled-button>

    </buttons>

    <buttons>

      <styled-button
        icon-right="email"
        @click="onClick"
      >
        No color
      </styled-button>

      <styled-button
        color="primary"
        icon-right="pdf-filled"
        @click="onClick"
      >
        Download PDF
      </styled-button>

      <styled-button
        color="secondary"
        icon-right="email"
        @click="onClick"
      >
        Secondary
      </styled-button>

      <styled-button
        color="tertiary"
        icon-right="email"
        @click="onClick"
      >
        Tertiary
      </styled-button>

      <styled-button
        color="plain"
        icon-right="email"
        @click="onClick"
      >
        Plain PDF
      </styled-button>

      <styled-button
        color="link"
        icon-right="email"
        @click="onClick"
      >
        Link
      </styled-button>

      <styled-button
        color="highlight"
        icon-right="email"
        @click="onClick"
      >
        Highlight
      </styled-button>

    </buttons>

    <buttons>

      <styled-button
        icon-left="email"
        @click="onClick"
      >
        No color
      </styled-button>

      <styled-button
        color="primary"
        icon-left="email"
        @click="onClick"
      >
        Primary
      </styled-button>

      <styled-button
        color="secondary"
        icon-left="email"
        @click="onClick"
      >
        Secondary
      </styled-button>

      <styled-button
        color="secondary"
        :disabled="true"
        icon-left="email"
        @click="onClick"
      >
        Secondary disabled
      </styled-button>

      <styled-button
        color="tertiary"
        icon-left="email"
        @click="onClick"
      >
        Tertiary
      </styled-button>

      <styled-button
        color="plain"
        icon-left="email"
        @click="onClick"
      >
        Plain
      </styled-button>

      <styled-button
        color="link"
        icon-left="email"
        @click="onClick"
      >
        Link
      </styled-button>

      <styled-button
        color="highlight"
        icon-left="email"
        @click="onClick"
      >
        Highlight
      </styled-button>

    </buttons>

  </div>
</template>

<style lang="scss" scoped>

.c-buttons {
  @include push-vertical;
}

</style>

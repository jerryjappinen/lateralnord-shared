<script>
import isMounted from 'linna/mixins/isMounted'

import Logo from './Logo'

export default {
  name: 'AnimatedLogo',

  components: {
    Logo
  },

  mixins: [
    isMounted
  ],

  props: {
    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-types
    twoLines: {},
    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-types
    negative: {},
    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-types
    color: {},
    // eslint-disable-next-line vue/require-default-prop, vue/require-prop-types
    highlight: {}
  }

}
</script>

<template>
  <logo
    ref="logo"
    :two-lines="twoLines"
    :negative="negative"
    :color="color"
    :highlight="highlight"
    class="c-animated-logo c-animated-logo-active"
  />
</template>

<style lang="scss">

.c-animated-logo-active {

  .c-logo-shape {
    animation-name: c-animated-logo-pulse;
    animation-duration: 8000ms;
    animation-iteration-count: infinite;
  }

  .c-logo-shape-2 {
    animation-delay: 200ms;
  }

  .c-logo-shape-3 {
    animation-delay: 600ms;
  }

}

@keyframes c-animated-logo-pulse {

  0% {
    opacity: 1;
  }

  5% {
    opacity: 0.3;
  }

  30% {
    opacity: 1;
  }

}

</style>

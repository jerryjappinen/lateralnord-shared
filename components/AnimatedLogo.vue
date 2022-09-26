<script>
import { includes, isNumber } from 'lodash'

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
    twoLines: {},
    negative: {},
    color: {},
    highlight: {},
    animation: {
      default: 'ripple',
      required: false,
      validator (value) {
        return includes([
          'pulse',
          'ripple',
          'spin'
        ], value)
      }
    }
  },

  computed: {

    circleRadius () {
      if (this.isMounted && this.$refs && this.$refs.logo) {
        return this.$refs.logo.circleRadius
      }
      return null
    },

    circleX () {
      if (this.isMounted && this.$refs && this.$refs.logo) {
        return this.$refs.logo.circleX
      }
      return null
    },

    circleY () {
      if (this.isMounted && this.$refs && this.$refs.logo) {
        return this.$refs.logo.circleY
      }
      return null
    },

    additionalCircle () {
      return this.animation === 'ripple' &&
        isNumber(this.circleRadius) &&
        isNumber(this.circleX) &&
        isNumber(this.circleY)
    }

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
    :class="{
      ['c-animated-logo-' + animation]: !!animation
    }"
    class="c-animated-logo"
  >

    <circle
      v-if="additionalCircle"
      :cx="circleX"
      :cy="circleY"
      :r="circleRadius"
      :style="{
        transformOrigin: circleX + 'px ' + circleY + 'px'
      }"
      class="c-animated-logo-circle"
    />

  </logo>
</template>

<style lang="scss">

@keyframes c-animated-logo-spin-circle {

  0% {
    stroke-dasharray: 0;
  }

  50% {
    stroke-dasharray: 283;
  }

  100% {
    stroke-dasharray: 0;
  }

}

.c-animated-logo-spin {

  circle {
    stroke: currentColor;
    stroke-opacity: 0.25;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-width: 10;
    // stroke-dasharray: 6px 40px;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    animation-name: c-animated-logo-spin-circle;
    animation-duration: 10s;
  }

}



@keyframes c-animated-logo-pulse-circle {

  0%,
  50% {
    opacity: 1;
  }

  25% {
    opacity: 0.5;
  }

}

.c-animated-logo-pulse {

  circle {
    animation-name: c-animated-logo-pulse-circle;
    animation-duration: 5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

}



@keyframes c-animated-logo-ripple-circle {

  0%,
  50% {
    opacity: 0.75;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.75);
  }

}

.c-animated-logo-ripple {

  .c-animated-logo-circle {
    animation-name: c-animated-logo-ripple-circle;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    transform-origin: 100% 100%;
  }

}

</style>

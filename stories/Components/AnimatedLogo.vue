<script>
import AnimatedLogo from '../../components/AnimatedLogo'

export default {
  components: {
    AnimatedLogo
  },

  data () {
    return {
      animationName: 'pulse'
    }
  },

  methods: {
    setAnimation (name) {
      this.animationName = name
    }
  }
}
</script>

<template>
  <div>

    <h1>AnimatedLogo</h1>

    <actions>

      <button @click="setAnimation(null)">
        None
      </button>

      <button @click="setAnimation('pulse')">
        Pulse
      </button>

      <button @click="setAnimation('spin')">
        Spin
      </button>

      <button @click="setAnimation('ripple')">
        Ripple
      </button>

    </actions>

    <div class="all">

      <table>
        <tr>

          <td>
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

          <td>
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

          <td>
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

          <td>
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

          <td>
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

        </tr>
        <tr>

          <td colspan="4">
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

          <td colspan="2">
            <animated-logo
              :highlight="true"
              :animation="animationName"
            />
          </td>

        </tr>
      </table>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.all {
  margin-top: 2em;
}

</style>

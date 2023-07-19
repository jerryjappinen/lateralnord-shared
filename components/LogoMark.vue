<script>
export default {
  name: 'LogoMark',

  props: {

    negative: {
      default: false
    },

    color: {
      default: false
    },

    highlight: {
      default: false
    }

  },

  data () {
    return {
      circleRadius: 12,
      width: 100,
      height: 100,
      circleX: 88,
      circleY: 82
    }
  },

  computed: {
    viewBox () {
      return [0, 0, this.width, this.height].join(' ')
    }
  }

}
</script>

<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :class="{
      'c-logo-mark-color': color,
      'c-logo-mark-negative': negative,
      'c-logo-mark-highlight': highlight,
      'c-logo-mark-mono': !color && !negative
    }"
    class="c-logo-mark"
    xmlns="http://www.w3.org/2000/svg"
    title="Lateral Nord"
  >
    <g
      fill="none"
      fill-rule="evenodd"
    >
      <path
        d="M0 60.244C0 39.48 12.284 26.952 27.813 26.952c8.576 0 15.297 3.828 18.89 9.744V7h22.83v85.84h-22.83v-9.048c-3.36 5.8-9.85 9.86-19.006 9.86C12.284 93.652 0 81.008 0 60.244zm46.819 0c0-8.7-5.447-13.456-11.82-13.456-6.49 0-11.821 4.64-11.821 13.456 0 8.7 5.33 13.572 11.82 13.572 6.374 0 11.82-4.756 11.82-13.572z"
        fill="currentColor"
        fill-rule="nonzero"
      />

      <circle
        fill="currentColor"
        cx="88"
        cy="82"
        r="12"
      />

    </g>
  </svg>
</template>

<style lang="scss">

$c-logo-mark-color: #161513;
$c-logo-mark-negative: #fff;
$c-logo-mark-green: #62d198;

.c-logo-mark {
  @include block;
  @include visible-overflow;
  width: auto;
  height: auto;
}

.c-logo-mark-color {
  color: $c-logo-mark-color;
}

.c-logo-mark-negative {
  color: $c-logo-mark-negative;
}

.c-logo-mark-color,
.c-logo-mark-negative,
.c-logo-mark-highlight {

  circle {
    fill: $c-logo-mark-green;
  }

}

</style>

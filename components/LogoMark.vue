<script>
export default {
  name: 'LogoMark',

  props: {

    negative: {
      type: Boolean,
      default: false
    },

    color: {
      type: Boolean,
      default: false
    },

    highlight: {
      type: Boolean,
      default: false
    }

  },

  data () {
    return {
      width: 100,
      height: 100
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
        d="M27.8131 23.952C12.2841 23.952 0 36.48 0 57.244C0 78.008 12.2841 90.652 27.6972 90.652C36.8523 90.652 43.3421 86.592 46.7028 80.792V89.84H69.5327V4H46.7028V33.696C43.1103 27.78 36.3888 23.952 27.8131 23.952ZM34.9981 43.788C41.372 43.788 46.8187 48.544 46.8187 57.244C46.8187 66.06 41.372 70.816 34.9981 70.816C28.5084 70.816 23.1776 65.944 23.1776 57.244C23.1776 48.428 28.5084 43.788 34.9981 43.788Z"
        fill="currentColor"
        fill-rule="nonzero"
      />

      <path
        fill="currentColor"
        class="c-logo-mark-shape c-logo-mark-shape-1"
        d="M77 48.84H100V57.84H77V48.84Z"
      />

      <path
        fill="currentColor"
        class="c-logo-mark-shape c-logo-mark-shape-2"
        d="M77 64.84H100V73.84H77V64.84Z"
      />

      <path
        fill="currentColor"
        class="c-logo-mark-shape c-logo-mark-shape-3"
        d="M77 80.84H100V89.84H77V80.84Z"
      />

    </g>
  </svg>
</template>

<style lang="scss">

$c-logo-mark-color: $dark;
$c-logo-mark-negative: $white;
$c-logo-mark-green: $brand-color;

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

  .c-logo-mark-shape {
    fill: $c-logo-mark-green;
  }

}

</style>

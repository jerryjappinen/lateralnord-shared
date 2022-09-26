<script>
const colorsLength = 19

export default {
  data () {
    return {
      colorsLength
    }
  }
}
</script>

<template>
  <div>

    <h1>Colors</h1>

    <div class="dark">
      <div
        v-for="i in colorsLength"
        :key="i"
        class="color"
      />
    </div>

    <div class="light">
      <div
        v-for="i in colorsLength"
        :key="i"
        class="color"
      />
    </div>

  </div>
</template>

<style lang="scss" scoped>
$colors: (
  $white,
  $very-very-light-grey,
  $very-light-grey,
  $light-grey,
  $grey,
  $dark-grey,
  $dark,
  $very-dark,
  $black,
  $light-yellow,
  $yellow,
  $dark-yellow,
  $light-green,
  $green,
  $dark-green,
  $light-red,
  $red,
  $dark-red,
  $light-blue,
  $blue,
  $dark-blue,
);

.light,
.dark {
  @include clear-after;
  padding: 0.5em;
}

.white {
  background-color: $white;
}

.dark {
  background-color: $dark;
}

.color {
  @include radius;
  float: left;
  margin: 0.5em;
  width: 4em;
  height: 4em;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

}

</style>

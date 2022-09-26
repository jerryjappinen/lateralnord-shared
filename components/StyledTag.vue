<script>
import Tag from 'linna/components/tag'

const colors = [
  'white',
  'grey',
  'dark',
  'green',
  'yellow',
  'red',
  'solid-green',
  'solid-yellow',
  'solid-red'
]

export default {
  name: 'StyledTag',

  components: {
    Tag
  },

  props: {
    color: {
      default: 'dark',
      validator (value) {
        return colors.indexOf(value) > -1
      }
    }
  }

}
</script>

<template>
  <tag
    class="c-styled-tag"
    :class="'c-styled-tag-' + (color || 'default')"
  ><slot /></tag>
</template>

<style lang="scss">

.c-styled-tag-white {
  color: $very-dark;
  background-color: $white;
}

.c-styled-tag-grey {
  background-color: $very-light-grey;
}

.c-styled-tag-dark {
  color: $white;
  background-color: $very-dark;
}



// Colors

.c-styled-tag-green {
  color: $very-dark;
  background-color: $light-green;
}

.c-styled-tag-yellow {
  color: $very-dark;
  background-color: translucent($yellow, 0.25);
}

.c-styled-tag-red {
  color: $very-dark;
  background-color: translucent($red, 0.25);
}



// Solid

.c-styled-tag-solid-green {
  color: $white;
  background-color: $green;
}

.c-styled-tag-solid-yellow {
  color: $very-dark;
  background-color: $yellow;
}

.c-styled-tag-solid-red {
  color: $white;
  background-color: $red;
}

</style>

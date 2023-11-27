<script>
import ClickButton from 'linna/components/ClickButton'

const colors = [
  'highlight',
  'primary',
  'white',
  'danger',
  'secondary',
  'secondary-white',
  'outline',
  'outline-white',
  'tertiary',
  'plain',
  'link',
  'link-negative'
]

const negativePairings = {
  primary: 'white',
  secondary: 'secondary-white',
  outline: 'outline-white',
  link: 'link-negative',

  white: 'primary',
  'secondary-white': 'secondary',
  'outline-white': 'outline',
  'link-negative': 'link'
}

export default {
  name: 'StyledButton',

  components: {
    ClickButton
  },

  props: {

    color: {
      default: null,
      required: false,
      validator (value) {
        return colors.indexOf(value) > -1
      }
    },

    // Flips colors
    negative: {
      type: Boolean,
      default: false
    },

    href: {},
    to: {},
    mailto: {},
    tel: {},
    external: {},
    noIndex: {},
    submit: {},
    tab: {},
    block: {},
    center: {},
    iconLeft: {},
    iconRight: {},
    loading: {},
    disabled: {}
  },

  computed: {

    computedColor () {
      return this.negative && negativePairings[this.color] ? negativePairings[this.color] : this.color
    }

  },

  methods: {

    onClick (event) {
      this.$emit('click', event)
    }

  }

}
</script>

<template>
  <click-button
    class="c-styled-button"
    :class="'c-styled-button-' + (computedColor || 'default')"
    :href="href"
    :to="to"
    :mailto="mailto"
    :tel="tel"
    :external="external"
    :no-index="noIndex"
    :submit="submit"
    :tab="tab"
    :block="block"
    :center="center"
    :icon-left="iconLeft"
    :icon-right="iconRight"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </click-button>
</template>

<style lang="scss">

.c-styled-button-highlight,
.c-styled-button-primary,
.c-styled-button-white,
.c-styled-button-danger,
.c-styled-button-secondary,
.c-styled-button-secondary-white,
.c-styled-button-tertiary {
  .c-click-button-content {
    @include strong;
  }
}

.c-styled-button-highlight,
.c-styled-button-primary,
.c-styled-button-white,
.c-styled-button-danger,
.c-styled-button-secondary,
.c-styled-button-secondary-white {
  @include pad;
  @include radius;
  justify-content: center;

  .c-click-button-icon-left {
    left: #{math.div($pad-loose-horizontal, 2)};
  }

  .c-click-button-icon-right {
    right: #{math.div($pad-loose-horizontal, 2)};
  }

}



// Solid buttons

.c-styled-button-highlight,
.c-styled-button-white {
  color: $very-dark;

  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      color: translucent($very-dark, 0.3);
    }
  }
}

.c-styled-button-secondary {
  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      color: translucent($dark, 0.5);
    }
  }
}

.c-styled-button-primary,
.c-styled-button-danger,
.c-styled-button-secondary-white,
.c-styled-button-highlight {
  color: $white;

  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      color: translucent($white, 0.5);
    }
  }
}

.c-styled-button-highlight {
  background-color: $brand-color;
}

.c-styled-button-primary {
  background-color: $very-dark;
}

.c-styled-button-secondary {
  background-color: $very-light-grey;
}

.c-styled-button-secondary-white {
  background-color: $dark;
}

.c-styled-button-white {
  background-color: $white;
}

.c-styled-button-danger {
  background-color: $red;
}



// Outlined buttons

.c-styled-button-outline,
.c-styled-button-outline-white {
  padding: #{$pad-vertical - 2px} #{$pad-horizontal - 2px};

  &.c-click-button {
    border-width: 2px;
  }
}

.c-styled-button-outline {
  color: $very-dark;
  border-color: $very-dark;

  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      @include discreet;
      border-color: $grey;
    }
  }

}

.c-styled-button-outline-white {
  color: $white;
  border-color: $white;

  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      opacity: 0.5;
    }
  }

}



// Link buttons

.c-styled-button-link {
  @include link;

  &.c-click-button-enabled {
    &:focus,
    &:hover {
      color: $dark-blue;
    }
  }

}

.c-styled-button-link-negative {
  @include link;
  color: $light-blue;
}



// States

.c-styled-button-highlight {
  @include hover-shadow-tight-rest($yellow);

  &.c-click-button-enabled {
    &:focus,
    &:hover {
      @include hover-shadow-tight($yellow, 0.25);
    }
  }

}

.c-styled-button-danger {
  @include hover-shadow-tight-rest($red);

  &.c-click-button-enabled {
    &:focus,
    &:hover {
      @include hover-shadow-tight($red, 0.25);
    }
  }

}

.c-styled-button-primary,
.c-styled-button-secondary {
  @include hover-shadow-tight-rest($very-dark);

  &.c-click-button-enabled {
    &:focus,
    &:hover {
      @include hover-shadow-tight($very-dark, 0.25);
    }
  }

}

.c-styled-button-white,
.c-styled-button-secondary-white {
  @include hover-shadow-tight-rest($white);

  &.c-click-button-enabled {
    &:focus,
    &:hover {
      @include hover-shadow-tight($white, 0.25);
    }
  }

}

.c-styled-button-tertiary,
.c-styled-button-plain,
.c-styled-button-link,
.c-styled-button-link-negative {
  text-decoration-line: underline;
  text-decoration-color: transparent;

  &.c-click-button-enabled {
    &:focus,
    &:hover {
      text-decoration-color: currentColor;
    }
  }

}

.c-styled-button-tertiary,
.c-styled-button-plain {
  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      opacity: 0.5;
    }
  }
}

.c-styled-button-link,
.c-styled-button-link-negative {
  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      @include discreet;
    }
  }
}

.c-styled-button-default {
  &.c-click-button-not-loading {
    &.c-click-button-disabled {
      @include discreet;
    }
  }
}

</style>

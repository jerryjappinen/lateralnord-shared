<script>
import { kebabCase } from 'lodash'

export default {

  props: {
    svgs: {
      required: true
    }
  },

  data () {
    return {
      keys: this.svgs.map((key) => {
        return kebabCase(key)
      }).sort()
    }
  }

}

</script>

<template>
  <div>

    <h1>SVGs</h1>

    <p>
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      From <doc href="https://bitbucket.org/lateralnord/lateralnord-svg">lateralnord-svg</doc>. Use <code>Vector</code> or <code>Icon</code> to display these, or import with your desired loader and use as you wish.
    </p>

    <div class="grid">

      <div
        v-for="key in keys"
        :key="key"
        class="cell"
      >

        <div class="svg">
          <component :is="'svg-' + key" />
        </div>

        <code>{{ key }}</code>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.grid {
  @include grid;
  @include grid-columns(2);
  @include grid-gap(1em, 1em);

  @include tablet {
    @include grid-columns(4);
  }

  @include desktop {
    @include grid-columns(6);
  }

  @include hd {
    @include grid-columns(8);
  }

}

.svg {
  @include border-box;
  padding: 1em;
  background-color: $very-light-grey;
  background-position: 50% 50%;
  background-size: 1em 1em;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIElEQVQoU2NkYGCQYsAEz9CFGIeIQix+wfQgyDODXSEANzEFjc0z43QAAAAASUVORK5CYII=);
  width: 100%;
  height: 8em;
  color: #ff00ff;

  //
  svg {
    width: 100em;
    height: 100em;
  }

}

.cell {

  code {
    @include block;
    @include small-font;
  }

}

</style>

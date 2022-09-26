<script>
import LogoMark from '../../components/LogoMark'

export default {
  components: {
    LogoMark
  }
}
</script>

<template>
  <div>

    <h1>LogoMark</h1>

    <table>

      <tr>
        <th>Parameter</th>
        <th>Description</th>
        <th>Default</th>
      </tr>

      <tr>
        <td><code>highlight</code></td>
        <td>Set the circle to be colored green.</td>
        <td><code>false</code></td>
      </tr>

      <tr>
        <td><code>negative</code></td>
        <td>Set the logo to the official light value (white).</td>
        <td><code>false</code></td>
      </tr>

      <tr>
        <td><code>color</code></td>
        <td>Set the logo to the official dark value (black).</td>
        <td><code>false</code></td>
      </tr>

    </table>



    <h2>Examples</h2>

    <table class="logos">

      <tr>

        <td>
          <code>&lt;logo-mark /&gt;</code>
        </td>

        <td>
          <logo-mark />
        </td>

        <td class="colored">
          <logo-mark />
        </td>

        <td class="inverted">
          <logo-mark />
        </td>

      </tr>

      <tr>

        <td>
          <code>:highlight="true"</code>
        </td>

        <td>
          <logo-mark :highlight="true" />
        </td>

        <td class="colored">
          <logo-mark :highlight="true" />
        </td>

        <td class="inverted">
          <logo-mark :highlight="true" />
        </td>

      </tr>

      <tr>

        <td>
          <code>:negative="true"</code>
        </td>

        <td>
          <logo-mark :color="true" />
        </td>

        <td class="colored">
          <logo-mark :color="true" />
        </td>

        <td class="inverted">
          <logo-mark :color="true" />
        </td>

      </tr>

      <tr>

        <td>
          <code>:color="true"</code>
        </td>

        <td>
          <logo-mark :negative="true" />
        </td>

        <td class="colored">
          <logo-mark :negative="true" />
        </td>

        <td class="inverted">
          <logo-mark :negative="true" />
        </td>

      </tr>

    </table>

  </div>
</template>

<style lang="scss" scoped>

.logos {
  border-width: 1px;

  td {
    border-width: 0;
    vertical-align: middle;

    &:first-child {
      border-right-width: 1px;
    }

    &:not(:first-child) {
      color: $blue;
    }

  }

}

.colored {
  background-color: $dark-red;
}

.inverted {
  background-color: $dark;
}

</style>

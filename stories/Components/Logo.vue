<script>
import Logo from '../../components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<template>
  <div>

    <h1>Logo</h1>

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

      <tr>
        <td><code>two-lines</code></td>
        <td>Use the two-line variant of the logo.</td>
        <td><code>false</code></td>
      </tr>

    </table>



    <h2>One line</h2>

    <table class="logos">

      <tr>

        <td>
          <code>&lt;logo /&gt;</code>
        </td>

        <td>
          <logo />
        </td>

        <td class="colored">
          <logo />
        </td>

        <td class="inverted">
          <logo />
        </td>

      </tr>

      <tr>

        <td>
          <code>:highlight="true"</code>
        </td>

        <td>
          <logo :highlight="true" />
        </td>

        <td class="colored">
          <logo :highlight="true" />
        </td>

        <td class="inverted">
          <logo :highlight="true" />
        </td>

      </tr>

      <tr>

        <td>
          <code>:negative="true"</code>
        </td>

        <td>
          <logo :color="true" />
        </td>

        <td class="colored">
          <logo :color="true" />
        </td>

        <td class="inverted">
          <logo :color="true" />
        </td>

      </tr>

      <tr>

        <td>
          <code>:color="true"</code>
        </td>

        <td>
          <logo :negative="true" />
        </td>

        <td class="colored">
          <logo :negative="true" />
        </td>

        <td class="inverted">
          <logo :negative="true" />
        </td>

      </tr>

    </table>



    <h2>
      <code>:two-lines="true"</code>
    </h2>

    <table class="logos">

      <tr>

        <td>
          <code>:two-lines="true"</code>
        </td>

        <td>
          <logo :two-lines="true" />
        </td>

        <td class="colored">
          <logo :two-lines="true" />
        </td>

        <td class="inverted">
          <logo :two-lines="true" />
        </td>

      </tr>

      <tr>

        <td>
          <code>:highlight="true"</code>
        </td>

        <td>
          <logo
            :two-lines="true"
            :highlight="true"
          />
        </td>

        <td class="colored">
          <logo
            :two-lines="true"
            :highlight="true"
          />
        </td>

        <td class="inverted">
          <logo
            :two-lines="true"
            :highlight="true"
          />
        </td>

      </tr>

      <tr>

        <td>
          <code>:negative="true"</code>
        </td>

        <td>
          <logo
            :two-lines="true"
            :color="true"
          />
        </td>

        <td class="colored">
          <logo
            :two-lines="true"
            :color="true"
          />
        </td>

        <td class="inverted">
          <logo
            :two-lines="true"
            :color="true"
          />
        </td>

      </tr>

      <tr>

        <td>
          <code>:color="true"</code>
        </td>

        <td>
          <logo
            :two-lines="true"
            :negative="true"
          />
        </td>

        <td class="colored">
          <logo
            :two-lines="true"
            :negative="true"
          />
        </td>

        <td class="inverted">
          <logo
            :two-lines="true"
            :negative="true"
          />
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

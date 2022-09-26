<script>
import StyledTextfield from '../../components/StyledTextfield'

export default {

  components: {
    StyledTextfield
  },

  data () {
    return {
      value: 'Test',
      emptyValue: '',
      multilineValue: 'Multiline test',
      emailValue: 'foo@bar.com',
      numberValue: 4,
      monthValue: ''
    }
  }

}

</script>

<template>
  <div>

    <h1>StyledTextfield</h1>

    <table>
      <tbody>

        <tr>
          <td>
            <code>StyledTextfield</code>
          </td>
          <td colspan="2">
            <styled-textfield
              :value.sync="value"
            />
          </td>
        </tr>

        <tr>
          <td>
            <code>Inline</code>
          </td>
          <td colspan="2">

            <styled-textfield
              :value.sync="value"
              :inline="true"
            />

            <styled-textfield
              :value.sync="value"
              :inline="true"
            />

          </td>
        </tr>

        <tr>
          <td>
            With placeholder
          </td>
          <td colspan="2">
            <styled-textfield
              :value.sync="emptyValue"
              placeholder="Fill in value..."
            />
          </td>
        </tr>

        <tr>
          <td>
            Clear button
          </td>
          <td colspan="2">
            <styled-textfield
              :value.sync="value"
              :clear="true"
            />
          </td>
        </tr>

        <tr>
          <td>
            Undo button
          </td>
          <td>
            <styled-textfield
              :value.sync="value"
              :undo="true"
            />
          </td>
          <td>
            <styled-textfield
              :value.sync="value"
              undo="Foo"
            />
          </td>
        </tr>

        <tr>
          <td>
            With an icon
          </td>
          <td colspan="2">
            <styled-textfield
              :value.sync="value"
              :clear="true"
              icon="search"
            />
          </td>
        </tr>

        <tr>
          <td>
            Min and max values
          </td>
          <td>
            <styled-textfield
              :value.sync="value"
              :min="2"
              :max="6"
            />
          </td>
          <td>
            <styled-textfield
              :value.sync="numberValue"
              type="number"
              :min="2"
              :max="6"
            />
          </td>
        </tr>

        <tr>
          <td>
            Render a <code>textarea</code>
          </td>
          <td colspan="2">
            <styled-textfield
              :value.sync="value"
              :multiline="true"
            />
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Extra features</h3>

    <table>
      <tbody>

        <tr>
          <td>
            <code>autocomplete</code> enables <doc
              href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control"
            >browser's autocomplete</doc> feature. Always use the <code>name</code> attribute with this.
          </td>
          <td>
            <styled-textfield
              :value.sync="value"
              :autocomplete="true"
              name="Name"
            />
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Types</h3>

    <p>
      Set <code>type</code> to any <doc
        href="https://www.w3schools.com/tags/att_input_type.asp"
      >HTML input type</doc>. Default is <code>text</code>.
    </p>

    <table>
      <thead>
        <tr>
          <th>number</th>
          <th>email</th>
          <th>month</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>
            <styled-textfield
              :value.sync="numberValue"
              type="number"
            />
          </td>
          <td>
            <styled-textfield
              :value.sync="emailValue"
              type="email"
            />
          </td>
          <td>
            <styled-textfield
              :value.sync="monthValue"
              type="month"
            />
            <br>{{ monthValue }}
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

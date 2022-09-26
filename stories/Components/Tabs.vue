<script>
import LinkTab from '../../components/LinkTab'
import Tabs from '../../components/Tabs'

export default {
  components: {
    LinkTab,
    Tabs
  }
}
</script>

<template>
  <div>

    <h1>Tabs</h1>

    <tabs>

      <link-tab>
        Tab 1
      </link-tab>

      <link-tab>
        Tab 2
      </link-tab>

      <link-tab :selected="true">
        Tab 3
      </link-tab>

    </tabs>

  </div>
</template>

<style lang="scss" scoped>

</style>

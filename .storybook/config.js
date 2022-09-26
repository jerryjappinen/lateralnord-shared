import { kebabCase } from 'lodash'
import Vue from 'vue'
import { addParameters, configure } from '@storybook/vue'

import '../base/styles/global.scss'
import * as components from '../base/components/'
import * as svgs from '../base/svgs'

// Vue globals for documentation
for (const key in components) {
  Vue.component(kebabCase(key), components[key])
}

for (const key in svgs) {
  Vue.component(kebabCase('svg-' + key), svgs[key])
}



// https://webpack.js.org/guides/dependency-management/#requirecontext
const req = require.context('./', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => {
    return req(filename)
  })
}

addParameters({
  options: {
    showPanel: false,
    panelPosition: 'right',
    sortStoriesByKind: true
  }
})

configure(loadStories, module)

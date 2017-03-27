import properties from '../properties';

const dependencies = properties.get().dependencies;

if (dependencies.utility.jquery.enabled) {
  let $ = require('jquery');
  window.$ = window.jQuery = global.$ = global.jQuery = $;
}

if (dependencies.utility['react-tap-event-plugin'].enabled) {
  // Needed for onTouchTap.
  // http://stackoverflow.com/a/34015469/988941
  let injectTapEventPlugin = require('react-tap-event-plugin');

  injectTapEventPlugin();
}

if (dependencies.ui.react['ant-design'].enabled) {
  let antd = require("antd");
}

// if (dependencies.ui['material-components-web'].enabled) {
//   require('material-components-web/dist/material-components-web.min.css');
//   import * as mdc require('material-components-web/dist/material-components-web.js');
//
//     mdc.autoInit();
// }
//
// if (dependencies.ui['material-design-lite'].enabled) {
//   require('model/shared/configuration/ui/material-design-lite/material-design-lite');
// }
//
// if (dependencies.ui['material-ui'].enabled) {
//   require('model/shared/configuration/ui/material-ui/material-ui');
// }
//
// if (dependencies.ui['materialize-css'].enabled) {
//   require('model/shared/configuration/ui/materialize-css/materialize-css');
// }
//
// if (dependencies.ui['react-toolbox'].enabled) {
//   require('model/shared/configuration/ui/react-toolbox/react-toolbox');
// }
//
// if (dependencies.ui['semantic-ui'].enabled) {
//   require('model/shared/configuration/ui/semantic-ui/semantic-ui');
// }
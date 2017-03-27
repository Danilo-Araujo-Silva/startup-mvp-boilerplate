// import Es6Promise from 'es6-promise';
// Es6Promise.polyfill();
// or
// import 'es6-promise/auto';
// or
// import Promise from 'promise-polyfill';
// if (!window.Promise) {
//   window.Promise = Promise;
// }
// async function determineDate() {
//   // console.log('import', import);
//   const moment = await import('./file.scss');
//   // console.log('moment', moment);
//   return '1';
// }

// async function slow() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       console.log("slow finished");
//       resolve();
//     }, 3000);
//   });
// }
//
// slow();

// determineDate().then(str => console.log(str));

function determineDate() {
  import('jquery/dist/jquery').then(function(asdf) {
    console.log('asdf', asdf);
  }).catch(function(error) {
    console.log("Errorrrrrrr", error);
  });
  // import('./file.scss').then(function(moment) {
  //   console.log(moment);
  // }).catch(function(err) {
  //   console.log('Failed to load moment', err);
  // });
}

determineDate();



var style = null;

// style = require('style-loader/useable!css-loader!./file.scss');

console.log('style', style);

if (style && style.unuse) {
  style.unuse();
}

// import properties from '../properties';
//
// const dependencies = properties.get().dependencies;

// if (dependencies.utility.jquery.enabled) {
//   let $ = require('jquery');
//   window.$ = window.jQuery = global.$ = global.jQuery = $;
// }
//
// if (dependencies.utility['react-tap-event-plugin'].enabled) {
//   // Needed for onTouchTap.
//   // http://stackoverflow.com/a/34015469/988941
//   let injectTapEventPlugin = require('react-tap-event-plugin');
//
//   injectTapEventPlugin();
// }
//
// if (dependencies.ui.react['ant-design'].enabled) {
//   let antd = require("antd");
// }

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
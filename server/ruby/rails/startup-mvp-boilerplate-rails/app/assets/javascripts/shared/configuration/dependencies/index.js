import properties from '../properties';

const dependencies = properties.get().dependencies;

// angular - ui - material
if (dependencies['@angular/material'].enabled) {

} else {

}

// web - utility - animation
if (dependencies['animate.css'].enabled) {
  let animateCss = require('animate.css');
} else {

}

// react - ui - material
if (dependencies['ant-design'].enabled) {

} else {

}

// web - ui - material
if (dependencies['bulma'].enabled) {

} else {

}

// web - ui - material
if (dependencies['flat-ui'].enabled) {

} else {

}

// web - font - icons
if (dependencies['font-awesome'].enabled) {
  let fontAwesome = require('font-awesome');
} else {

}

// web - utility - animation - hover
if (dependencies['hover.css'].enabled) {

} else {

}

// web - utility - multi
if (dependencies['jquery'].enabled) {

} else {

}

// web - ui - material
if (dependencies['material-components-web'].enabled) {

} else {

}

// web - ui - material (deprecated, use material-components-web prefereably)
if (dependencies['material-design-lite'].enabled) {

} else {

}

// react - ui - material
if (dependencies['material-ui'].enabled) {

} else {

}

// web - ui - material
if (dependencies['materialize-css'].enabled) {
  // let materializeCss = require('materialize-css');
} else {

}

// angular - ui - material
if (dependencies['primeng'].enabled) {

} else {

}

//
if (dependencies['purecss'].enabled) {

} else {

}

// react - error fix
if (dependencies['react-tap-event-plugin'].enabled) {

} else {

}

// react - ui - material
if (dependencies['react-toolbox'].enabled) {

} else {

}

// web - ui - material
if (dependencies['semantic-ui'].enabled) {

} else {

}

// vue - ui - material
if (dependencies['vuetify'].enabled) {

} else {

}

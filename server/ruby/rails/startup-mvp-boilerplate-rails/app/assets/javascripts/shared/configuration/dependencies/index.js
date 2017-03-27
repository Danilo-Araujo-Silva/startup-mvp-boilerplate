import properties from '../properties';

const dependencies = properties.get().dependencies;

// angular - ui - material
if (dependencies['@angular/material'].enabled) {
  let angularMaterial = require('./useable_stylesheets/angular_material.useable.scss');
  angularMaterial.use();
} else {

}

// web - utility - animation
if (dependencies['animate.css'].enabled) {
  let animateCSS = require('./useable_stylesheets/animate_css.useable.scss');
  animateCSS.use();
} else {

}

// react - ui - material
if (dependencies['ant-design'].enabled) {
  let antDesign = require('./useable_stylesheets/ant_design.useable.scss');
  antDesign.use();
} else {

}

// web - ui - material
if (dependencies['bulma'].enabled) {
  let bulma = require('./useable_stylesheets/bulma.useable.scss');
  bulma.use();
} else {

}

// web - ui - material
if (dependencies['flat-ui'].enabled) {
  let flatUI = require('./useable_stylesheets/flat_ui.useable.scss');
  flatUI.use();
} else {

}

// web - font - icons
if (dependencies['font-awesome'].enabled) {
  let fontAwesome = require('./useable_stylesheets/font_awesome.useable.scss');
  fontAwesome.use();
} else {

}

// web - utility - animation - hover
if (dependencies['hover.css'].enabled) {
  let hoverCSS = require('./useable_stylesheets/hover.useable.scss');
  hoverCSS.use();
} else {

}

// web - utility - multi
if (dependencies['jquery'].enabled) {
  let jQuery = require('jquery');
} else {

}

// web - ui - material
if (dependencies['material-components-web'].enabled) {
  let materialComponentsWeb = require('./useable_stylesheets/material_components_web.useable.scss');
  materialComponentsWeb.use();
} else {

}

// web - ui - material (deprecated, use material-components-web prefereably)
if (dependencies['material-design-lite'].enabled) {
  let materialDesignLite = require('./useable_stylesheets/material_design_lite.useable.scss');
  materialDesignLite.use();
} else {

}

// react - ui - material
if (dependencies['material-ui'].enabled) {
  let materialUI = require('./useable_stylesheets/material_ui.useable.scss');
  materialUI.use();
} else {

}

// web - ui - material
if (dependencies['materialize-css'].enabled) {
  let materializeCss = require('./useable_stylesheets/materialize_css.useable.scss');
  materializeCss.use();
} else {

}

// angular - ui - material
if (dependencies['primeng'].enabled) {
  let primeng = require('./useable_stylesheets/primeng.useable.scss');
  primeng.use();
} else {

}

//
if (dependencies['purecss'].enabled) {
  let pureCSS = require('./useable_stylesheets/purecss.useable.scss');
} else {

}

// react - error fix
if (dependencies['react-tap-event-plugin'].enabled) {
  let reactTapEventoPlugin = require('react-tap-event-plugin');
} else {

}

// react - ui - material
if (dependencies['react-toolbox'].enabled) {
  let reactToolbox = require('./useable_stylesheets/react_toolbox.useable.scss');
  reactToolbox.use();
} else {

}

// web - ui - material
if (dependencies['semantic-ui'].enabled) {
  let semanticUI = require('./useable_stylesheets/semantic_ui.useable.scss');
  semanticUI.use();
} else {

}

// vue - ui - material
if (dependencies['vuetify'].enabled) {
  let vuetify = require('./useable_stylesheets/vuetify.useable.scss');
  vuetify.use();
} else {

}

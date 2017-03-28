import properties from '../properties';

const dependencies = properties.get().dependencies;

function isEnabled(dependencyId) {
  if (dependencies && dependencies[dependencyId] && dependencies[dependencyId].enabled) {
    return true;
  }

  return false;
}

// angular - ui - material
if (isEnabled('@angular/material')) {
  let angularMaterialStyles = require('./useable_stylesheets/angular_material.useable.scss');
  angularMaterialStyles.use();
} else {

}

// web - utility - animation
if (isEnabled('animate.css')) {
  let animateCSSStyles = require('./useable_stylesheets/animate_css.useable.scss');
  animateCSSStyles.use();
} else {

}

// react - ui - material
if (isEnabled('ant-design')) {
  let antDesignStyles = require('./useable_stylesheets/ant_design.useable.scss');
  antDesignStyles.use();
} else {

}

// web - ui - material
if (isEnabled('bulma')) {
  let bulmaStyles = require('./useable_stylesheets/bulma.useable.scss');
  bulmaStyles.use();
} else {

}

// web - ui - material
if (isEnabled('flat-ui')) {
  let flatUIStyles = require('./useable_stylesheets/flat_ui.useable.scss');
  flatUIStyles.use();
} else {

}

// web - font - icons
if (isEnabled('font-awesome')) {
  let fontAwesomeStyles = require('./useable_stylesheets/font_awesome.useable.scss');
  fontAwesomeStyles.use();
} else {

}

// web - font - icons
if (isEnabled('font-material-design-icons')) {
  let materialDesignIconsStyles = require('./useable_stylesheets/font_material_design_icons.useable.scss');
  materialDesignIconsStyles.use();
} else {

}

// web - font - icons
if (isEnabled('font-roboto')) {
  let robotoFontStyles = require('./useable_stylesheets/font_roboto.useable.scss');
  robotoFontStyles.use();
} else {

}

// web - utility - animation - hover
if (isEnabled('hover.css')) {
  let hoverCSSStyles = require('./useable_stylesheets/hover.useable.scss');
  hoverCSSStyles.use();
} else {

}

// web - utility - multi
if (isEnabled('jquery')) {
  let jQuery = require('jquery/dist/jquery');
  window.$ = window.jquery = window.jQuery = global.$ = global.jquery = global.jQuery = jQuery;
} else {

}

// web - ui - material
if (isEnabled('material-components-web')) {
  let materialComponentsWebStyles = require('./useable_stylesheets/material_components_web.useable.scss');
  materialComponentsWebStyles.use();

  let materialComponentsWebJS = require('material-components-web/dist/material-components-web.js');
  materialComponentsWebJS.autoInit();
} else {

}

// web - ui - material (deprecated, use material-components-web prefereably)
if (isEnabled('material-design-lite')) {
  let materialDesignLiteStyles = require('./useable_stylesheets/material_design_lite.useable.scss');
  materialDesignLiteStyles.use();

  let materialDesignLiteJS = require('material-design-lite/material.js');
} else {

}

// react - ui - material
if (isEnabled('material-ui')) {
  let materialUIStyles = require('./useable_stylesheets/material_ui.useable.scss');
  materialUIStyles.use();
} else {

}

// web - ui - material
if (isEnabled('materialize-css')) {
  let materializeCssStyles = require('./useable_stylesheets/materialize_css.useable.scss');
  materializeCssStyles.use();

  require('materialize-css/dist/js/materialize.js');
} else {

}

// angular - ui - material
if (isEnabled('primeng')) {
  let primengStyles = require('./useable_stylesheets/primeng.useable.scss');
  primengStyles.use();
} else {

}

//
if (isEnabled('purecss')) {
  let pureCSSStyles = require('./useable_stylesheets/purecss.useable.scss');
  pureCSSStyles.use();
} else {

}

// react - error fix
if (isEnabled('react-tap-event-plugin')) {
  let reactTapEventoPlugin = require('react-tap-event-plugin');
  reactTapEventoPlugin();
} else {

}

// react - ui - material
if (isEnabled('react-toolbox')) {
  let reactToolboxStyles = require('./useable_stylesheets/react_toolbox.useable.scss');
  reactToolboxStyles.use();
} else {

}

// web - ui - material
// dependencies: jquery
if (isEnabled('semantic-ui')) {
  let semanticUIStyles = require('./useable_stylesheets/semantic_ui.useable.scss');
  semanticUIStyles.use();

  let semanticUIJS = require('semantic-ui/dist/semantic.js');
} else {

}

// utility - ui - positioning
if (isEnabled('tether')) {
  let tetherJS = require('tether/dist/js/tether.min.js');
  window.Tether = global.Tether = tetherJS;
}

// web - ui - material
// dependencies: jquery, tether
if (isEnabled('bootstrap')) {
  let bootstrapStyles = require('./useable_stylesheets/bootstrap.useable.scss');
  bootstrapStyles.use();

  let bootstrapJS = require('bootstrap/dist/js/bootstrap.js');
}

// web - ui - material
// dependencies: jquery
if (isEnabled('bootstrap-material-design')) {
  let bootstrapMaterialDesignStyles = require('./useable_stylesheets/bootstrap_material_design.useable.scss');
  bootstrapMaterialDesignStyles.use();

  require('bootstrap-material-design/dist/js/ripples.js');
  let bootstrapMaterialDesignJS = require('bootstrap-material-design/dist/js/material.js');
  $.material.init();
}


// vue - ui - material
if (isEnabled('vuetify')) {
  let vuetifyStyles = require('./useable_stylesheets/vuetify.useable.scss');
  vuetifyStyles.use();
} else {

}
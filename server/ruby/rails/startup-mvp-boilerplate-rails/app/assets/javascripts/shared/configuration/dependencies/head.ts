import properties from '../properties';

// web - font - icons
if (properties.isDependencyEnabled('font-awesome')) {
  let fontAwesomeStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/font_family/_font_awesome.scss');
  fontAwesomeStyles.use();
} else {

}

// web - font - icons
if (properties.isDependencyEnabled('font-material-icons')) {
  let materialDesignIconsStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/font_family/_material_icons.scss');
  materialDesignIconsStyles.use();
} else {

}

// web - font - icons
if (properties.isDependencyEnabled('font-roboto')) {
  let robotoFontStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/font_family/_roboto.scss');
  robotoFontStyles.use();
} else {

}

// web - utility - multi
if (properties.isDependencyEnabled('jquery')) {
  let jQuery = require('jquery/dist/jquery');
  (<any>window).$ = (<any>window).jquery = (<any>window).jQuery
    = (<any>global).$ = (<any>global).jquery = (<any>global).jquery
    = jQuery;
} else {

}

// rails
// Unobtrusive scripting adapter, necessary for routes.
if (properties.isDependencyEnabled('jquery-ujs')) {
  let jqueryUJS = require('jquery-ujs');
} else {

}

// web - ui - material
if (properties.isDependencyEnabled('material-components-web')) {
  let materialComponentsWebStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/ui/material/_material_components_web.scss');
  materialComponentsWebStyles.use();

  let materialComponentsWebJS = require('material-components-web/dist/material-components-web.js');
  materialComponentsWebJS.autoInit();
} else {

}

// rails
// Unobtrusive scripting adapter, necessary for routes.
if (properties.isDependencyEnabled('rails-ujs')) {
  let railsUJS = require('rails-ujs');
} else {

}

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('semantic-ui')) {
  let semanticUIStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/ui/material/_semantic_ui.scss');
  semanticUIStyles.use();

  let semanticUIJS = require('semantic-ui/dist/semantic.js');
} else {

}

// utility - ui - positioning
if (properties.isDependencyEnabled('tether')) {
  let tetherJS = require('tether/dist/js/tether.min.js');
  (<any>window).Tether = (<any>global).Tether = tetherJS;
}

// rails
// Rails dependency.
if (properties.isDependencyEnabled('turbolinks')) {
  let turbolinks = require('turbolinks');
}

// web - ui - material
// dependencies: jquery, tether
if (properties.isDependencyEnabled('bootstrap')) {
  let bootstrapStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/ui/material/_bootstrap.scss');
  bootstrapStyles.use();

  let bootstrapJS = require('bootstrap/dist/js/bootstrap.js');
}

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('bootstrap-material-design')) {
  let bootstrapMaterialDesignStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/ui/material/_bootstrap_material_design.scss');
  bootstrapMaterialDesignStyles.use();

  require('bootstrap-material-design/dist/js/ripples.js');
  let bootstrapMaterialDesignJS = require('bootstrap-material-design/dist/js/material.js');
  (<any>window).$.material.init();
}

let headCSS = require('!style-loader/useable!css-loader!sass-loader!shared/_head.scss');
headCSS.use();

import properties from '../properties';

let bodyCSS = require('!style-loader/useable!css-loader!sass-loader!shared/_body.scss');
bodyCSS.use();

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

// rails
// Rails dependency.
if (properties.isDependencyEnabled('turbolinks')) {
  let turbolinks = require('turbolinks');
}



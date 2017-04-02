import properties from '../properties';

// web - utility - multi
if (properties.isDependencyEnabled('jquery')) {
  let jQuery = require('jquery/dist/jquery');
  (<any>window).$ = (<any>window).jquery = (<any>window).jQuery
    = (<any>global).$ = (<any>global).jquery = (<any>global).jquery
    = jQuery;
} else {

}

// utility - ui - positioning
if (properties.isDependencyEnabled('tether')) {
  let tetherJS = require('tether/dist/js/tether.min.js');
  (<any>window).Tether = (<any>global).Tether = tetherJS;
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

// web - ui - material
// dependencies: jquery
if (properties.isDependencyEnabled('semantic-ui')) {
  let semanticUIStyles = require('!style-loader/useable!css-loader!sass-loader!shared/dependencies/ui/material/_semantic_ui.scss');
  semanticUIStyles.use();

  let semanticUIJS = require('semantic-ui/dist/semantic.js');
} else {

}

let headCSS = require('!style-loader/useable!css-loader!sass-loader!shared/_head.scss');
headCSS.use();

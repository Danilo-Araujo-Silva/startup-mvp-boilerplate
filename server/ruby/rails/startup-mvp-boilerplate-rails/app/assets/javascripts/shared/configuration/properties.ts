class Properties {

  private properties: any;

  constructor() {
    this.properties = {
      dependencies: {
        '@angular/material' : {
          enabled: false,
        },
        'animate.css': {
          enabled: false,
        },
        'ant-design': {
          enabled: false,
        },
        'bulma': {
          enabled: false,
        },
        'flat-ui': {
          enabled: false,
        },
        'font-awesome': {
          enabled: true,
        },
        'font-material-design-icons': {
          enabled: true,
        },
        'font-roboto': {
          enabled: true,
        },
        'hover.css': {
          enabled: false,
        },
        'jquery': {
          enabled: true,
        },
        'material-components-web': {
          enabled: false,
        },
        'material-design-lite': {
          enabled: false,
        },
        'material-ui': {
          enabled: false,
        },
        'materialize-css': {
          enabled: false,
        },
        'primeng' : {
          enabled: false,
        },
        'purecss' : {
          enabled: false,
        },
        'react-tap-event-plugin': {
          enabled: false,
        },
        'react-toolbox': {
          enabled: false,
        },
        'semantic-ui': {
          enabled: true,
        },
        'vuetify': {
          enabled: false,
        },
      },
      environment: {
        development: {
          enabled: false,
        },
        homologation: {
          enabled: false,
        },
        production: {
          enabled: false,
        },
        test: {
          enabled: false,
        }
      },
      platform: {
        angular: {
          enabled: false,
        },
        react: {
          enabled: true,
        },
        vue: {
          enabled: false,
        },
      }
    };
  }

  public get() {
    return this.properties;
  }
}

const properties = new Properties();

export default properties;
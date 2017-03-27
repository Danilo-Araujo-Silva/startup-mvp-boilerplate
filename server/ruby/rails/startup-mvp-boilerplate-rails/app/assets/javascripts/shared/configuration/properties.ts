class Properties {

  private properties: any;

  constructor() {
    this.properties = {
      dependencies: {
        utility: {
          'jquery': {
            enabled: false,
          },
          'react-tap-event-plugin': {
            enabled: false,
          },
        },
        ui: {
          'angular': {
            'angular-material' : {
              enabled: false
            },
            'primeng' : {
              enabled: false
            },
          },
          'react': {
            'ant-design': {
              enabled: false,
            },
            'material-ui': {
              enabled: false,
            },
            'react-toolbox': {
              enabled: false,
            },
          },
          'vue': {
            'vuetify': {
              enabled: false,
            },
          },
          'web': {
            'material-components-web': {
              enabled: false,
            },
            'material-design-lite': {
              enabled: false,
            },
            'materialize-css': {
              enabled: true,
            },
            'semantic-ui': {
              enabled: false,
            },
          },
        }
      },
      environment: {
        development: {
          enabled: false,
        },
        homologation: {
          enabled: false,
        },
        production: {
          enabled: false
        },
        test: {
          enabled: false
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
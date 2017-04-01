const arrayKeysToString = function(keys: Array<string>) {
  return keys.map(key => {
    return `["${key.escapeDoubleQuotes()}"]`
  }).join('');
};

const exists = function(object: Object, keys: Array<string>) {
  try {
    if (object == null || keys == null) {
      return false;
    }

    get(object, keys);

    return true;
  } catch (error) {
    return false;
  }
};

const get = function(object: Object, keys: Array<string>) {
  if (object == null || keys == null) {
    return;
  }
  const keysString = arrayKeysToString(keys);

  let finalKey = keysString;
  if (keysString == null) {
    finalKey = '';
  } else if (!keysString.startsWith('[')) {
    finalKey = `.${finalKey}`;
  }

  return eval(`object${finalKey}`);
};

const set = function(object: Object, keys: Array<string>, value: any) {
  if (object == null || keys == null) {
    return;
  }

  let keysLength = keys.length;

  if (keysLength == 0) {
    return;
  } else {
    let firstKey = keys[0];
    let firstValue = object[firstKey];

    if (firstValue == null) {
      object[firstKey] = {};
    } else if (typeof firstValue === 'string') {
      delete object[firstKey];
      object[firstKey] = {};
    }

    if (keysLength == 1) {
      object[firstKey] = value;

      return;
    } else {
      set(object[firstKey], keys.slice(1, keysLength), value);
    }
  }
};

class Properties {

  public path: any;

  public properties: any;

  constructor() {
    this.path = require('path');

    this.properties = {
      constants: {
        // Only the root route is manually setted.
        router: {
          relative: {
            '/': '../../../../../'
          },
          absolute: {
            '/': null // will be replaced.
          }
        }
      },
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
        'bootstrap': {
          enabled: true,
        },
        'bootstrap-material-design': {
          enabled: true,
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
        'font-material-icons': {
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
        'jquery-ujs': {
          enabled: true,
        },
        'material-components-web': {
          enabled: true,
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
        'primeng': {
          enabled: false,
        },
        'purecss': {
          enabled: false,
        },
        'rails-ujs': {
          enabled: false,
        },
        'react-tap-event-plugin': {
          enabled: false,
        },
        'react-toolbox': {
          enabled: false,
        },
        'semantic-ui': {
          enabled: false,
        },
        'tether': {
          enabled: false,
        },
        'turbolinks': {
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

    this.set(
      ['constants', 'router', 'absolute', '/'],
      this.path.resolve(
        __dirname,
        this.get(['constants', 'router', 'relative', '/'])
      )
    );
  }

  public get(keys: Array<string>): any {
    return get(this.properties, keys);
  }

  public exists(keys: Array<string>): boolean {
    return exists(this.properties, keys);
  }

  public getAbsoluteRoute(keys: Array<string>): string {
    const root = get(this.properties, ['constants', 'router', 'absolute']);

    return this.path.resolve.apply(this.path, [root, ...keys]);
  }

  public getRelativeRoute(keys: Array<string>): string {
    return get(this.properties, ['constants', 'router', 'relative', ...keys]);
  }

  public getDependencies(): any {
    return get(this.properties, ['dependencies']);
  }

  public getDependency(keys: Array<string>): any {
    return get(this.properties, ['dependencies', ...keys]);
  }

  public isDependencyEnabled(dependency: string): boolean {
    if (get(this.properties, ['dependencies', dependency, 'enabled'])) {
      return true;
    }

    return false;
  }

  private set(keys: Array<string>, value: any) {
    set(this.properties, keys, value);
  }
}

const properties = new Properties();

export default properties;
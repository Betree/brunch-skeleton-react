// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react'],
    plugins: ['transform-decorators-legacy']
  },
  postcss: {
    modules: true
  }
};


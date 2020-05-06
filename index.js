'use strict';

module.exports = {
  name: 'ember-tui-editor',

  options: {
    babel: {
      plugins: [ require('ember-auto-import/babel-plugin') ]
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/codemirror/lib/codemirror.css');
    app.import('node_modules/@toast-ui/editor/dist/toastui-editor.css');
    app.import('node_modules/@toast-ui/editor/dist/toastui-editor-viewer.css');
  }
};

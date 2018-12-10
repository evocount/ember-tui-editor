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
    app.import('node_modules/tui-editor/dist/tui-editor.css');
    app.import('node_modules/tui-editor/dist/tui-editor-contents.css');
    app.import('node_modules/highlight.js/styles/github.css');
    app.import('node_modules/tui-editor/dist/tui-editor.png', { destDir: '/assets' });
    app.import('node_modules/tui-editor/dist/tui-editor-2x.png', { destDir: '/assets' });
  }
};

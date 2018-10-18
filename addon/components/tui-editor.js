import Component from '@ember/component';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import { assign } from '@ember/polyfills';

import layout from '../templates/components/tui-editor';
import Editor from 'tui-editor';

export default Component.extend({
  layout,

  value: '',

  // here we use a syntax like <property>:<method>:<tui option> to update such property (optional)>
  tuiOptions: Object.freeze([
    'previewStyle:changePreviewStyle', 'editType:changeMode:initialEditType', 'height:height', 'minHeight:minHeight',
    'language', 'useDefaultHTMLSanitizer', 'useCommandShortcut', 'codeBlockLanguages', 'usageStatistics',
    'toolbarItems', 'hideModeSwitch', 'viewer', 'value:setValue:initialValue'
  ]),

  // gathers all the options to initialize TUI editor, respecting tuiOptions syntax
  options: computed('tuiOptions.[]', function() {
    let options = {};

    this.get('tuiOptions').forEach((o) => {
      let [optionName, ,tuiOption] = o.split(':');
      tuiOption = tuiOption ? tuiOption : optionName;
      let value = this.get(optionName);

      if (value !== undefined) {
        options[tuiOption] = value;
      }
    });

    return options;
  }),

  didInsertElement() {
    this._super(...arguments);
    this.setupEditor();
    this.addObservers();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeObservers();
  },

  setupEditor() {
    let options = this.get('options');

    let editor = Editor.factory(assign(options, {
      el: this.element,
      events: {
        load: (...args) => this.eventInvoked('onLoad', ...args),
        change: (...args) => this.eventInvoked('onChange', this.editor.getValue(), ...args),
        stateChange: (...args) => this.eventInvoked('onStateChange', ...args),
        focus: (...args) => this.eventInvoked('onFocus', ...args),
        blur: (...args) => this.eventInvoked('onBlur', ...args)
      }
    }));

    this.set('editor', editor);
  },

  // tests if an `actionName` function exists and calls it with the arguments if so
  eventInvoked(actionName, ...args) {
    if (this.get(actionName)) {
      this.get(actionName)(...args);
    }
  },

  addObservers() {
    this._observers = {};
    this.get('tuiOptions').forEach((o) => {
      let [optionName, tuiMethod] = o.split(':');

      if (tuiMethod) {
        this._observers[optionName] = function() {
          let value = this.get(optionName);

          // `value` is a special case because using `setValue`
          // moves the current cursor position so we need to avoid calling it
          // only call it when the editor value is different from the new value we got
          if (optionName === 'value' && this.editor.getValue) {
            let editorValue = this.editor.getValue();
            if (editorValue !== value) {
              this.editor.setValue(value);
            }
          } else {
            assert(`Editor instance should be have a function '${tuiMethod}' but found ${this.editor[tuiMethod]} instead.`, !!this.editor[tuiMethod]);
            this.editor[tuiMethod].call(this.editor, value);
          }
        };

        this.addObserver(optionName, this, this._observers[optionName]);
      }
    });
  },

  removeObservers() {
    if (this._observers) {
      this.get('tuiOptions').forEach((o) => {
        let [optionName] = o.split(':');

        this.removeObserver(optionName, this, this._observers[optionName]);
        delete this._observers[optionName];
      });
    }
  }
});

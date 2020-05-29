import Component from '@ember/component';
import { computed, action } from '@ember/object';
import { assert } from '@ember/debug';
import { assign } from '@ember/polyfills';
import { tagName, layout } from '@ember-decorators/component';

import template from 'ember-tui-editor/templates/components/tui-editor';
import importLocale from 'ember-tui-editor/utils/load-locale-file';

@tagName('')
@layout(template)
class TuiEditor extends Component {

  // here we use a syntax like <property>:<method>:<tui option> to update such property (optional)>
  tuiOptions = [
    'previewStyle:changePreviewStyle', 'editType:changeMode:initialEditType', 'height:height', 'minHeight:minHeight',
    'language', 'useDefaultHTMLSanitizer', 'useCommandShortcut', 'usageStatistics',
    'toolbarItems', 'hideModeSwitch', 'viewer', 'value:setMarkdown:initialValue', 'hooks'
  ];

  // gathers all the options to initialize TUI editor, respecting tuiOptions syntax
  @computed('tuiOptions.[]')
  get options() {
    let options = {};

    for (let o of this.tuiOptions) {
      let [optionName, ,tuiOption] = o.split(':');
      tuiOption = tuiOption ? tuiOption : optionName;
      let value = this.get(optionName);

      if (value !== undefined) {
        options[tuiOption] = value;
      }
    }

    return options;
  }

  @action
  async setupEditor(element) {
    await importLocale(this.language);
    let module = await import('@toast-ui/editor');

    let editor = module.default.factory(
      assign(this.options, {
        el: element,
        events: {
          load: (...args) => this.eventInvoked('onLoad', ...args),
          change: (...args) => this.eventInvoked('onChange', this.editor.getMarkdown(), ...args),
          stateChange: (...args) => this.eventInvoked('onStateChange', ...args),
          focus: (...args) => this.eventInvoked('onFocus', ...args),
          blur: (...args) => this.eventInvoked('onBlur', ...args)
        }
      })
    );

    this.set('editor', editor);

    this.addObservers();
  }

  // tests if an `actionName` function exists and calls it with the arguments if so
  eventInvoked(actionName, ...args) {
    if (this.get(actionName)) {
      this.get(actionName)(...args);
    }
  }

  addObservers() {
    this._observers = {};

    for (let o of this.tuiOptions) {
      let [optionName, tuiMethod] = o.split(':');

      if (tuiMethod) {
        this._observers[optionName] = function() {
          let value = this.get(optionName);

          // `value` is a special case because using `setValue`
          // moves the current cursor position so we need to avoid calling it
          // only call it when the editor value is different from the new value we got
          if (optionName === 'value' && this.editor.getMarkdown) {
            let editorValue = this.editor.getMarkdown();
            if (editorValue !== value) {
              this.editor.setMarkdown(value, false);
            }
          } else {
            assert(`Editor instance should be have a function '${tuiMethod}' but found ${this.editor[tuiMethod]} instead.`, !!this.editor[tuiMethod]);
            this.editor[tuiMethod].call(this.editor, value);
          }
        };

        // eslint-disable-next-line ember/no-observers
        this.addObserver(optionName, this, this._observers[optionName]);
      }
    }
  }

  @action
  destroyEditor() {
    this.removeObservers();
  }

  removeObservers() {
    if (this._observers) {
      for (let o of this.tuiOptions) {
        let [optionName] = o.split(':');

        if (this._observers[optionName]) {
          this.removeObserver(optionName, this, this._observers[optionName]);
          delete this._observers[optionName];
        }
      }
    }
  }
}

export default TuiEditor;

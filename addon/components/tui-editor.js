import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { assign } from '@ember/polyfills';

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import importLocale from 'ember-tui-editor/utils/load-locale-file';

export default class TuiEditor extends Component {
  @tracked editor = null;

  // here we use a syntax like <property>:<method>:<tui option> to update such property (optional)>
  tuiOptions = [
    'previewStyle:changePreviewStyle',
    'editType:changeMode:initialEditType',
    'height:setHeight',
    'minHeight:setMinHeight',
    'language',
    'useCommandShortcut',
    'usageStatistics',
    'toolbarItems',
    'hideModeSwitch',
    'viewer',
    'value:setMarkdown:initialValue',
    'hooks',
    'plugins',
    'previewHighlight',
    'extendedAutolinks',
    'customConvertor',
    'placeholder:setPlaceholder',
    'linkAttributes',
    'customHTMLRenderer',
    'customMarkdownRenderer',
    'referenceDefinition',
    'customHTMLSanitizer',
    'frontMatter',
    'widgetRules',
    'theme',
  ];

  // splits the options that have a tuiMethod to be used on the template
  // with the {{did-update}} helper
  get tuiOptionsDescriptors() {
    return this.tuiOptions
      .map((d) => d.split(':'))
      .filter(([, tuiMethod]) => !!tuiMethod);
  }

  // gathers all the options to initialize TUI editor, respecting tuiOptions syntax
  get options() {
    let options = {};

    for (let o of this.tuiOptions) {
      let [optionName, , tuiOption] = o.split(':');
      tuiOption = tuiOption ? tuiOption : optionName;
      let value = this.args[optionName];

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

    this.editor = module.default.factory(
      assign(this.options, {
        el: element,
        events: {
          load: (...args) => this.eventInvoked('onLoad', ...args),
          change: (...args) =>
            this.eventInvoked('onChange', this.editor?.getMarkdown(), ...args),
          caretChange: (...args) => this.eventInvoked('onCaretChange', ...args),
          focus: (...args) => this.eventInvoked('onFocus', ...args),
          blur: (...args) => this.eventInvoked('onBlur', ...args),
        },
      })
    );

    this.eventInvoked('onInit', this.editor);
  }

  @action
  teardownEditor() {
    this.editor?.destroy();
  }

  // tests if an `actionName` function exists and calls it with the arguments if so
  eventInvoked(actionName, ...args) {
    this.args[actionName]?.(...args);
  }

  @action
  updateOption([optionName, tuiMethod], [value]) {
    // `value` is a special case because using `setValue`
    // moves the current cursor position so we need to avoid calling it
    // only call it when the editor value is different from the new value we got
    if (optionName === 'value' && this.editor.getMarkdown) {
      let editorValue = this.editor.getMarkdown();
      if (editorValue !== value) {
        this.editor.setMarkdown(value, false);
      }
    } else {
      assert(
        `Editor instance should be have a function '${tuiMethod}' but found ${this.editor[tuiMethod]} instead.`,
        !!this.editor[tuiMethod]
      );
      this.editor[tuiMethod].call(this.editor, value);
    }
  }
}

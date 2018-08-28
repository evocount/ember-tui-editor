ember-tui-editor
==============================================================================

Use [TOAST UI Editor](https://github.com/nhnent/tui.editor) WYSIWYG markdown editor in Ember.

Installation
------------------------------------------------------------------------------

```
ember install ember-tui-editor
```


Usage
------------------------------------------------------------------------------

```hbs
{{tui-editor value="# Hello World" change=(action 'onChange')}}
```


### Properties

For a list of possible values have a look at the [TOAST UI docs](https://nhnent.github.io/tui.editor/api/latest/ToastUIEditor.html).

| Property | Is Bound? | Default |
| --- | :---: | --- |
| `height` | x | `300px` |
| `minHeight` | x | `200px` |
| `value` | x |  |
| `previewStyle` | x | `tab` |
| `editType` | x | `markdown` |
| `language` |  | `en_US` |
| `useCommandShortcut` |   | `true` |
| `useDefaultHTMLSanitizer` |   | `true` |
| `usageStatistics` |   | `false` |
| `toolbarItems` |   | `['heading', 'bold', 'italic', 'strike', 'divider', 'hr', 'quote', 'divider', 'ul', 'ol', 'task', 'indent', 'outdent', 'divider', 'table', 'image', 'link', 'divider', 'code', 'codeblock']` |
| `hideModeSwitch` |   | `false` |


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-tui-editor`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

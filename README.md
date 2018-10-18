# ember-tui-editor

[TOAST UI](https://github.com/nhnent/tui.editor) WYSIWYG markdown editor for Ember. ([Demo](https://evocount.github.io/ember-tui-editor/))

## Installation


```
ember install ember-tui-editor
```


## Usage

```hbs
{{tui-editor value="# Hello World" change=(action 'onChange')}}
```


### Properties

For a list of possible options and their defaults have a look at the [TOAST UI docs](https://nhnent.github.io/tui.editor/api/latest/ToastUIEditor.html#ToastUIEditor).

You can pass the properties as a hash to `options` using their original names just as you would when using TUI editor directly. Alternatively set them directly on the component. The later version has the advantage that some properties are bound. However mind the different naming (see table).

The following table lists some special properties (bound, different name) only:

| Property | TUI name | Is Bound? | Notes |
| --- | --- | :---: | --- | --- |
| `height` |  | x |   |
| `minHeight` |  | x |   |
| `value` | `initialValue` | x | Changes do not propagate to `value` ("data down, action up") |
| `previewStyle` |  | x |   |
| `editType` | `initialEditType` | x |   |
| `viewer` |   |   | Do not show editor but markdown viewer only |


### Actions

| Event | Description |
| --- | --- |
| `onLoad` | Emitted when editor is fully loaded |
| `onChange` | Emitted when content changed |
| `onStateChange` | Emitted when format changed by cursor position |
| `onFocus` | Emitted when editor gets focus |
| `onBlur` | Emitted when editor looses focus |

## Contributing

### Installation

* `git clone git@github.com:evocount/ember-tui-editor.git`
* `cd ember-tui-editor`
* `npm install`

### Linting

* `npm run lint:hbs`
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

## License

This project is licensed under the [MIT License](LICENSE.md).

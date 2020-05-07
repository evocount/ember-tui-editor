[![npm version](https://badge.fury.io/js/ember-tui-editor.svg)](https://badge.fury.io/js/ember-tui-editor)

# ember-tui-editor

[TOAST UI](https://github.com/nhnent/tui.editor) WYSIWYG markdown editor for Ember. ([Demo](https://evocount.github.io/ember-tui-editor/))

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-tui-editor
```

## Usage

```hbs
<TuiEditor @value="# Hello World" @onChange={{action 'onChange'}} />
```

### Properties

For a list of possible options and their defaults have a look at the [TOAST UI docs](https://nhn.github.io/tui.editor/api/latest/ToastUIEditor.html#ToastUIEditor).

You can pass the properties as a hash to `options` using their original names just as you would when using TUI editor directly. Alternatively set them directly on the component. The later version has the advantage that some properties are bound. However mind the different naming (see table).

The following table lists some special properties (bound, different name) only:

| Property       | TUI name          | Is Bound? | Notes                                                        |
| -------------- | ----------------- | :-------: | ------------------------------------------------------------ |
| `height`       |                   |     x     |                                                              |
| `minHeight`    |                   |     x     |                                                              |
| `value`        | `initialValue`    |     x     | Changes do not propagate to `value` ("data down, action up") |
| `previewStyle` |                   |     x     |                                                              |
| `editType`     | `initialEditType` |     x     |                                                              |
| `viewer`       |                   |           | Do not show editor but markdown viewer only                  |

### Actions

| Event           | Description                                    |
| --------------- | ---------------------------------------------- |
| `onLoad`        | Emitted when editor is fully loaded            |
| `onChange`      | Emitted when content changed                   |
| `onStateChange` | Emitted when format changed by cursor position |
| `onFocus`       | Emitted when editor gets focus                 |
| `onBlur`        | Emitted when editor looses focus               |

### i18n

To avoid having to bundling every locale, a blueprint is provided to aid with dynamic importing of tui editor locales:

`ember generate tui-editor-locale-importer fr-FR de en-US`

will generate a helper named `tui-editor-locale` to be used like this:

```hbs
{{#let (await (tui-editor-locale "de")) as |lang|}}
  {{#if lang}}
    <TuiEditor @value="# Hello World" @onChange={{action 'onChange'}} @language="de" />
  {{/if}}
{{/let}}
```

For a list of all available locales check [here](https://github.com/nhn/tui.editor/blob/master/apps/editor/docs/i18n.md#supported-languages).

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

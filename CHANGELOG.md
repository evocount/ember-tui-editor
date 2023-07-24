# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.10] - 2023-07-24

### Fixed

- Fix embroider compatibility ([#495](https://github.com/evocount/ember-tui-editor/pull/495))

## [3.0.9] - 2023-07-07

### Changed

- Remove usage of `assign` polyfill ([#494](https://github.com/evocount/ember-tui-editor/pull/494))


## [3.0.8] - 2023-07-07

- Accidental release

## [3.0.7] - 2023-07-06

### Changed

- Support all lowercase `@language` argument ([f7751e7](https://github.com/evocount/ember-tui-editor/commit/f7751e7cc10f42656a32755ec35366214648c221))

## [3.0.6] - 2023-07-04

### Fixed

- Fix `@language` argument ([f7751e7](https://github.com/evocount/ember-tui-editor/commit/f7751e7cc10f42656a32755ec35366214648c221))

### Changed

- Update `@toast-ui/editor` from `3.2.1` to `3.2.2`  ([3419d38](https://github.com/evocount/ember-tui-editor/commit/3419d387fa6fa04839fdd24b418d3252e2701afa))

## [3.0.5] - 2022-09-30

### Fixed

- Update `@toast-ui/editor` from `3.2.0` to `3.2.1`  ([#484](https://github.com/evocount/ember-tui-editor/pull/484))

## [3.0.4] - 2022-08-16

### Fixed

- Fix TuiEditor component in viewer mode ([#477](https://github.com/evocount/ember-tui-editor/pull/482))

## [3.0.3] - 2022-06-14

### Fixed

- Make test helper work on "wysiwyg" mode

## [3.0.2] - 2022-06-08

### Added

- Support for custom test helpers (see [#477](https://github.com/evocount/ember-tui-editor/issues/477#issuecomment-1149366887))

## [3.0.1] - 2021-11-09

### Changed

- Relax dependency on `@ember/render-modifiers` to allow both v1 and v2

## [3.0.0] - 2021-07-28

### Changed

- `@linkAttribute` argument renamed to `@linkAttributes`
- `@onStateChange` action argument renamed to `@onCaretChange`
- `@toolbarItems` no longer uses a "divider" item in the array. Instead pass in multiple arrays, and they will be divided in the UI.

### Added

- new `@theme` argument
- new `@customMarkdownRenderer` argument
- new `@widgetRules` argument
- new `@onInit` action that provides the underlying "editor" instance to make more advanced operations

### Removed

- dropped support for IE 11
- `@useDefaultHTMLSanitizer` argument was removed

## [2.0.0] - 2021-01-23

### Changed

- Expose new TUI editor options
- Allow customization of editor element
- Use Glimmer component
- Dependency updates

## [1.1.0] - 2020-06-02

### Changed

- Allow passing attributes to editor element
- Expose `plugins` option, to allow using plugins

### Changed

- Dependency updates

## [1.0.0] - 2020-05-29

### Changed

- Update to tui-editor v2

### Changed

- Dependency updates

## [0.1.6] - 2019-12-03

### Fixed

- Only remove existing observers.

### Changed

- Dependency updates.

## [0.1.5] - 2019-10-01

### Changed

- Dependency updates.

## [0.1.4] - 2019-07-17

### Changed

- Dependency updates.

## [0.1.3] - 2019-06-16

### Changed

- Dependency updates.

## [0.1.2] - 2019-04-13

### Changed

- Dependency updates.

## [0.1.1] - 2019-02-24

### Changed

- Dependency updates.

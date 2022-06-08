# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

N/A

## 2.0.0 - 2021-11-23

[**Full diff**](https://github.com/mrahhal/css-theming/compare/v1.5.0...v2.0.0)

### Fixed

- Pick up text-color theme prop if it exists before trying to set default ([#27](https://github.com/mrahhal/css-theming/pull/27) by [@mrahhal](https://github.com/mrahhal))

### Added

- Set css color-scheme based on current theme brightness ([#20](https://github.com/mrahhal/css-theming/pull/20) by [@mrahhal](https://github.com/mrahhal))
- Allow configuring color text lightness scaling and update default scaling in dark themes ([#25](https://github.com/mrahhal/css-theming/pull/25) by [@mrahhal](https://github.com/mrahhal))
- Add use-colors theme config ([#32](https://github.com/mrahhal/css-theming/pull/32) by [@mrahhal](https://github.com/mrahhal))

### Changed

- Flip swatches in dark themes to make them go lighter with elevation ([#23](https://github.com/mrahhal/css-theming/pull/23) by [@mrahhal](https://github.com/mrahhal))
- Change default category's applied at to be the root element (html) ([#24](https://github.com/mrahhal/css-theming/pull/24) by [@mrahhal](https://github.com/mrahhal))
- Remove $fg-target-[light|dark] and auto compute them if not overriden in theme ([#30](https://github.com/mrahhal/css-theming/pull/30) by [@mrahhal](https://github.com/mrahhal))
- Rename functions/mixins to a more consistent naming ([#31](https://github.com/mrahhal/css-theming/pull/31) by [@mrahhal](https://github.com/mrahhal))
- Remove and update some default colors ([#33](https://github.com/mrahhal/css-theming/pull/33) by [@mrahhal](https://github.com/mrahhal))
- Change default bg-input vars ([#34](https://github.com/mrahhal/css-theming/pull/34) by [@mrahhal](https://github.com/mrahhal))
- Update default text-color ([#36](https://github.com/mrahhal/css-theming/pull/36) by [@mrahhal](https://github.com/mrahhal))

### Removed

- Remove deprecated `--text-color-raw` ([#21](https://github.com/mrahhal/css-theming/pull/21) by [@mrahhal](https://github.com/mrahhal))

## 1.5.0

[**Full diff**](https://github.com/mrahhal/css-theming/compare/v1.4.0...v1.5.0)

- Allow using themes-apply inside a selector ([#16](https://github.com/mrahhal/css-theming/issues/16))
- Compute rgb variables for fgs too ([#15](https://github.com/mrahhal/css-theming/issues/15))

## 1.4.0

- Detect user preferred brightness even without using ThemeStorage ([#14](https://github.com/mrahhal/css-theming/issues/14))
- `--text-color-rgb` added instead of `--text-color-raw`. `--text-color-raw` is deprecated
- Font is now unquoted properly. Wrap your font values (in `ct-font` or the `font` prop on a theme) with quotes, just like a normal string.

## 1.3.0

- Produce both umd and es modules

## 1.2.0

- Fix default font variable problem ([#11](https://github.com/mrahhal/css-theming/issues/11))
- Added a `--bg-input` variable, applied by default to various inputs ([#3](https://github.com/mrahhal/css-theming/issues/3))
- Select default theme in response to preferred system theme when using storage ([#6](https://github.com/mrahhal/css-theming/issues/6))

## 1.1.1

- Fix theme related names variables.

## 1.1.0

- css-theming now uses the new [sass module system](https://sass-lang.com/blog/the-module-system-is-launched) internally. Consuming libraries are unaffected as long as you use dart-sass >= 1.23. If your app also uses the new module system, check basic-scss-module-system sample. ([#4](https://github.com/mrahhal/css-theming/issues/4))
- Use scale instead of lighten/darken ([#2](https://github.com/mrahhal/css-theming/issues/2))
- Add "replace" option when customizing color maps ([#7](https://github.com/mrahhal/css-theming/issues/7))
- Provide rgb variables for colors ([#8](https://github.com/mrahhal/css-theming/issues/8))
- Allow percentages from 100% to 200% for color swatches ([#10](https://github.com/mrahhal/css-theming/issues/10))
- Implement simple localstorage theme storage ([#1](https://github.com/mrahhal/css-theming/issues/1))

## 1.0.0

Initial release

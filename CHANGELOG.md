# Changelog

## 1.3.0

- Produce both umd and es modules.

## 1.2.0

- Fix default font variable problem ([#11](https://github.com/mrahhal/css-theming/issues/11))
- Added a `--bg-input` variable, applied by default to various inputs ([#3](https://github.com/mrahhal/css-theming/issues/3))
- Select default theme in response to preferred system theme when using storage ([#6](https://github.com/mrahhal/css-theming/issues/6))

## 1.1.1

- Fix theme related names variables

## 1.1.0

- css-theming now uses the new [sass module system](https://sass-lang.com/blog/the-module-system-is-launched) internally. Consuming libraries are unaffected as long as you use dart-sass >= 1.23. If your app also uses the new module system, check basic-scss-module-system sample. ([#4](https://github.com/mrahhal/css-theming/issues/4))
- Use scale instead of lighten/darken ([#2](https://github.com/mrahhal/css-theming/issues/2))
- Add "replace" option when customizing color maps ([#7](https://github.com/mrahhal/css-theming/issues/7))
- Provide rgb variables for colors ([#8](https://github.com/mrahhal/css-theming/issues/8))
- Allow percentages from 100% to 200% for color swatches ([#10](https://github.com/mrahhal/css-theming/issues/10))
- Implement simple localstorage theme storage ([#1](https://github.com/mrahhal/css-theming/issues/1))

## 1.0.0

Initial release.

# CSS Theming

[![npm](https://img.shields.io/npm/v/css-theming.svg)](https://www.npmjs.com/package/css-theming)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A platform for CSS theming.

Uses modern CSS and SCSS. Contrast of computed colors is at least AA compatible by default.

![niai](https://raw.githubusercontent.com/mrahhal/css-theming/master/images/niai.gif)

<p align="center">from https://niai.mrahhal.net</p>

## At a glance

- Themes and theme category management
- Auto detects user's system preference and activates the appropriate theme
- Colors and their swatches automatically computed for light/dark themes
- Auto computation of rgb variables for colors (provided as css variables for ease of use)
- Foregrounds, backgrounds, borders
- Support for icons/svgs
- Programmatic access

## Installation & Setup

[Check this document](Setup.md).

## Course

Please consider buying the course at educative.io here: https://www.educative.io/courses/css-theming-for-professionals

It contains a deep dive into the problems involved with creating themes and their solutions, and is the backbone behind css-theming.

## Development

[DEVELOPMENT.md](DEVELOPMENT.md)

## Samples

The [samples](./samples) folder contain several samples that show case some of the use cases. They're written in Vue so that we can focus on the theming aspects.

To run any sample app, run the following inside its folder:

```
npm i
npm start
```

In any sample app, hit "t" on the keyboard to flip between the 2 main themes and see instant changes.

## Apps using css-theming

- https://niai.mrahhal.net
- https://lapisapp.com
- https://github.com/maezzedine/Outlook

## Thanks

- @rubix-labs: I worked on most of this as part of my job here.
- @sayache: Graphic, UX and UI designer.

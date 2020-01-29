# Installing

css-theming is released as an npm package.

[![npm](https://img.shields.io/npm/v/css-theming.svg)](https://www.npmjs.com/package/css-theming)

```
$ npm i css-theming --save
```

There are both javascript modules (typescript type definitions available) and SCSS src files after you install the package.

You use the javascript modules the usual way:

```javascript
import { initializeTheming, ... } from 'css-theming';
```

The SCSS src files are at "css-theming/src/scss/":
```scss
// Change "../" depending on where your file is.
@import '../node_modules/css-theming/src/scss/css-theming';
```

> Check the different samples in the GitHub repo to see this up close.

# Setup

There are 3 things you have to do to setup your project to work with css-theming.

- Optionally define themes in your variables file.
- Import the main `css-theming` SCSS file from your app scss file.
- Call `initializeTheming` from javascript/typescript in the startup of your app.

## Defining System themes

By default, css-theming gives you 2 themes, one light theme called `"default"` and another dark theme called `"default-dark"`. You're free to completely override this to define your own system themes.

You override this in your "variables" file. A "variables" file is a SCSS file you use that doesn't emit any real CSS. It contains all the definitions (SCSS variables, mixins, functions, ...) of your app. You usually import this file in all your concrete SCSS files (those would be the main app SCSS file, and SCSS files for components if your app is a SPA).

The following is an example variables file that defines 3 themes:

```scss
// Override the system defined themes
$ct-themes: (
  'default': (
    'brightness': 'light',
  ),
  'default-dark': (
    'brightness': 'dark',
  ),
  'high-contrast': (
    'brightness': 'light',
    ...
  )
);

@import '../../node_modules/css-theming/src/scss/pure';
```

We import the "pure" SCSS file from css-theming after we override the variables we want, as shown in the above snippet.

## Importing The Main css-theming SCSS File

In your main app SCSS file:

```scss
@import '../../node_modules/css-theming/src/scss/css-theming';
```

## Calling `initializeTheming`

Call `initializeTheming` as soon as you can in your app's lifecycle. This can be the `created` lifecycle hook of the main app component in a Vue.js app, the constructor of the main app component in an angular app, etc...

```javascript
import {
  initializeTheming,
} from 'css-theming';

// Initializes the default category themes
initializeTheming(/* theme */);
```

In this basic example, `initializeTheming` can optionally take the theme that you want to initialize at first. Let's assume we always want to load `"default-dark"` whenever the application loads.

```javascript
import {
  initializeTheming,
  getTheme,
} from 'css-theming';

// Initializes the default category themes
initializeTheming(getTheme('default-dark'));
```

Of course, instead of hard coding the initial theme you load, you can easily get this value from local storage or from your backend if you save the user's preference there.

> If you register additional category themes you'll call `initializeTheming` once for each category, as we'll explain in a later lesson.

## Setting a New Theme

You tell css-theming to change the current active theme by calling `setTheme`:

```javascript
import {
  setTheme,
} from 'css-theming';

// Initializes the default category themes
setTheme('[theme-name]');
```

This of course can be in response to a button click for example, that the user clicks on to choose what theme he wants to activate.

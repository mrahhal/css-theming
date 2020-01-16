# Contributing

## Running

We run the watcher for css-theming itself + the basic sample to test the changes. Use `npm start` at the root of this repo to run the watcher.

## Versioning

We use semantic versioning.

Use `npm version [...]` to update the version in both git and package.json files.

## Publishing

We use the "files" property in package.json to include things we want in the npm package.

Use `npm pack` to create a zipped package so that you can inspect the files the user will acquire.

`npm publish` will publish the package.

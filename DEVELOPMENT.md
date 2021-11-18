# Development

## Running

Install packages:
```
npm i
```

We run the watcher for css-theming:
```
npm start
```

To test the changes run any sample by going to its directory and:
```
npm i
npm start
```

## Releasing

We use https://github.com/mrahhal/release-cycle as a reference when releasing.

## Publishing

We use the "files" property in package.json to include things we want in the npm package.

Use `npm pack` to create a zipped package so that you can inspect the files it'll include.

`npm publish` will publish the package to npm.

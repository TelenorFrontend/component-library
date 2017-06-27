[![Build Status](https://travis-ci.org/TelenorFrontend/component-library.svg?branch=master)](https://travis-ci.org/TelenorFrontend/component-library)

# Telenor Frontend Component Library

## Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=8.0* with NPM 5.x

From the project folder, execute the following command:

```shell
npm install
```

Also make sure that you have gulp installed globally by installing it with the command:

```shell
npm install gulp-cli -g
```

When done, you will have installed all required dependencies.

To run the styleguide in watch mode execute the following command:

```shell
npm run watch
```

This command starts the styleguide and compiles the current scss-files into the stylesheet. The styleguide will be available at [http://localhost:8080](http://localhost:8080). Changes in the scss will automatically build and reload the styleguide.

## Adding your first component

Before you start adding a new component familiarize yourself with Nucleus by reading their [getting started](https://holidaypirates.github.io/nucleus/getting-started.html) section of annontations. To add a new component, simply add a new file to the components folder which ends in `.scss`. This will make gulp react to your file and start parsing it accordingly.

## Running The Tests

To ensure code quality we run linting on all scss-files. To run linting execute:

```shell
npm test
```

All lint warnings and errors (if any) should now appear in the console.

## FAQ

### How do I enable stylelint in Intellij IDEA?

* Open `Preferences`
* Search for `stylelint` (or go to `Languages & Frameworks` > `Stylesheets` > `Stylelint`)
* Click `Enable`

### How do I enable stylelint in VS Code?

* Open project in Code
* A list of recommended plugins will pop up, for optimal dev environment add all
* Success

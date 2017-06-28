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

This command starts the styleguide and compiles the current scss-files into the stylesheet. The styleguide will be available at [http://localhost:8888](http://localhost:888). Changes in the scss will automatically build and reload the styleguide.

## Adding your first component

Before you start adding a new component familiarize yourself with Nucleus by reading their [getting started](https://holidaypirates.github.io/nucleus/getting-started.html) section of annontations. To add a new component, simply add a new file to the components folder which ends in `.scss`. This will make gulp react to your file and start parsing it accordingly.

## Running The Tests

To ensure code quality we run linting on all scss-files. To run linting execute:

```shell
npm test
```

All lint warnings and errors (if any) should now appear in the console.

## Committing and releasing

### Commit guidelines
When commiting code for the repo you will need to use the [conventional commits guidelines](https://conventionalcommits.org/). This will be validated upon commit and helps us in several ways. It keeps a clean git history and helps creating a useful CHANGELOG when running a release.

### Releasing new version
We use [`standard-version`](https://github.com/conventional-changelog/standard-version) instead of the conventional npm version due to it's connection to conventional commits and the ability to create CHANGELOG automagically.

To release a new version you can simply type
```
npm run release
```

This will make standard-version go through the commits and decide for itself what kind of version bump is needed (major, minor and patch). However, sometimes it's easier to explicitly state what kind of version you want to bump. To help with this, we've added three simple abstractions

```
npm run release:patch
npm run release:minor
npm run release:major
```

#### Release example

You want to release a minor version of the repo.

1. Add all your commits
2. Run `npm run release:minor`
3. Chore step:
 + Run `npm i`
 + Run `git add package-lock.json`
 + Run `git commit -m "chore(package-lock): bump version"`  
 - This step is due to the changing version number of package-lock _after_ you bump the `package.json`. 

 4. Run `git push --follow-tags origin master`
 5. (Optional) Run a npm publish
## FAQ

### How do I enable stylelint in Intellij IDEA?

* Open `Preferences`
* Search for `stylelint` (or go to `Languages & Frameworks` > `Stylesheets` > `Stylelint`)
* Click `Enable`

### How do I enable stylelint in VS Code?

* Open project in Code
* A list of recommended plugins will pop up, for optimal dev environment add all
* Success

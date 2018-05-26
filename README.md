# Netguru Workshops
##### Prerequisites
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn](https://yarnpkg.com/en/docs/install)
##### Optional prerequisites:
* [Homebrew](https://brew.sh/)
Then install watchman:
```sh
$ brew install watchman
```
##### Instalation
1. Clone the repo:
```sh
$ git clone git@github.com:netguru-training/expo-3-.git
$ cd expo-3-
```
2. Install dependencies:
```sh
$ yarn 
```

##### Running/Development
1. Build and run iOS app
```sh
$ yarn start
```
2. then you can scan qr code from terminal 
be sure your phone and computer are using the same wifi network 
##### Running Tests
1. Run project tests
```sh
$ yarn test
```
2. Run eslint code syntax tests
```sh
$ yarn lint
```
##### Code Style
ESLint config - based on [Airbnb](https://github.com/airbnb/javascript) style guide, you can add few of your own rules in .eslintrc file
##### File structure - Just a proposal
* assets
> Here you can store all images, fonts and icons
* app
> Main application folder

* redux
> Inside redux each folder name indicates a store property that contain actions, reducers and constants
* components
> Maximum Code Reuse and Minimize Component State. In this directory we’ll be writing mostly functional components that can be used in multiple places throughout our app
* config
> This directory aligns with our goal to Keep Configuration out of the Code. We keep here for example colors, messages etc.
* lib
> We’re just keeping any general functions in here.
* screens
> These screens are essentially “smart” container component that handle all of the data fetching, interaction management, etc. The actual UI is delegated down to the various presentation components in the components directory.


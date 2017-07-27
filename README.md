Aircraft dashboard monitor
=====================
[![Build Status](https://travis-ci.org/jcastellanos003/dashboard.svg?branch=master)](https://travis-ci.org/jcastellanos003/dashboard)
[![GitHub Issues](https://img.shields.io/github/issues/jcastellanos003/dashboard.svg)](https://github.com/jcastellanos003/dashboard/issues)
<a href="https://twitter.com/JCastigliano">
    <img src="https://img.shields.io/badge/👫-1_member-1d2935.svg?style=flat" alt="Members">
</a>

Application to display in real time telemetry data from an aircraft.
<br/><br/>
First of all, thanks for taking your time and review my test, and off course for the oportunity to be part of this challenge. I had a great time working on it :)
<br/>

## Using this project

Previous steps

```bash
$ npm install
```

```bash
$ npm start
```

Build/Run:

```bash
$ npm build
```

Testing:

```bash
$ npm test
```

## Frontend:

I decided Angular 4 since my big experience it’s been in Angular, however I have a little experience in another libraries or frameworks such as React or Vue.
<br/><br/>
But more than that Angular is beautiful.
<br/><br/>
The application was built in Angular 4 without CLI (cause my point of view is, since the CLI configure everything, module bundler, build and testing), in an interview test you can’t show all the enough skills related to frontend development. 😜


## Dataflow:

I didn't include a library to manage the data flow such as Redux, however I implemented the immutable unidirectional dataflow, using the greatest of es6 and Angular.
<br/><br/>
To communicate components without a direct relation in the tree of components, I used the power of RxJS to publish an event and subscribe to that changes the specific components.
<br/><br/>
However, is important to let you know that the app is using the Lifecycle hooks of angular to kill subscriptions or load properly data.


## Architecture:

I created the architecture, thinking in “business unit” cause is easy to grow and easy to find files, also avoid create tight dependencies (coupling) between the components, also allow you to understand what components or services must be to share through the whole app.
<br/><br/>
Each unit business is composed by dumb and smart components, the smart components are aware of the changes of the child and also request the new data to update its children.
The dumb components can or not manage its internal state if require also emit events.
<br/><br/>
Also I take advantage of the greatest of es6 to create destructuring for example in a recursive function to avoid some lines of code.
<br/><br/>
TSLint to make sure of the quality of the code, indent to 4 spaces.
<br/><br/>
Loaders and plugins of Webpack to bundle the app and set my dev environment.
<br/><br/>
Jest for testing cause I really fall in love with this new framework for testing. Type of testing; Unit Test, without coverage.
<br/><br/>
Third party libraries: A tiny library for the gauge needle stuff, I created a wrapper that contains the basics and require as an input an interface for advanced properties and so on.
<br/><br/>
The Application is responsive. And the css files are written in sass. Images in svg.


## Continuous Integration:

I’m using travis, is faster and easy to configure and mainly is free. 🙂


## Branch strategy:

I worked using git flow.


## Facts:

With this App I learned and remembered again how to configure from the scratch an Angular App, with Webpack 3.0 that change a little bit since last time I messed around with it (Like 10 months ago). 
<br/><br/>
The WS service I built to wrap the connection to the WS, is an implementation of an interface, that means that in any time you can change to another protocol (socket) and even to http or whatever and should be easy and pain free.
<br/><br/>
Jest is beautiful, just to let you know, while I’m writing the test using vscode, he is telling me if the test pass or not.
<br/><br/>
Without the API endpoint working properly, for sure the app would not work hahahha, I was trying to create my own fake WS. but it was a little bit different than the real one.


## Resources:

<a href="https://angular.io/">
    Angular
</a><br/>
<a href="https://www.typescriptlang.org/">
    Typescript
</a><br/>
<a href="http://sass-lang.com/">
    Sass - BEM and Flexbox
</a><br/>
<a href="https://webpack.js.org/">
    Webpack 3
</a><br/>
<a href="https://gulpjs.com/">
    Gulp
</a><br/>
<a href="https://github.com/Reactive-Extensions/RxJS">
    RxJs
</a><br/>
<a href="https://www.npmjs.com/package/jest-preset-angular">
    Jest
</a><br/>

## Third party libraries

<a href="https://www.npmjs.com/package/ng-canvas-gauges">
    ng canvas gauge
</a>

## Wishes:

<ul>
    <li>More unit testing</li>
    <li>Last widget (the track one)</li>
    <li>Animations</li>
    <li>CSSGrid</li>
</ul>

---

> from Julian with ✌️ to EF
# Storybook

Toolkit is a starter kit UI component pattern library for creating and delivering tokenized atomic design systems
based on the Twitter Bootstrap front-end web library.

https://getbootstrap.com/

Using Storybook, front-end developers will write code to generate a Bootstrap theme CSS file,
and integrators will use that Bootstrap theme CSS file as a replacement for the default Bootstrap CSS file.

# Requirements

- git
- node (v16)

# References

[SASS](https://sass-lang.com/guide) - stylesheet compiler

[Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - HTML design system foundation, theme system, component library

[Storybook](https://storybook.js.org/docs/web-components/get-started/introduction) - Storybook is a tool for UI development

[lit-html](https://lit.dev/docs/v1/lit-html/introduction/) - Lit is a simple library for building fast, lightweight web components.

# Setup

- `git clone ` git@github.com:rkiran16/storybook.git
- `cd ` CLONE_PATH
- `npm install`

# Usage

## Local Development Usage

- `npm start`

It will start a web server and watch source files for changes.

## Production Usage

TODO: Need to discuss with Ankur.

## Unit Testing

The design system uses Storybook Jest for testing Javascript and StoryShots for Webcomponents. Storyshots are similar to snapshots tests that compare the rendered markup of every story against known baselines. It’s a way to identify markup changes that trigger rendering errors and warnings.

`npm run tests` will create snapshots for every story. To update snapshots we need to run `npm run test:update`.

NitroDX pipeline uses SonarQube to evalute the code to detect bugs, vulnerabilities, and code smells and it requires 80% code coverage to complete deployment.

### References

[Jest](https://jestjs.io/) - JavaScript Testing Framework
[StoryShots] (https://storybook.js.org/docs/web-components/writing-tests/snapshot-testing) - HTML Snapshot Testing

# Front-End Approach

TODO: Ravi to review/expand condensed front-end approach after removing references to original system

The design system is built on top of bootstrap. Front-end developers will define
one or more Bootstrap themes in order to customize the stock components.
They may also create custom components, depending on the needs of the project.

Front-end development should focus on the following priorities:

- Styling default bootstrap components
- Styling and creating HTML structures for custom components

You should leverage existing Bootstrap structures and styles as much as possible.
Where necessary, override Bootstrap styles to create your theme.
Always try to override styles by setting Bootstrap SASS variables first,
before you resort to writing custom styling rules.
That way, you will maximize the Bootstrap framework and minimize new custom code.

For each tokenized modification, do the following:

1. Look for relevant SASS variable setting in `src/styles/themes/_default-variables.scss`
2. Copy SASS variable setting into your theme file (one of `src/styles/_variables_.scss`) and remove `!default`

# Integration Approach

Storybook uses Webpack V5 which supports module federation plugin . The idea is to use Storybook as a style guide which exposes compiled stylesheet. Module federation is configured in `main.js` under `.storybook` folder.

To compile stylesheet, run `gulp sass` which outputs `global.css` in \src\assets folder.

## Configure Themes

Storybook uses `storybook-stylesheet-toggle` addon that allows you to define a set of stylesheets that can be toggled between. In `main.js` dependency is added and in `preview.js` the addon is configured .

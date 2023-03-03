# laboperator-middleware-development

This repo is meant to be used as a development dependency, together with [laboperator-middleware](https://github.com/labforward/laboperator-middleware) as a dependency, of specialized middleware between Laboperator and an external system.

By using it, each specialized middleware will be provided with:

- linter (eslint, prettier)
- typescript
- jest test runner

## Installation

- Install it as a development dependency using:

  ```
  yarn add --dev labforward/laboperator-middleware-development
  ```

- Run init:

  ```
  yarn laboperator-middleware init
  ```

  Which will bootstrap your middleware with linters, tests, and sample routes.

- Replace the placeholder values in `config.yml` with actual values.
- Add the following to `package.json`:

  ```
  "importSort": {
    ".js, .ts": {
      "style": "@labforward/config/import-sort"
    }
  },
  ```

## Starting server

```
yarn laboperator-middleware server
```

## Running test

```
yarn laboperator-middleware test
```

## Building server

The library come with a utility for building the middleware into docker image. To do so, you can run

```
yarn laboperator-middleware build <tag>
```

on which `tag` is the docker image tag that you would like to use for that specific build, e.g. `special-middleware:v1.0.0`.

You can then find the build in `build/special-middleware-v1.0.0.tar`

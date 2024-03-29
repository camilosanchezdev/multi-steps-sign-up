# Multi Steps Sign Up ⚛️

[![Techs](https://skillicons.dev/icons?i=react,vite)](#)

## Introduction

A registration system through steps.

#### Technologies:

- React 18.2.0
- Vite 4.4.5
- Styled Components
- Vitest (TDD)
- TypeScript

#### Project Structure:

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

## Testing

I have used Vitest and React Testing Library with Test Driven Development (TDD)

![Coverage](https://i.ibb.co/P6qnCxb/coverage.png)

## Screenshots

Behance: [Multi Steps Sign Up - Behance](https://www.behance.net/gallery/177751493/Multi-steps-Sign-Up)

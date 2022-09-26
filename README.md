# Lateral Nord shared utilities

Shared utility code and Vue components for all JavaScript projects for the Lateral Nord brand. Built on [linna](https://github.com/jerryjappinen/linna) and [moabit](https://github.com/jerryjappinen/moabit).

[Changelog](https://github.com/jerryjappinen/lateralnord-shared/commits/master)

### Run-time dependencies

You must transpile linna in the consumer repo. You are pulling the ES6 source code from this repo and must have a build pipeline in the consumer repo that handles it. Here are the dependencies you're gonna need when using each part of the shared library.

Quick start:

```sh
npm i date-fns lodash axios vue moabit linna
```

Detailed dependency map:

| Shared library | Dependencies |
| --- | --- | --- |
| Generic dependency | `lodash` | |
| Rich text support | `@contentful/rich-text-types` | |
| **/styles** | `moabit`, `linna` | |

## Working on this project

Add components, utilities, mixins, directives. Then write tests under `spec/` and write visual interactive documentation under `stories/`.

See [`package.json`](./package.json) for commands.

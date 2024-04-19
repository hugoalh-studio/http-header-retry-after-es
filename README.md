# HTTP Header Retry-After (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/http-header-retry-after-es](https://img.shields.io/github/v/release/hugoalh-studio/http-header-retry-after-es?label=hugoalh-studio/http-header-retry-after-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/http-header-retry-after-es")](https://github.com/hugoalh-studio/http-header-retry-after-es)
[![JSR: @hugoalh/http-header-retry-after](https://img.shields.io/jsr/v/@hugoalh/http-header-retry-after?label=JSR%20@hugoalh/http-header-retry-after&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/http-header-retry-after")](https://jsr.io/@hugoalh/http-header-retry-after)
[![NPM: @hugoalh/http-header-retry-after](https://img.shields.io/npm/v/@hugoalh/http-header-retry-after?label=@hugoalh/http-header-retry-after&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/http-header-retry-after")](https://www.npmjs.com/package/@hugoalh/http-header-retry-after)

An ES (JavaScript & TypeScript) module to handle the [HTTP header `Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) according to the specification [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110#field.retry-after).

## 🎯 Target

- Bun >= v1.1.0
- Cloudflare Workers
- Deno >= v1.42.0
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/http-header-retry-after[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/http-header-retry-after[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/http-header-retry-after[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/http-header-retry-after[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/http-header-retry-after";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/http-header-retry-after[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/http-header-retry-after[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/http-header-retry-after[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/http-header-retry-after[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/http-header-retry-after";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/http-header-retry-after[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    /* Via GitHub Raw (Require Tag) */
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/http-header-retry-after-es/${Tag}/mod.ts";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.

## 🧩 API

- ```ts
  class HTTPHeaderRetryAfter {
    constructor(value: number | string | Date | Headers | HTTPHeaderRetryAfter | Response): HTTPHeaderRetryAfter;
    getDate(): Date;
    getRemainTimeMilliseconds(): number;
    getRemainTimeSeconds(): number;
  }
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/http-header-retry-after)

## ✍️ Example

- ```ts
  new HTTPHeaderRetryAfter("Wed, 21 Oct 2015 07:28:00 GMT").getRemainTimeMilliseconds();
  //=> 0
  ```
- ```ts
  new HTTPHeaderRetryAfter("120");
  ```

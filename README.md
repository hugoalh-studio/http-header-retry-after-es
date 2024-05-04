# HTTP Header Retry-After (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/http-header-retry-after-es](https://img.shields.io/github/v/release/hugoalh-studio/http-header-retry-after-es?label=hugoalh-studio/http-header-retry-after-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/http-header-retry-after-es")](https://github.com/hugoalh-studio/http-header-retry-after-es)
[![JSR: @hugoalh/http-header-retry-after](https://img.shields.io/jsr/v/@hugoalh/http-header-retry-after?label=JSR%20@hugoalh/http-header-retry-after&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/http-header-retry-after")](https://jsr.io/@hugoalh/http-header-retry-after)
[![NPM: @hugoalh/http-header-retry-after](https://img.shields.io/npm/v/@hugoalh/http-header-retry-after?label=@hugoalh/http-header-retry-after&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/http-header-retry-after")](https://www.npmjs.com/package/@hugoalh/http-header-retry-after)

An ES (JavaScript & TypeScript) module to handle the [HTTP header `Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) according to the specification [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110#field.retry-after).

## 🔰 Begin

### 🎯 Targets

|  | **Registry - JSR** | **Registry - NPM** | **Remote Import** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | [✔️ `node_modules`](https://jsr.io/docs/npm-compatibility) | [✔️ Specifier `npm:`](https://bun.sh/docs/runtime/autoimport) | ❌ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | [✔️ `node_modules`](https://jsr.io/docs/with/cloudflare-workers) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |
| **[Deno](https://deno.land/)** >= v1.42.0 | [✔️ Specifier `jsr:`](https://jsr.io/docs/with/deno) | [✔️ Specifier `npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) | [✔️](https://docs.deno.com/runtime/manual/basics/modules/#remote-import) |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | [✔️ `node_modules`](https://jsr.io/docs/with/node) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |

> **ℹ️ Note**
>
> It is possible to use this module in other ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

<table><tbody align="left">
<tr>
<th>JSR</th>
<td width="100%">

```
@hugoalh/http-header-retry-after
```

</td>
</tr>
<tr>
<th>NPM</th>
<td width="100%">

```
@hugoalh/http-header-retry-after
```

</td>
</tr>
</tbody></table>

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### #️⃣ Remote Import Paths

- Via GitHub Raw (Require Tag)
  ```
  https://raw.githubusercontent.com/hugoalh-studio/http-header-retry-after-es/${Tag}/mod.ts
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

### 🛡️ Permissions

*This module does not require any permission.*

## 🧩 API

- ```ts
  class HTTPHeaderRetryAfter {
    constructor(input: number | string | Date | Headers | HTTPHeaderRetryAfter | Response): this;
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

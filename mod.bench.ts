import { HTTPHeaderRetryAfter } from "./mod.ts";
Deno.bench("String 1", { permissions: "none" }, () => {
	new HTTPHeaderRetryAfter("Wed, 21 Oct 2015 07:28:00 GMT");
});
Deno.bench("String 2", { permissions: "none" }, () => {
	new HTTPHeaderRetryAfter("120");
});

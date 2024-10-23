import { assert } from "STD/assert/assert";
import { assertEquals } from "STD/assert/equals";
import { assertThrows } from "STD/assert/throws";
import { HTTPHeaderRetryAfter } from "./mod.ts";
Deno.test("Stringify Number", { permissions: "none" }, () => {
	const instance = new HTTPHeaderRetryAfter("120");
	const remainTimeMilliseconds = instance.getRemainTimeMilliseconds();
	const remainTimeSeconds = instance.getRemainTimeSeconds();
	assert(remainTimeMilliseconds > 0 && remainTimeMilliseconds <= 120000);
	assert(remainTimeSeconds > 0 && remainTimeSeconds <= 120);
});
Deno.test("Timestamp GMT", { permissions: "none" }, () => {
	const instance = new HTTPHeaderRetryAfter("Wed, 21 Oct 2015 07:28:00 GMT");
	assertEquals(instance.getDate().valueOf(), 1445412480000);
	assertEquals(instance.getRemainTimeMilliseconds(), 0);
	assertEquals(instance.getRemainTimeSeconds(), 0);
});
Deno.test("Timestamp ISO8601", { permissions: "none" }, () => {
	assertThrows(() => {
		new HTTPHeaderRetryAfter("2011-10-05T14:48:00.000Z");
	});
});

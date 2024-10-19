const regexpDecimalInteger = /^\d+$/;
const regexpHTTPDate = /^[A-Z][a-z][a-z], \d\d [A-Z][a-z][a-z] \d\d\d\d \d\d:\d\d:\d\d GMT$/;
/**
 * Handle the HTTP header `Retry-After` according to the specification RFC 9110.
 */
export class HTTPHeaderRetryAfter {
	get [Symbol.toStringTag](): string {
		return "HTTPHeaderRetryAfter";
	}
	#timestamp: Date;
	/**
	 * Handle the HTTP header `Retry-After` according to the specification RFC 9110.
	 * @param {number | string | Date | Headers | HTTPHeaderRetryAfter | Response} input Input.
	 */
	constructor(input: number | string | Date | Headers | HTTPHeaderRetryAfter | Response) {
		if (input instanceof HTTPHeaderRetryAfter) {
			this.#timestamp = new Date(input.#timestamp);
		} else if (input instanceof Date) {
			this.#timestamp = new Date(input);
		} else if (typeof input === "number") {
			if (!(input >= 0)) {
				throw new RangeError(`Argument \`input\` is not a number which is positive!`);
			}
			this.#timestamp = new Date(Date.now() + input * 1000);
		} else {
			const inputRaw: string = (
				(input instanceof Response) ? input.headers.get("Retry-After") :
					(input instanceof Headers) ? input.get("Retry-After") :
						input
			) ?? "";
			if (regexpHTTPDate.test(inputRaw)) {
				this.#timestamp = new Date(inputRaw);
			} else if (regexpDecimalInteger.test(inputRaw)) {
				this.#timestamp = new Date(Date.now() + Number(inputRaw) * 1000);
			} else {
				throw new SyntaxError(`\`${inputRaw}\` is not a valid HTTP header \`Retry-After\` syntax!`);
			}
		}
	}
	/**
	 * Get `Date`.
	 * @returns {Date}
	 */
	getDate(): Date {
		return new Date(this.#timestamp);
	}
	/**
	 * Get remain time in milliseconds.
	 * @returns {number} Remain time in milliseconds.
	 */
	getRemainTimeMilliseconds(): number {
		const remainMilliseconds: number = this.#timestamp.valueOf() - Date.now();
		return ((remainMilliseconds >= 0) ? remainMilliseconds : 0);
	}
	/**
	 * Get remain time in seconds.
	 * @returns {number} Remain time in seconds.
	 */
	getRemainTimeSeconds(): number {
		return (this.getRemainTimeMilliseconds() / 1000);
	}
}
export default HTTPHeaderRetryAfter;

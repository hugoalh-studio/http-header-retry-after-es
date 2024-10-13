import {
	getMetadataFromConfig,
	invokeDenoNodeJSTransformer
} from "DNT";
const configJSR = await getMetadataFromConfig("jsr.jsonc");
await invokeDenoNodeJSTransformer({
	assetsCopy: [
		"LICENSE.md",
		"README.md"
	],
	entrypoints: configJSR.exports,
	generateDeclarationMap: true,
	metadata: {
		name: "@hugoalh/http-header-retry-after",
		version: configJSR.version,
		description: "A module to handle the HTTP header `Retry-After` according to the specification RFC 9110.",
		keywords: [
			"header",
			"http",
			"retry-after"
		],
		homepage: "https://github.com/hugoalh-studio/http-header-retry-after-es#readme",
		bugs: {
			url: "https://github.com/hugoalh-studio/http-header-retry-after-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh-studio/http-header-retry-after-es.git"
		},
		scripts: {
		},
		engines: {
			node: ">=16.13.0"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "npm",
	outputDirectoryPreEmpty: true
});

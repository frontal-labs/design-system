import config from "@frontal/builder/rollup.library";

export default {
	...config,
	input: "src/index.ts",
	external: [...(config.external || []), "react", "react-dom", /^react\//],
};

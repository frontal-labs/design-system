import config from "@frontal/builder/rollup.library";

export default {
	...config,
	external: [...(config.external || []), "react", "react-dom", /^react\//],
};

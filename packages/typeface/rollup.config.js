import config from "@frontal/builder/rollup.library";

export default {
	...config,
	external: [...(config.external || []), "next/font/local", /^next\//],
};

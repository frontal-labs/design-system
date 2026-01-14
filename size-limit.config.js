/** @type {import('size-limit').Config} */
export default [
	{
		name: "@frontal-ds/ui",
		path: "packages/ui/dist/index.js",
		limit: "150 KB",
	},
	{
		name: "@frontal-ds/blocks",
		path: "packages/blocks/dist/index.js",
		limit: "200 KB",
	},
	{
		name: "@frontal-ds/charts",
		path: "packages/charts/dist/index.js",
		limit: "100 KB",
	},
	{
		name: "@frontal-ds/icons",
		path: "packages/icons/dist/index.js",
		limit: "500 KB",
	},
	{
		name: "@frontal-ds/colors",
		path: "packages/colors/dist/index.js",
		limit: "50 KB",
	},
	{
		name: "@frontal-ds/typeface",
		path: "packages/typeface/dist/index.js",
		limit: "30 KB",
	},
	{
		name: "@frontal/design-system",
		path: "packages/design-system/dist/index.js",
		limit: "1 MB",
	},
];

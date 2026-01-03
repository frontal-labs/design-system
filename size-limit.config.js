/** @type {import('size-limit').Config} */
export default [
	{
		name: "@frontal/ui",
		path: "packages/ui/dist/index.js",
		limit: "150 KB",
	},
	{
		name: "@frontal/blocks",
		path: "packages/blocks/dist/index.js",
		limit: "200 KB",
	},
	{
		name: "@frontal/charts",
		path: "packages/charts/dist/index.js",
		limit: "100 KB",
	},
	{
		name: "@frontal/icons",
		path: "packages/icons/dist/index.js",
		limit: "500 KB",
	},
	{
		name: "@frontal/colors",
		path: "packages/colors/dist/index.js",
		limit: "50 KB",
	},
	{
		name: "@frontal/typeface",
		path: "packages/typeface/dist/index.js",
		limit: "30 KB",
	},
];

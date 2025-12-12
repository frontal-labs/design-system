import { __assign } from "tslib";
/**
 * Merges multiple props objects intelligently:
 * - Event handlers are chained
 * - className values are concatenated
 * - style objects are merged
 * - Other props are overwritten (last wins)
 */
export function mergeProps() {
	var _a;
	var propObjects = [];
	for (var _i = 0; _i < arguments.length; _i++) {
		propObjects[_i] = arguments[_i];
	}
	var result = {};
	for (
		var _b = 0, propObjects_1 = propObjects;
		_b < propObjects_1.length;
		_b++
	) {
		var props = propObjects_1[_b];
		if (!props) continue;
		var _loop_1 = (key) => {
			if (!Object.hasOwn(props, key)) return "continue";
			var value = props[key];
			// Handle event handlers (functions starting with 'on' and uppercase second letter)
			if (
				typeof key === "string" &&
				key.length > 2 &&
				key.startsWith("on") &&
				key[2] ===
					((_a = key[2]) === null || _a === void 0
						? void 0
						: _a.toUpperCase()) &&
				typeof value === "function"
			) {
				var existingHandler_1 = result[key];
				if (existingHandler_1) {
					result[key] = function () {
						var args = [];
						for (var _i = 0; _i < arguments.length; _i++) {
							args[_i] = arguments[_i];
						}
						existingHandler_1.apply(void 0, args);
						value.apply(void 0, args);
					};
				} else {
					result[key] = value;
				}
			}
			// Handle className - concatenate strings
			else if (key === "className") {
				var existing = result[key];
				if (existing && value) {
					result[key] = "".concat(existing, " ").concat(value);
				} else {
					result[key] = value || existing;
				}
			}
			// Handle style - merge objects
			else if (key === "style" && typeof value === "object" && value !== null) {
				var existing = result[key];
				if (existing && typeof existing === "object") {
					result[key] = __assign(__assign({}, existing), value);
				} else {
					result[key] = value;
				}
			}
			// For all other props, last wins (overwrite)
			else {
				result[key] = value;
			}
		};
		for (var key in props) {
			_loop_1(key);
		}
	}
	return result;
}
//# sourceMappingURL=merge-props.js.map

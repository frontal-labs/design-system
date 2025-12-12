"use client";
import { createElement, useMemo } from "react";
/**
 * Hook that renders a component with support for render props
 * Allows consumers to override the default rendered element
 */
export function useRender(options) {
    var defaultTagName = options.defaultTagName, props = options.props, render = options.render;
    return useMemo(function () {
        if (render) {
            if (typeof render === "function") {
                return render(props);
            }
            return createElement(render, props);
        }
        return createElement(defaultTagName, props);
    }, [defaultTagName, props, render]);
}
//# sourceMappingURL=use-render.js.map
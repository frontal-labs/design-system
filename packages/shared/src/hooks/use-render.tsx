"use client";

import type {
	ComponentType,
	ElementType,
	ComponentProps as ReactComponentProps,
	ReactElement,
} from "react";
import { createElement, useMemo } from "react";

export type RenderProp<T extends ElementType = ElementType> =
	| ComponentType<ReactComponentProps<T>>
	| ((props: ReactComponentProps<T>) => ReactElement);

export interface UseRenderOptions<T extends ElementType> {
	defaultTagName: T;
	props: ReactComponentProps<T>;
	render?: RenderProp<T>;
}

/**
 * Hook that renders a component with support for render props
 * Allows consumers to override the default rendered element
 */
export function useRender<T extends ElementType = "div">(
	options: UseRenderOptions<T>,
): ReactElement {
	const { defaultTagName, props, render } = options;

	return useMemo(() => {
		if (render) {
			if (typeof render === "function") {
				return render(props) as ReactElement;
			}
			return createElement(render, props);
		}
		return createElement(defaultTagName, props);
	}, [defaultTagName, props, render]);
}

// Type utility for component props that includes render prop
export namespace useRender {
	export type ComponentProps<T extends ElementType> = ReactComponentProps<T> & {
		render?: RenderProp<T>;
	};
}

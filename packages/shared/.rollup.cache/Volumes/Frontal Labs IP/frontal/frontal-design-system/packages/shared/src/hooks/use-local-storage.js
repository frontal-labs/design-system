"use client";
import { useCallback, useEffect, useState } from "react";
/**
 * Hook to manage localStorage with React state
 * @param key - The localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns [storedValue, setValue, removeValue] tuple
 */
export function useLocalStorage(key, initialValue) {
	// State to store our value
	var _a = useState(() => {
			if (typeof window === "undefined") {
				return initialValue;
			}
			try {
				var item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue;
			} catch (error) {
				console.error(
					'Error reading localStorage key "'.concat(key, '":'),
					error,
				);
				return initialValue;
			}
		}),
		storedValue = _a[0],
		setStoredValue = _a[1];
	// Return a wrapped version of useState's setter function that
	// persists the new value to localStorage.
	var setValue = useCallback(
		(value) => {
			try {
				// Allow value to be a function so we have the same API as useState
				var valueToStore =
					value instanceof Function ? value(storedValue) : value;
				// Save state
				setStoredValue(valueToStore);
				// Save to local storage
				if (typeof window !== "undefined") {
					window.localStorage.setItem(key, JSON.stringify(valueToStore));
				}
			} catch (error) {
				console.error(
					'Error setting localStorage key "'.concat(key, '":'),
					error,
				);
			}
		},
		[key, storedValue],
	);
	// Remove value from localStorage
	var removeValue = useCallback(() => {
		try {
			setStoredValue(initialValue);
			if (typeof window !== "undefined") {
				window.localStorage.removeItem(key);
			}
		} catch (error) {
			console.error(
				'Error removing localStorage key "'.concat(key, '":'),
				error,
			);
		}
	}, [key, initialValue]);
	// Listen for changes to this key in other tabs/windows
	useEffect(() => {
		if (typeof window === "undefined") return;
		var handleStorageChange = (e) => {
			if (e.key === key && e.newValue !== null) {
				try {
					setStoredValue(JSON.parse(e.newValue));
				} catch (error) {
					console.error(
						'Error parsing localStorage value for key "'.concat(key, '":'),
						error,
					);
				}
			}
		};
		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, [key]);
	return [storedValue, setValue, removeValue];
}
//# sourceMappingURL=use-local-storage.js.map

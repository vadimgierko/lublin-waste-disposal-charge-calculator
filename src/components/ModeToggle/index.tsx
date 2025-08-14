"use client";

import { LOCAL_STORAGE_THEME_KEY } from "@/constants";
import { Theme } from "@/types";
import { useEffect, useState } from "react";

export default function ModeToggle() {
	const [theme, setTheme] = useState<Theme>("light");

	function switchTheme() {
		const newTheme: Theme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		document.documentElement.setAttribute("data-bs-theme", newTheme);
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

		if (savedTheme) {
			setTheme(savedTheme as Theme);
			document.documentElement.setAttribute("data-bs-theme", savedTheme);
		} else {
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, "light");
			document.documentElement.setAttribute("data-bs-theme", "light");
		}
	}, []);

	return (
		<button
			className="btn"
			onClick={switchTheme}
			title={
				theme === "light" ? "przełącz na tryb ciemny" : "przełącz na tryb jasny"
			}
		>
			{theme === "light" ? (
				"zmień tryb na ciemny"
			) : (
				"zmień tryb na jasny"
			)}{" "}
			{theme === "light" ? (
				<i className="bi bi-moon-fill"></i>
			) : (
				<i className="bi bi-brightness-high-fill"></i>
			)}
		</button>
	);
}

"use client";

import { useCounter } from "@/hooks/useCounter";

export default function Counter() {
	const { count } = useCounter();

	return (
		<span>
			aplikacja została użyta <strong>{count}</strong> razy (od 19.08.2025)
		</span>
	);
}

"use client";

import { useCounter } from "@/hooks/useCounter";

export default function Counter() {
    const { count } = useCounter();

    return (
        <span>aplikacja została użyta {count} razy</span>
    );
}
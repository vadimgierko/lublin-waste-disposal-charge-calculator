"use client";

import { FormEvent, useState } from "react";
import Form from "../components/Form";
import { Result } from "@/types";
import ResultTable from "../components/ResultTable";
import { STAWKA } from "@/constants";

export default function Home() {
	const [result, setResult] = useState<Result>();

	function obliczZuzycieWody(zuzycie: number) {
		if (typeof zuzycie !== "number" || isNaN(zuzycie)) {
			throw new Error("Argument musi być liczbą");
		}

		function roundAndFixToTwoDecimals(num: number) {
			/** helper function to round up from 5 in specific cases */
			const factor = Math.pow(10, 2);
			const rounded = (Math.round((num + Number.EPSILON) * factor) / factor).toFixed(2);
			return Number(rounded)
		}

		const miesieczneZuzycie = roundAndFixToTwoDecimals(Number((zuzycie / 6)));
		const oplataZaSmieci = roundAndFixToTwoDecimals(Number((miesieczneZuzycie * STAWKA)));
		return {
			zuzycie,
			miesieczneZuzycie,
			oplataZaSmieci,
		};
	}

	function onSubmit(e: FormEvent<HTMLFormElement>, inputValue: string) {
		e.preventDefault();

		if (!inputValue) {
			alert("Podaj liczbę!");
			return;
		}

		// Zamień przecinek na kropkę
		const inputValueWithTheDot = inputValue.replace(",", ".");

		// Sprawdź, czy wpisano tylko cyfry i opcjonalnie kropkę
		if (!/^\d+(\.\d+)?$/.test(inputValueWithTheDot)) {
			alert("Podaj poprawną liczbę!");
			return;
		}

		// Konwersja na liczbę
		const liczba = parseFloat(inputValueWithTheDot);

		if (isNaN(liczba)) {
			alert("Podana wartość nie jest poprawną liczbą!");
			return;
		}

		const calculatedResult = obliczZuzycieWody(liczba);
		setResult(calculatedResult);
	}

	return (
		<>
			<Form onSubmit={onSubmit} />

			{result && <ResultTable result={result} />}
		</>
	);
}

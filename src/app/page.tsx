"use client";

import { ResultRozliczenie } from "@/types";
import ResultTable from "../components/ResultTable";
import { STAWKA } from "@/constants";
import roundAndFixToTwoDecimals from "@/lib/roundAndFixToTwoDecimals";
import { FormEvent, useState } from "react";
import FormRozliczenie from "@/components/forms/FormRozliczenie";
import FormLiczbaOsob from "@/components/forms/FormLiczbaOsob";
import { useCounter } from "@/hooks/useCounter";

export default function Home() {
	const {incrementCounter} = useCounter();

	const [jestRozliczenie, setJestRozliczenie] = useState(true);
	const [jestRodzinaWelodzietna, setJestRodzinaWielodzietna] = useState(false);

	function resetCheckBoxes() {
		setJestRozliczenie(true);
		setJestRodzinaWielodzietna(false);
	}
	//===================================
	const [result, setResult] = useState<ResultRozliczenie>();

	function resetState() {
		setResult(undefined);
		resetCheckBoxes();
	}
	//===================================
	function obliczZuzycieWody(zuzycie: number) {
		if (typeof zuzycie !== "number" || isNaN(zuzycie)) {
			throw new Error("Argument musi być liczbą");
		}

		const miesieczneZuzycie = roundAndFixToTwoDecimals(Number(zuzycie / 6));
		const oplataZaSmieci = roundAndFixToTwoDecimals(
			Number(miesieczneZuzycie * STAWKA)
		);

		const resultObject: ResultRozliczenie = {
			zuzycie,
			miesieczneZuzycie,
			oplataZaSmieci,
		};

		console.log(resultObject);
		return resultObject;
	}

	async function onFormRozliczenieSubmit(
		e: FormEvent<HTMLFormElement>,
		inputValue: string
	) {
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
		await incrementCounter();
		setResult(calculatedResult);
	}

	function onFormLiczbaOsobSubmit(
		e: FormEvent<HTMLFormElement>,
		liczbaOsob: number
	) {
		e.preventDefault();

		if (liczbaOsob < 1) {
			alert("Podaj liczbę!");
			return;
		}

		// TODO
	}

	return (
		<>
			{/** ========================== CHECKBOXES =============================== */}
			{/** JEST ROZLICZENIE CHECKBOX */}
			<input
				className="form-check-input"
				type="checkbox"
				checked={jestRozliczenie}
				id="rozliczenie-checkbox"
				// onChange={() => setJestRozliczenie(!jestRozliczenie)}
				disabled={true}
			/>{" "}
			<label htmlFor="rozliczenie-checkbox" className="me-3">
				Rozliczenie
			</label>
			{/** JEST RODZINA WIELODZIETNA CHECKBOX */}
			<input
				className="form-check-input"
				type="checkbox"
				checked={jestRodzinaWelodzietna}
				id="rodzina-wielodzietna-checkbox"
				onChange={() => setJestRodzinaWielodzietna(!jestRodzinaWelodzietna)}
				disabled={Boolean(result)}
			/>{" "}
			<label htmlFor="rodzina-wielodzietna-checkbox">
				Rodzina wielodzietna
			</label>
			<hr />
			{result ? (
				<>
					<ResultTable
						result={result}
						jestRodzinaWielodzietna={jestRodzinaWelodzietna}
					/>

					<div className="d-grid gap-2">
						<button
							className="btn btn-primary mt-2 d-block"
							onClick={() => resetState()}
						>
							Nowe rozliczenie
						</button>
					</div>
				</>
			) : jestRozliczenie ? (
				<FormRozliczenie onSubmit={onFormRozliczenieSubmit} />
			) : (
				<FormLiczbaOsob onSubmit={onFormLiczbaOsobSubmit} />
			)}
		</>
	);
}

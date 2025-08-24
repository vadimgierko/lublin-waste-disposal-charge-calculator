"use client";

import { ResultLiczbaOsob, ResultRozliczenie } from "@/types";
import { Declaration } from "../components/Declaration";
import { STAWKA_2025 } from "@/constants";
import roundAndFixToTwoDecimals from "@/lib/roundAndFixToTwoDecimals";
import { FormEvent, useEffect, useState } from "react";
import FormRozliczenie from "@/components/forms/FormRozliczenie";
import FormLiczbaOsob from "@/components/forms/FormLiczbaOsob";
import { useCounter } from "@/hooks/useCounter";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseApp } from "@/firebaseConfig";

export default function Home() {
	const { incrementCounter } = useCounter();

	const [isFormSubmited, setIsFormSubmited] = useState(false);

	const [jestRozliczenie, setJestRozliczenie] = useState(true);
	const [jestRodzinaWelodzietna, setJestRodzinaWielodzietna] = useState(false);

	function resetCheckBoxes() {
		setJestRozliczenie(true);
		setJestRodzinaWielodzietna(false);
	}
	//===================================
	const [resultRozliczenie, setResultRozliczenie] =
		useState<ResultRozliczenie>();
	const [resultLiczbaOsob, setResultLiczbaOsob] = useState<ResultLiczbaOsob>();

	function resetState() {
		setResultRozliczenie(undefined);
		setResultLiczbaOsob(undefined);
		setIsFormSubmited(false);
		resetCheckBoxes();
	}
	//===================================
	function obliczZuzycieWody(zuzycie: number) {
		if (typeof zuzycie !== "number" || isNaN(zuzycie)) {
			throw new Error("Argument musi być liczbą");
		}

		const miesieczneZuzycie = roundAndFixToTwoDecimals(Number(zuzycie / 6));
		const oplataZaSmieci = roundAndFixToTwoDecimals(
			Number(miesieczneZuzycie * STAWKA_2025)
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

		//============== ❗❗❗ COMMENT IN DEV ================❗❗❗
		await incrementCounter();

		setResultRozliczenie(calculatedResult);
		setIsFormSubmited(true);
	}

	async function onFormLiczbaOsobSubmit(
		e: FormEvent<HTMLFormElement>,
		liczbaOsob: number
	) {
		e.preventDefault();

		if (liczbaOsob < 1) {
			alert("Podaj liczbę!");
			return;
		}

		const result: ResultLiczbaOsob = {
			liczbaOsob,
			total: roundAndFixToTwoDecimals(liczbaOsob * 3 * 13.2),
		};

		//============== ❗❗❗ COMMENT IN DEV ================❗❗❗
		await incrementCounter();

		setResultLiczbaOsob(result);
		setIsFormSubmited(true);
	}

	useEffect(() => {
		//============== ❗❗❗ COMMENT IN DEV ================❗❗❗
		const analytics = getAnalytics(firebaseApp);
		logEvent(analytics, "notification_received");
	}, []);

	return (
		<>
			{/** ========================== CHECKBOXES =============================== */}
			{/** JEST ROZLICZENIE CHECKBOX */}
			<input
				className="form-check-input shadow"
				type="checkbox"
				checked={jestRozliczenie}
				id="rozliczenie-checkbox"
				onChange={() => setJestRozliczenie(!jestRozliczenie)}
				disabled={Boolean(isFormSubmited)}
			/>{" "}
			<label htmlFor="rozliczenie-checkbox" className="me-3">
				Jest rozliczenie wody?
			</label>
			{/** JEST RODZINA WIELODZIETNA CHECKBOX */}
			<input
				className="form-check-input shadow"
				type="checkbox"
				checked={jestRodzinaWelodzietna}
				id="rodzina-wielodzietna-checkbox"
				onChange={() => setJestRodzinaWielodzietna(!jestRodzinaWelodzietna)}
				disabled={Boolean(isFormSubmited)}
			/>{" "}
			<label htmlFor="rodzina-wielodzietna-checkbox" className="me-3">
				Rodzina wielodzietna?
			</label>
			<hr />
			{isFormSubmited ? (
				<>
					<Declaration
						resultRozliczenie={resultRozliczenie}
						jestRodzinaWielodzietna={jestRodzinaWelodzietna}
						resultLiczbaOsob={resultLiczbaOsob}
					/>

					<div className="d-grid gap-2">
						<button
							className="btn btn-primary mt-2 d-block shadow"
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

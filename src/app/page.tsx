"use client";

import { DeclarationData } from "@/types";
import { Declaration } from "../components/Declaration";
import { FormEvent, useEffect, useState } from "react";
import FormRozliczenie from "@/components/forms/FormRozliczenie";
import FormLiczbaOsob from "@/components/forms/FormLiczbaOsob";
import { useCounter } from "@/hooks/useCounter";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseApp } from "@/firebaseConfig";
import { calculateDeclaration } from "@/lib/calculateDeclaration";

export default function Home() {
	const { incrementCounter } = useCounter();

	const [isFormSubmited, setIsFormSubmited] = useState(false);

	const [jestRozliczenie, setJestRozliczenie] = useState(true);
	const [jestRodzinaWielodzietna, setJestRodzinaWielodzietna] = useState(false);

	function resetCheckBoxes() {
		setJestRozliczenie(true);
		setJestRodzinaWielodzietna(false);
	}
	//===================================
	const [declaration, setDeclaration] = useState<DeclarationData>();

	function resetState() {
		setDeclaration(undefined);
		setIsFormSubmited(false);
		resetCheckBoxes();
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

		const d = calculateDeclaration({
			zuzycie: liczba,
			jestRodzinaWielodzietna,
		});

		//============== ❗❗❗ COMMENT IN DEV ================❗❗❗
		await incrementCounter();

		setDeclaration(d);
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

		const d = calculateDeclaration({ liczbaOsob, jestRodzinaWielodzietna });
		//============== ❗❗❗ COMMENT IN DEV ================❗❗❗
		await incrementCounter();

		setDeclaration(d);
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
				checked={jestRodzinaWielodzietna}
				id="rodzina-wielodzietna-checkbox"
				onChange={() => setJestRodzinaWielodzietna(!jestRodzinaWielodzietna)}
				disabled={Boolean(isFormSubmited)}
			/>{" "}
			<label htmlFor="rodzina-wielodzietna-checkbox" className="me-3">
				Rodzina wielodzietna?
			</label>
			<hr />
			{isFormSubmited && declaration ? (
				<>
					<Declaration declaration={declaration} />

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

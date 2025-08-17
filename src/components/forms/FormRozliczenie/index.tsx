"use client";
import { FormEvent, useState } from "react";
import FormSubmitButton from "../FormSubmitButton";

export default function FormRozliczenie({
	onSubmit,
}: {
	onSubmit: (e: FormEvent<HTMLFormElement>, inputValue: string) => void;
}) {
	const [inputValue, setInputValue] = useState("");

	return (
		<form
			className="form"
			onSubmit={(e) => {
				onSubmit(e, inputValue);

				// reset input:
				setInputValue("");
			}}
		>
			<label className="form-label" htmlFor="zuzycieInput">
				Wpisz zużycie wody (w m3) za kolejne 6 miesięcy (styczeń-czerwiec lub
				lipiec-grudzień) (poz. 27. w deklaracji)
			</label>

			<input
				value={inputValue}
				className="form-control"
				type="text"
				placeholder="Podaj zużycie wody (m³)"
				autoFocus
				onChange={(e) => setInputValue(e.currentTarget.value.trim())}
			/>

			<FormSubmitButton />
		</form>
	);
}

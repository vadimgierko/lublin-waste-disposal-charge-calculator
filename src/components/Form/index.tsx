"use client";
import { FormEvent, useState } from "react";

export default function Form({
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

			<div className="d-grid gap-2">
				<button type="submit" className="btn btn-outline-primary mt-2 d-block">
					Oblicz
				</button>
			</div>
		</form>
	);
}

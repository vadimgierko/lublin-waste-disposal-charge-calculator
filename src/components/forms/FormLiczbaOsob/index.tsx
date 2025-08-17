"use client";
import { FormEvent, useState } from "react";
import FormSubmitButton from "../FormSubmitButton";

export default function FormLiczbaOsob({
	onSubmit,
}: {
	onSubmit: (e: FormEvent<HTMLFormElement>, liczbaOsob: number) => void;
}) {
	const [liczbaOsob, setLiczbaOsob] = useState(1);

	return (
		<form
			className="form"
			onSubmit={(e) => {
				onSubmit(e, liczbaOsob);

				// reset input:
				setLiczbaOsob(1);
			}}
		>
			<label className="form-label" htmlFor="liczbaOsobInput">
				Wpisz liczbę osób
			</label>

			<input
				id="liczbaOsobInput"
				value={liczbaOsob}
				className="form-control"
				type="number"
				placeholder="1"
				step={1}
				min="1"
				autoFocus
				onChange={(e) => setLiczbaOsob(Number(e.currentTarget.value))}
			/>

			<FormSubmitButton />
		</form>
	);
}

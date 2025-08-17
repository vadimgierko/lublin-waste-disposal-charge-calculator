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
			<div className="input-group">
				<div className="input-group-text">
					Wpisz zużycie wody (w m3) za kolejne 6 miesięcy
				</div>
				<input
					value={inputValue}
					className="form-control"
					type="text"
					placeholder="Podaj zużycie wody (m³)"
					autoFocus
					onChange={(e) => setInputValue(e.currentTarget.value.trim())}
				/>
			</div>

			<FormSubmitButton />
		</form>
	);
}

type InputFieldProps = {
	col: number;
	index: number;
	value: string | number | undefined;
	jednostka: "m3" | "zł" | "zł/m3" | undefined;
};

export function InputField({ col, index, value, jednostka }: InputFieldProps) {
	return (
		<div
			className={`input-field col-${col} d-flex justify-content-between align-items-center`}
		>
			<span className="index">{index}.</span>
			<span>
				<strong className="text-danger" style={{ fontSize: "16pt" }}>
					{value}
				</strong>
			</span>
			<span className="jednostka">
				{jednostka === "m3" ? (
					<span>
						m<sup>3</sup>
					</span>
				) : jednostka === "zł" ? (
					"zł"
				) : jednostka === "zł/m3" ? (
					<span>
						zł/m<sup>3</sup>
					</span>
				) : (
					""
				)}
			</span>
		</div>
	);
}

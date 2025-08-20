type LabelFieldProps = {
	col: number;
	value: string;
};

export function LabelField({ col, value }: LabelFieldProps) {
	return (
		<div className={`label-field col-${col} grey text-center`}>{value}</div>
	);
}

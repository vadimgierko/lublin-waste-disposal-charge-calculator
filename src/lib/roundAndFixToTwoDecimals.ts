export default function roundAndFixToTwoDecimals(num: number) {
	/** helper function to round up from 5 in specific cases */
	const factor = Math.pow(10, 2);
	const rounded = (
		Math.round((num + Number.EPSILON) * factor) / factor
	).toFixed(2);
	return Number(rounded);
}

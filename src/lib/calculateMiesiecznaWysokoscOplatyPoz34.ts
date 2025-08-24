export function calculateMiesiecznaWysokoscOplatyPoz34(
	a: number | undefined,
	b: number | undefined
) {
	if (a === undefined && b === undefined) return undefined;

	let result = 0;

	if (a !== undefined) {
		result += a;
	}

	if (b !== undefined) {
		result += b;
	}

	return result;
}

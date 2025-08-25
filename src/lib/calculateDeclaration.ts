import { DeclarationData, DeclarationInput } from "@/types";
import roundAndFixToTwoDecimals from "./roundAndFixToTwoDecimals";
import { MAKSYMALNA_OPLATA_2025, STAWKA_2025 } from "@/constants";

export function calculateDeclaration({
	zuzycie,
	liczbaOsob,
	jestRodzinaWielodzietna,
}: DeclarationInput): DeclarationData | undefined {
	const data: DeclarationData = {
		H1: undefined,
		H2: undefined,
		H3: 0,
		I: undefined,
		J: undefined,
		K: 0,
	};

	// ❗❗❗ THIS 👇 SHOULD NOT HAPPEN BECUASE OF DeclarationInput
	// if (zuzycie === undefined && liczbaOsob === undefined) return undefined;

	// zuzycie => H1, H3, K
	if (zuzycie !== undefined && liczbaOsob === undefined) {
		const miesieczneZuzycie = roundAndFixToTwoDecimals(zuzycie / 6);
		const oplataZaSmieci = roundAndFixToTwoDecimals(
			miesieczneZuzycie * STAWKA_2025
		);

		data["H1"] = {
			zuzycie,
			miesieczneZuzycie,
			oplataZaSmieci,
		};
		data["H3"] = data["H1"].oplataZaSmieci;
		data["K"] = data["H3"];
	}

	// liczbaOsob => H2, H3, K
	if (zuzycie === undefined && liczbaOsob !== undefined) {
		data["H2"] = {
			liczbaOsob,
			total: roundAndFixToTwoDecimals(liczbaOsob * 3 * STAWKA_2025),
		};
		data["H3"] = data["H2"].total;
		data["K"] = data["H3"];
	}

	// jestRodzinaWielodzietna => I, K
	if (jestRodzinaWielodzietna) {
		data["I"] = roundAndFixToTwoDecimals(data["H3"] * 0.2);
		data["K"] = roundAndFixToTwoDecimals(data["K"] - data["I"]);
	}

	// if J => J, K
	if (data["K"] > MAKSYMALNA_OPLATA_2025) {
		data["J"] = roundAndFixToTwoDecimals(data["K"] - MAKSYMALNA_OPLATA_2025);
		data["K"] = MAKSYMALNA_OPLATA_2025;
	}

	return data;
}

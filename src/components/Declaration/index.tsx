import roundAndFixToTwoDecimals from "@/lib/roundAndFixToTwoDecimals";
import { ResultRozliczenie } from "@/types";
import { MAKSYMALNA_OPLATA_2025 } from "@/constants";
import { SectionHeader } from "./components/SectionHeader";
import { SectionH1 } from "./sections/H1";
import { SectionH2 } from "./sections/H2";
import { SectionH3 } from "./sections/H3";
import { SectionI } from "./sections/I";
import { SectionJ } from "./sections/J";
import { SectionK } from "./sections/K";
import { calculateMiesiecznaWysokoscOplatyPoz34 } from "@/lib/calculateMiesiecznaWysokoscOplatyPoz34";

export function Declaration({
	resultRozliczenie,
	resultLiczbaOsob,
	jestRodzinaWielodzietna,
}: {
	resultRozliczenie: ResultRozliczenie | undefined;
	resultLiczbaOsob:
		| {
				liczbaOsob: number;
				total: number;
		  }
		| undefined;
	jestRodzinaWielodzietna: boolean;
}) {
	const miesiecznaWysokoscOplatypoz34 = calculateMiesiecznaWysokoscOplatyPoz34(
		resultRozliczenie?.oplataZaSmieci,
		resultLiczbaOsob?.total
	);

	if (miesiecznaWysokoscOplatypoz34 === undefined) return;

	const miesiecznaWysokoscZwolnieniaRodzinaWielodzietna =
		jestRodzinaWielodzietna
			? roundAndFixToTwoDecimals(miesiecznaWysokoscOplatypoz34 * 0.2)
			: 0;

	const pomniejszenie =
		roundAndFixToTwoDecimals(
			miesiecznaWysokoscOplatypoz34 -
				miesiecznaWysokoscZwolnieniaRodzinaWielodzietna
		) > MAKSYMALNA_OPLATA_2025
			? roundAndFixToTwoDecimals(
					miesiecznaWysokoscOplatypoz34 -
						miesiecznaWysokoscZwolnieniaRodzinaWielodzietna -
						MAKSYMALNA_OPLATA_2025
			  )
			: 0;

	const ostatecznaStawka = roundAndFixToTwoDecimals(
		miesiecznaWysokoscOplatypoz34 -
			miesiecznaWysokoscZwolnieniaRodzinaWielodzietna -
			pomniejszenie
	);

	return (
		<div id="deklaracja" className="text-start" data-bs-theme="light">
			{/* <!-- H. --> */}
			<SectionHeader
				title="H. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI OPŁATY ZA GOSPODAROWANIE ODPADAMI KOMUNALNYMI DLA NIERUCHOMOŚCI W ZABUDOWIE WIELORODZINNEJ"
				description="Jeżeli do deklaracji zostały dołączone załączniki ZOP, do wyliczenia opłaty
                    należy przyjąć sumę danych wykazanych w załącznikach."
			/>

			<SectionH1 resultRozliczenie={resultRozliczenie} />

			<SectionH2 resultLiczbaOsob={resultLiczbaOsob} />

			<SectionH3
				miesiecznaWysokoscOplatypoz34={miesiecznaWysokoscOplatypoz34}
			/>

			{/* <!-- I. Zwolnienie --> */}
			<SectionI
				jestRodzinaWielodzietna={jestRodzinaWielodzietna}
				miesiecznaWysokoscOplatypoz34={miesiecznaWysokoscOplatypoz34}
				miesiecznaWysokoscZwolnieniaRodzinaWielodzietna={
					miesiecznaWysokoscZwolnieniaRodzinaWielodzietna
				}
			/>

			{/* <!-- J. POMNIEJSZENIE --> */}
			<SectionJ pomniejszenie={pomniejszenie} />

			{/* <!-- K. WYSOKOŚĆ OPŁATY --> */}
			<SectionK ostatecznaStawka={ostatecznaStawka} />
		</div>
	);
}

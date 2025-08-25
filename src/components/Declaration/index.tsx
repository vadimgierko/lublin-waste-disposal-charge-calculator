import { DeclarationData } from "@/types";
import { SectionHeader } from "./components/SectionHeader";
import { SectionH1 } from "./sections/H1";
import { SectionH2 } from "./sections/H2";
import { SectionH3 } from "./sections/H3";
import { SectionI } from "./sections/I";
import { SectionJ } from "./sections/J";
import { SectionK } from "./sections/K";

export function Declaration({ declaration }: { declaration: DeclarationData }) {
	return (
		<div id="deklaracja" className="text-start" data-bs-theme="light">
			{/* <!-- H. --> */}
			<SectionHeader
				title="H. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI OPŁATY ZA GOSPODAROWANIE ODPADAMI KOMUNALNYMI DLA NIERUCHOMOŚCI W ZABUDOWIE WIELORODZINNEJ"
				description="Jeżeli do deklaracji zostały dołączone załączniki ZOP, do wyliczenia opłaty
                    należy przyjąć sumę danych wykazanych w załącznikach."
			/>

			<SectionH1 resultRozliczenie={declaration.H1} />

			<SectionH2 resultLiczbaOsob={declaration.H2} />

			<SectionH3 miesiecznaWysokoscOplatypoz34={declaration.H3} />

			{/* <!-- I. Zwolnienie --> */}
			<SectionI
				jestRodzinaWielodzietna={declaration.I === undefined ? false : true}
				miesiecznaWysokoscOplatypoz34={declaration.H3}
				miesiecznaWysokoscZwolnieniaRodzinaWielodzietna={declaration.I || 0}
			/>

			{/* <!-- J. POMNIEJSZENIE --> */}
			<SectionJ pomniejszenie={declaration.J || 0} />

			{/* <!-- K. WYSOKOŚĆ OPŁATY --> */}
			<SectionK ostatecznaStawka={declaration.K} />
		</div>
	);
}

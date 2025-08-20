import roundAndFixToTwoDecimals from "@/lib/roundAndFixToTwoDecimals";
import { ResultRozliczenie, TableProps } from "@/types";
import { Table } from "./Table";
import Div from "./Div";

export default function ResultTable({
	resultRozliczenie,
	resultLiczbaOsob,
	jestRodzinaWielodzietna,
	pokazCalaDeklaracje,
}: {
	resultRozliczenie: ResultRozliczenie | undefined;
	resultLiczbaOsob:
		| {
				liczbaOsob: number;
				total: number;
		  }
		| undefined;
	jestRodzinaWielodzietna: boolean;
	pokazCalaDeklaracje: boolean;
}) {
	const miesiecznaWysokoscOplatypoz30 = resultRozliczenie
		? resultRozliczenie.oplataZaSmieci
		: resultLiczbaOsob
		? resultLiczbaOsob.total
		: undefined;

	if (miesiecznaWysokoscOplatypoz30 === undefined) return;

	const miesiecznaWysokoscZwolnieniaRodzinaWielodzietna =
		jestRodzinaWielodzietna
			? roundAndFixToTwoDecimals(miesiecznaWysokoscOplatypoz30 * 0.2)
			: 0;

	const pomniejszenie =
		roundAndFixToTwoDecimals(
			miesiecznaWysokoscOplatypoz30 -
				miesiecznaWysokoscZwolnieniaRodzinaWielodzietna
		) > 247.03
			? roundAndFixToTwoDecimals(
					miesiecznaWysokoscOplatypoz30 -
						miesiecznaWysokoscZwolnieniaRodzinaWielodzietna -
						247.03
			  )
			: 0;

	const ostatecznaStawka = roundAndFixToTwoDecimals(
		miesiecznaWysokoscOplatypoz30 -
			miesiecznaWysokoscZwolnieniaRodzinaWielodzietna -
			pomniejszenie
	);

	const tableProps: TableProps = {
		resultRozliczenie,
		resultLiczbaOsob,
		jestRodzinaWielodzietna,
		miesiecznaWysokoscOplatypoz30,
		miesiecznaWysokoscZwolnieniaRodzinaWielodzietna,
		pomniejszenie,
		ostatecznaStawka,
	};

	if (pokazCalaDeklaracje) return <Div {...tableProps} />;

	return <Table {...tableProps} />;
}

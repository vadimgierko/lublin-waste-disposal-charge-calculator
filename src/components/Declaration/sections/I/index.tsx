import { FlexRow } from "../../components/FlexRow";
import { InputField } from "../../components/InputField";
import { LabelField } from "../../components/LabelField";
import { SectionHeader } from "../../components/SectionHeader";
import { TableLikeVertical } from "../../components/TableLikeVertical";

type SectionIProps = {
	jestRodzinaWielodzietna: boolean;
	miesiecznaWysokoscOplatypoz34: number;
	miesiecznaWysokoscZwolnieniaRodzinaWielodzietna: number;
};

export function SectionI({
	jestRodzinaWielodzietna,
	miesiecznaWysokoscOplatypoz34,
	miesiecznaWysokoscZwolnieniaRodzinaWielodzietna,
}: SectionIProps) {
	return (
		<div className="section">
			<SectionHeader
				title="I. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI ZWOLNIENIA DLA RODZIN POSIADAJĄCYCH STATUS RODZINY WIELODZIETNEJ,
                    O KTÓRYCH MOWA W USTAWIE Z DNIA 5 GRUDNIA 2014 R. O KARCIE DUŻEJ RODZINY"
				description={`35. ${
					jestRodzinaWielodzietna ? "✅" : "☐"
				} Oświadczam, że na nieruchomości/nieruchomościach zamieszkuje/zamieszkują rodziny posiadające
                    status rodziny wielodzietnej, o których mowa w ustawie z dnia 5 grudnia 2014 r. o Karcie Dużej Rodziny.`}
			/>

			<TableLikeVertical>
				<FlexRow>
					<LabelField
						col={6}
						value="Miesięczna wysokość opłaty, której dotyczy zwolnienie dla rodziny/rodzin wielodzietnych."
					/>
					<LabelField col={3} value="Wysokość zwolnienia" />
					<LabelField col={3} value="Miesięczna wysokość zwolnienia" />
				</FlexRow>

				<FlexRow>
					<InputField
						col={5}
						index={36}
						value={
							miesiecznaWysokoscZwolnieniaRodzinaWielodzietna > 0
								? miesiecznaWysokoscOplatypoz34
								: ""
						}
						jednostka={"zł"}
					/>
					<div className="col-1 grey  text-center">x</div>
					<div className="col-2 grey  text-center">20%</div>
					<div className="col-1 grey  text-center">=</div>
					<InputField
						col={3}
						index={37}
						value={
							miesiecznaWysokoscZwolnieniaRodzinaWielodzietna > 0
								? miesiecznaWysokoscZwolnieniaRodzinaWielodzietna
								: ""
						}
						jednostka={"zł"}
					/>
				</FlexRow>
			</TableLikeVertical>
		</div>
	);
}

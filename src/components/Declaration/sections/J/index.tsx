import { FlexRow } from "../../components/FlexRow";
import { InputField } from "../../components/InputField";
import { LabelField } from "../../components/LabelField";
import { SectionHeader } from "../../components/SectionHeader";

export function SectionJ({ pomniejszenie }: { pomniejszenie: number }) {
	return (
		<div className="section">
			<SectionHeader
				title="J. POMNIEJSZENIE NA PODSTAWIE ART. 6J UST. 3F USTAWY O UTRZYMANIU CZYSTOŚCI I PORZĄDKU W GMINACH"
				description="Opłata za gospodarowanie odpadami komunalnymi na podstawie zużycia wody nie może wynosić więcej niż 7,8% przeciętnego miesięcznego dochodu rozporządzalnego na 1 osobę ogółem za gospodarstwo domowe (ogłaszany przez Prezesa Głównego Urzędu Statystycznego w „Monitorze Polskim” w pierwszym kwartale każdego roku)."
			/>

			<FlexRow>
				<LabelField
					col={8}
					value="Kwota pomniejszenia na podstawie art. 6j ust. 3f (różnica pomiędzy opłatą miesięczną przypadającą na gospodarstwo
                      domowe a opłatą maksymalną za gospodarstwo domowe)."
				/>
				<InputField
					col={4}
					index={38}
					value={pomniejszenie > 0 ? pomniejszenie : ""}
					jednostka={"zł"}
				/>
			</FlexRow>
		</div>
	);
}

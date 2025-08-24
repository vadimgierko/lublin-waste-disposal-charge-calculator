import { FlexRow } from "../../components/FlexRow";
import { InputField } from "../../components/InputField";
import { LabelField } from "../../components/LabelField";
import { SectionHeader } from "../../components/SectionHeader";

export function SectionK({ ostatecznaStawka }: { ostatecznaStawka: number }) {
	return (
		<div className="section">
			<SectionHeader
				title="K. WYSOKOŚĆ MIESIĘCZNEJ OPŁATY ZA GOSPODAROWANIE ODPADAMI KOMUNALNYMI"
				description="Zgodnie z art. 6q ust. 2 u.c.p.g. kwota opłaty za gospodarowanie odpadami komunalnymi nie podlega zaokrąglaniu."
			/>

			<FlexRow>
				<LabelField
					col={8}
					value="Miesięczna wysokość opłaty z poz. 39 pomniejszona o kwotę z poz. 37 i/lub 38 płatna jest z dołu, bez wezwania, w terminach miesięcznych do 15. dnia każdego następnego miesiąca na rachunek Urzędu Miasta Lublin "
				/>
				<InputField
					col={4}
					index={39}
					value={ostatecznaStawka}
					jednostka={"zł"}
				/>
			</FlexRow>
		</div>
	);
}

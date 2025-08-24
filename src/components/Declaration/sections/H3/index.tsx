import { FlexRow } from "../../components/FlexRow";
import { InputField } from "../../components/InputField";
import { LabelField } from "../../components/LabelField";

export function SectionH3({
	miesiecznaWysokoscOplatypoz34,
}: {
	miesiecznaWysokoscOplatypoz34: number;
}) {
	return (
		<div className="section">
			<FlexRow>
				<strong className="col-8" style={{ fontSize: "10pt" }}>
					<LabelField
						col={12}
						value="H.3 Miesięczna wysokość opłaty za gospodarowanie odpadami komunalnymi – suma poz. 30 i 33."
					/>
				</strong>
				<InputField
					col={4}
					index={34}
					value={miesiecznaWysokoscOplatypoz34}
					jednostka={"zł"}
				/>
			</FlexRow>
		</div>
	);
}

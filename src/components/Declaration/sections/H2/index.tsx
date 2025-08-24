import { ResultLiczbaOsob } from "@/types";
import { FlexRow } from "../../components/FlexRow";
import { InputField } from "../../components/InputField";
import { LabelField } from "../../components/LabelField";
import { SectionHeader } from "../../components/SectionHeader";
import { TableLikeVertical } from "../../components/TableLikeVertical";
import { Wyliczenie } from "../../components/Wyliczenie";
import { STAWKA_2025 } from "@/constants";

export function SectionH2({
	resultLiczbaOsob,
}: {
	resultLiczbaOsob: ResultLiczbaOsob | undefined;
}) {
	return (
		<div className="section">
			<SectionHeader
				title="H.2 Z NIERUCHOMOŚCI LUB JEJ CZĘŚCI NIEKORZYSTAJĄCEJ Z SIECI WODOCIĄGOWEJ/NIEWYPOSAŻONEJ W WODOMIERZ
                      LUB DLA KTÓREJ BRAK JEST DANYCH DOTYCZĄCYCH ŚREDNIEGO MIESIĘCZNEGO ZUŻYCIA WODY"
				description="Miesięczna wysokość opłaty za gospodarowanie odpadami komunalnymi stanowi iloczyn przeciętnej normy zużycia wody wynoszącej 3 m3 na jednego mieszkańca zamieszkującego nieruchomość lub jej część i stawki opłaty ustalonej odrębną uchwałą Rady Miasta Lublin."
			/>

			<Wyliczenie />

			<TableLikeVertical>
				<FlexRow>
					<LabelField
						col={3}
						value="Liczba mieszkańców zamieszkujących nieruchomość"
					/>
					<LabelField col={3} value="Przyjęta norma zużycia wody" />
					<LabelField
						col={3}
						value="Stawka opłaty określona odrębną uchwałą Rady Miasta Lublin"
					/>
					<LabelField col={3} value="Miesięczna wysokość opłaty" />
				</FlexRow>

				<FlexRow>
					<InputField
						col={2}
						index={31}
						value={resultLiczbaOsob ? resultLiczbaOsob.liczbaOsob : ""}
						jednostka={undefined}
					/>
					<div className="col-1 grey text-center">x</div>
					<div className="col-2 grey text-center">
						3m<sup>3</sup>/osobę
					</div>
					<div className="col-1 grey  text-center">x</div>
					<InputField
						col={2}
						index={32}
						value={resultLiczbaOsob ? STAWKA_2025 : ""}
						jednostka={"zł/m3"}
					/>
					<div className="col-1 grey  text-center">=</div>
					<InputField
						col={3}
						index={33}
						value={resultLiczbaOsob ? resultLiczbaOsob.total : ""}
						jednostka={"zł"}
					/>
				</FlexRow>
			</TableLikeVertical>
		</div>
	);
}

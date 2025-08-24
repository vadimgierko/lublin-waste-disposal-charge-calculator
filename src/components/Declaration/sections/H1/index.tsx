import { ResultRozliczenie } from "@/types";
import { FlexRow } from "../../components/FlexRow";
import { InputField } from "../../components/InputField";
import { LabelField } from "../../components/LabelField";
import { SectionHeader } from "../../components/SectionHeader";
import { TableLikeVertical } from "../../components/TableLikeVertical";
import { Wyliczenie } from "../../components/Wyliczenie";
import { STAWKA_2025 } from "@/constants";

export function SectionH1({
	resultRozliczenie,
}: {
	resultRozliczenie: ResultRozliczenie | undefined;
}) {
	return (
		<div className="section">
			<SectionHeader
				title="H.1 Z NIERUCHOMOŚCI LUB JEJ CZĘŚCI KORZYSTAJĄCEJ Z SIECI WODOCIĄGOWEJ I WYPOSAŻONEJ W WODOMIERZ"
				description="Miesięczna wysokość opłaty za gospodarowanie odpadami komunalnymi stanowi iloczyn
                      średniomiesięcznego zużycia wody z nieruchomości lub jej części oraz stawki opłaty
                      określonej odrębną uchwałą Rady Miasta Lublin."
				subsection={true}
			/>

			<Wyliczenie />

			<FlexRow>
				<LabelField
					col={8}
					value="Zużycie wody (w m3) za kolejne 6 miesięcy za okres od 1 stycznia do 30 czerwca oraz od 1 lipca do 31 grudnia. Sześciomiesięczny okres rozliczeniowy poprzedza bezpośrednio miesiąc poprzedzający miesiąc, w którym powstał obowiązek złożenia deklaracji."
				/>

				<InputField
					col={4}
					index={27}
					value={resultRozliczenie ? resultRozliczenie.zuzycie : ""}
					jednostka={"m3"}
				/>
			</FlexRow>

			<TableLikeVertical>
				<FlexRow>
					<LabelField
						col={4}
						value="Średniomiesięczne zużycie wody tj. ilość z poz. 27 podzielona przez 6 (z dokładnością do dwóch miejsc po przecinku)"
					/>
					<LabelField
						col={4}
						value="Stawka opłaty określona odrębną uchwałą Rady Miasta Lublin"
					/>
					<LabelField col={4} value="Miesięczna wysokość opłaty" />
				</FlexRow>

				<FlexRow>
					<InputField
						col={3}
						index={28}
						value={resultRozliczenie ? resultRozliczenie.miesieczneZuzycie : ""}
						jednostka={"m3"}
					/>
					<div className="col-1 grey text-center">x</div>
					<InputField
						col={3}
						index={29}
						value={resultRozliczenie ? STAWKA_2025 : ""}
						jednostka={"zł/m3"}
					/>
					<div className="col-1 grey text-center">=</div>
					<InputField
						col={4}
						index={30}
						value={resultRozliczenie ? resultRozliczenie.oplataZaSmieci : ""}
						jednostka={"zł"}
					/>
				</FlexRow>
			</TableLikeVertical>
		</div>
	);
}

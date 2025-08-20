import { TableProps } from "@/types";
import { SectionHeader } from "./SectionHeader";
import { Wyliczenie } from "./Wyliczenie";
import { FlexRow } from "./FlexRow";
import { LabelField } from "./LabelField";
import { InputField } from "./InputField";
import { TableLikeVertical } from "./TableLikeVertical";

export default function Div({
	resultRozliczenie,
	resultLiczbaOsob,
	jestRodzinaWielodzietna,
	miesiecznaWysokoscOplatypoz30,
	miesiecznaWysokoscZwolnieniaRodzinaWielodzietna,
	pomniejszenie,
	ostatecznaStawka,
}: TableProps) {
	return (
		<div id="deklaracja" className="text-start" data-bs-theme="light">
			{/* <!-- H. --> */}
			<SectionHeader
				title="H. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI OPŁATY ZA GOSPODAROWANIE ODPADAMI KOMUNALNYMI DLA NIERUCHOMOŚCI W ZABUDOWIE WIELORODZINNEJ"
				description="Jeżeli do deklaracji zostały dołączone załączniki ZOP, do wyliczenia opłaty
                    należy przyjąć sumę danych wykazanych w załącznikach."
			/>

			{/* <!-- H.1 --> */}
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
						value={resultRozliczenie?.zuzycie}
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
							value={resultRozliczenie?.miesieczneZuzycie}
							jednostka={"m3"}
						/>
						<div className="col-1 grey text-center">x</div>
						<InputField
							col={3}
							index={29}
							value={resultRozliczenie ? "13.20" : ""}
							jednostka={"zł/m3"}
						/>
						<div className="col-1 grey text-center">=</div>
						<InputField
							col={4}
							index={30}
							value={resultRozliczenie ? miesiecznaWysokoscOplatypoz30 : ""}
							jednostka={"zł"}
						/>
					</FlexRow>
				</TableLikeVertical>
			</div>

			{/* <!-- H.2 --> */}
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
							value={resultLiczbaOsob?.liczbaOsob}
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
							value={resultLiczbaOsob ? "13.20" : ""}
							jednostka={"zł/m3"}
						/>
						<div className="col-1 grey  text-center">=</div>
						<InputField
							col={3}
							index={33}
							value={resultLiczbaOsob ? miesiecznaWysokoscOplatypoz30 : ""}
							jednostka={"zł"}
						/>
					</FlexRow>
				</TableLikeVertical>

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
						value={miesiecznaWysokoscOplatypoz30}
						jednostka={"zł"}
					/>
				</FlexRow>
			</div>

			{/* <!-- I. Zwolnienie --> */}
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
									? miesiecznaWysokoscOplatypoz30
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

			{/* <!-- J. POMNIEJSZENIE --> */}
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

			{/* <!-- K. WYSOKOŚĆ OPŁATY --> */}
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
		</div>
	);
}

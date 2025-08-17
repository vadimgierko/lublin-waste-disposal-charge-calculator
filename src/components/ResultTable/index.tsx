import roundAndFixToTwoDecimals from "@/lib/roundAndFixToTwoDecimals";
import { ResultRozliczenie } from "@/types";

export default function ResultTable({
	result,
	jestRodzinaWielodzietna,
}: {
	result: ResultRozliczenie;
	jestRodzinaWielodzietna: boolean;
}) {
	const miesiecznaWysokoscZwolnieniaRodzinaWielodzietna =
		jestRodzinaWielodzietna
			? roundAndFixToTwoDecimals(result.oplataZaSmieci * 0.2)
			: 0;

	const pomniejszenie =
		roundAndFixToTwoDecimals(
			result.oplataZaSmieci - miesiecznaWysokoscZwolnieniaRodzinaWielodzietna
		) > 247.03
			? roundAndFixToTwoDecimals(
					result.oplataZaSmieci -
						miesiecznaWysokoscZwolnieniaRodzinaWielodzietna -
						247.03
			  )
			: 0;

	const ostatecznaStawka = roundAndFixToTwoDecimals(
		result.oplataZaSmieci -
			miesiecznaWysokoscZwolnieniaRodzinaWielodzietna -
			pomniejszenie
	);

	return (
		<>
			<table className="table table-striped table-bordered table-sm text-start">
				<tbody>
					<tr>
						<td>
							<strong>
								H. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI OPŁATY ZA GOSPODAROWANIE
								ODPADAMI KOMUNALNYMI DLA NIERUCHOMOŚCI W ZABUDOWIE
								WIELORODZINNEJ
							</strong>
						</td>
					</tr>
				</tbody>
			</table>
			<table className="table table-striped table-bordered table-sm text-start">
				<tbody>
					<tr>
						<td>
							<strong>
								H.1. Z NIERUCHOMOŚCI LUB JEJ CZĘŚCI KORZYSTAJĄCEJ Z SIECI
								WODOCIĄGOWEJ I WYPOSAŻONEJ W WODOMIERZ
							</strong>
						</td>
					</tr>
				</tbody>
			</table>
			<table className="table table-striped table-bordered table-sm text-start">
				<tbody>
					<tr className="text-center">
						<td>
							<strong>
								Wyliczenie miesięcznej opłaty za gospodarowanie odpadami
								komunalnymi
							</strong>
						</td>
					</tr>
				</tbody>
			</table>
			<table className="table table-striped table-bordered table-sm text-start">
				<tbody>
					<tr>
						<td colSpan={3}>
							Zużycie wody (w m3) za kolejne 6 miesięcy za okres od 1 stycznia
							do 30 czerwca oraz od 1 lipca do 31 grudnia.
						</td>
						<td colSpan={2} className="d-flex justify-content-between">
							<span>
								<small>27.</small>
							</span>
							<span className="text-danger">
								<strong>{result.zuzycie}</strong>
							</span>
							<span>m³</span>
						</td>
					</tr>
				</tbody>
			</table>

			<table className="table table-striped table-bordered table-sm">
				<thead>
					<tr>
						<td colSpan={2}>
							Średniomiesięczne zużycie wody tj. ilość z poz. 27 podzielona
							przez 6 (z dokładnością do dwóch miejsc po przecinku)
						</td>
						<td colSpan={2}>
							Stawka opłaty określona odrębną uchwałą Rady Miasta Lublin
						</td>
						<td>Miesięczna wysokość opłaty</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="d-flex justify-content-between">
							<span>
								<small className="text-start">28.</small>
							</span>
							<span className="text-danger">
								<strong>{result.miesieczneZuzycie}</strong>
							</span>
							<span>m³</span>
						</td>
						<td>x</td>
						<td className="d-flex justify-content-between">
							<span>
								<small>29.</small>
							</span>
							<span className="text-danger">
								<strong>13,20</strong>
							</span>
							<span>zł/m3</span>
						</td>
						<td>=</td>
						<td className="d-flex justify-content-between">
							<span>
								<small>30.</small>
							</span>
							<span className="text-danger">
								<strong>{result.oplataZaSmieci}</strong>
							</span>
							<span>zł</span>
						</td>
					</tr>
				</tbody>
			</table>
			{/** 🚀 TODO 🚀 H.2. Z NIERUCHOMOŚCI LUB JEJ CZĘŚCI NIEKORZYSTAJĄCEJ Z SIECI WODOCIĄGOWEJ / NIEWYPOSAŻONEJ W WODOMIERZ / LUB DLA KTÓREJ BRAK JEST DANYCH DOTYCZĄCYCH ŚREDNIEGO MIESIĘCZNEGO ZUŻYCIA WODY */}

			<table className="table table-striped table-bordered table-sm text-start">
				<tbody>
					<tr>
						<td>
							<strong>
								H.3. Miesięczna wysokość opłaty za gospodarowanie odpadami
								komunalnymi - suma poz. 30 i 33.
							</strong>
						</td>
						<td className="d-flex justify-content-between">
							<span>
								<small>34.</small>
							</span>
							<span className="text-danger">
								<strong>{result.oplataZaSmieci}</strong>
							</span>
							<span>zł</span>
						</td>
					</tr>
				</tbody>
			</table>
			{/** I. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI ZWOLNIENIA DLA RODZIN POSIADAJĄCYCH STATUS RODZINY WIELODZIETNEJ */}
			{jestRodzinaWielodzietna && (
				<>
					<table className="table table-striped table-bordered table-sm text-start">
						<tbody>
							<tr>
								<td colSpan={5}>
									<strong>
										I. OBLICZENIE MIESIĘCZNEJ WYSOKOŚCI ZWOLNIENIA DLA RODZIN
										POSIADAJĄCYCH STATUS RODZINY WIELODZIETNEJ
									</strong>
								</td>
							</tr>
							<tr>
								<td colSpan={5}>
									<span>
										<small>35.</small>
										<input type="checkbox" checked={true} readOnly />
										<span>
											Oświadczam, iż na nieruchomości/nieruchomościach
											zamieszkuje/zamieszkują rodziny posiadające status rodziny
											wielodzietnej...
										</span>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<table className="table table-striped table-bordered table-sm">
						<thead>
							<tr>
								<td colSpan={2}>
									Miesięczna wysokość opłaty, której dotyczy zwolnienie dla
									rodziny/rodzin wielodzietnych
								</td>
								<td colSpan={2}>Wysokość zwolnienia</td>
								<td>Miesięczna wysokość zwolnienia</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="d-flex justify-content-between">
									<span>
										<small className="text-start">36.</small>
									</span>
									<span className="text-danger">
										<strong>{result.oplataZaSmieci}</strong>
									</span>
									<span>zł</span>
								</td>
								<td>x</td>
								<td className="d-flex justify-content-between">
									<span>
										<small>20%</small>
									</span>
								</td>
								<td>=</td>
								<td className="d-flex justify-content-between">
									<span>
										<small>37.</small>
									</span>
									<span className="text-danger">
										<strong>
											{miesiecznaWysokoscZwolnieniaRodzinaWielodzietna}
										</strong>
									</span>
									<span>zł</span>
								</td>
							</tr>
						</tbody>
					</table>
				</>
			)}

			{/** ====================== AUTOMATYCZNE ============================= */}
			{/** J. POMNIEJSZENIE NA PODSTAWIE ART. 6J UST/ 3F USTAWY O UTRZYMANIU CZYSTOŚCI I PORZĄDKU W GMINACH */}
			{pomniejszenie > 0 ? (
				<table className="table table-striped table-bordered table-sm text-start">
					<tbody>
						<tr>
							<td colSpan={5}>
								<strong>
									J. POMNIEJSZENIE NA PODSTAWIE ART 6J UST. 3F USTAWY O
									UTRZYMANIU CZYSTOŚCI O PORZĄDKU W GMINACH
								</strong>
							</td>
						</tr>
						<tr>
							<td>
								Kwota pomniejszenia na podstawie art. 6j ust. 3f (poz. 38)
							</td>
							<td className="d-flex justify-content-between">
								<span>
									<small>38.</small>
								</span>
								<span className="text-danger">
									<strong>{pomniejszenie}</strong>
								</span>
								<span>zł</span>
							</td>
						</tr>
					</tbody>
				</table>
			) : null}

			<table className="table table-striped table-bordered table-sm text-start">
				<tbody>
					<tr>
						<td colSpan={5}>
							<strong>
								K. WYSOKOŚĆ MIESIĘCZNEJ OPŁATY ZA GOSPODAROWANIE ODPADAMI
								KOMUNALNYMI
							</strong>
						</td>
					</tr>
					<tr>
						<td colSpan={3}>
							Miesięczna wysokość opłaty z poz. 39 pomniejszona o kwotę 37 i/lub
							38
						</td>
						<td colSpan={2} className="d-flex justify-content-between">
							<span>
								<small>39.</small>
							</span>
							<span className="text-danger">
								<strong>{ostatecznaStawka}</strong>
							</span>
							<span>zł</span>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

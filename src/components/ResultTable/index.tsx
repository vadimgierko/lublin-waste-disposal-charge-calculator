import { Result } from "@/types";

export default function ResultTable({ result }: { result: Result }) {
	return (
		<>
			<p className="text-end">
				Zużycie wody za 6 miesięcy (poz. 27):{" "}
				<strong>{result.zuzycie} m³</strong>
			</p>

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
							<span>
								<strong>{result.miesieczneZuzycie}</strong>
							</span>
							<span>m³</span>
						</td>
						<td>x</td>
						<td className="d-flex justify-content-between">
							<span>
								<small>29.</small>
							</span>
							<span>
								<strong>13,20</strong>
							</span>
							<span>zł/m3</span>
						</td>
						<td>=</td>
						<td className="d-flex justify-content-between">
							<span>
								<small>30.</small>
							</span>
							<span>
								<strong>{result.oplataZaSmieci}</strong>
							</span>
							<span>zł</span>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

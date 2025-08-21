import Counter from "./Counter";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="d-flex justify-content-between align-items-center mb-3">
			<span>
				&copy; 2025{" "}
				<a href="https://vadimgierko.com" target="_blank">
					Vadim Gierko
				</a>
			</span>

			<span>
				<Link href="/">kalkulator</Link> |{" "}
				<Link href="/o-aplikacji">o aplikacji</Link>
			</span>

			{/* <Link href="/newsletter">zapisz się do newslettera</Link> */}

			{/** UNCOMMENT WHEN STATISTICS WILL BE SUBSTANTIAL ;-) */}
			{/* <Counter /> */}
		</footer>
	);
}

import { Col, Row } from "react-bootstrap";
import Counter from "./Counter";
import Link from "next/link";

export default function Footer() {
	const currDate = new Date();

	const currYear = currDate.getFullYear();

	return (
		<footer>
			<Row>
				<Col md={4}>
				&copy; 2025-{currYear}{" "}
				<a href="https://vadimgierko.com" target="_blank">
					Vadim Gierko
				</a>
				{/* | <a href="https://github.com/vadimgierko/lublin-waste-disposal-charge-calculator" target="_blank">
					[zajrzyj do kodu]
				</a> */}
			</Col>

			<Col md={4}>
				<Counter />
			</Col>

			<Col md={4}>
				<Link href="/">kalkulator</Link> |{" "}
				<Link href="/o-aplikacji">o aplikacji</Link>
			</Col>
			</Row>
		</footer>
	);
}

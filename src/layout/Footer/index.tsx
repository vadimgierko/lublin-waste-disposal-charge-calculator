import ModeToggle from "@/components/ModeToggle";
import Counter from "./Couter";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="d-flex justify-content-between align-items-center">
			<span>
				&copy; 2025{" "}
				<a href="https://vadimgierko.com" target="_blank">
					Vadim Gierko
				</a>
			</span>

			{/* <Link href="/newsletter">zapisz się do newslettera</Link> */}

			{/** UNCOMMENT WHEN STATISTICS WILL BE SUBSTANTIAL ;-) */}
			{/* <Counter /> */}
			<ModeToggle />
		</footer>
	);
}

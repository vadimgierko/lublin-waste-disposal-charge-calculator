import ModeToggle from "@/components/ModeToggle";

export default function Footer() {
	return (
		<footer className="d-flex justify-content-between align-items-center">
			<span>
				&copy; 2025{" "}
				<a href="https://vadimgierko.com" target="_blank">
					Vadim Gierko
				</a>
			</span>
			<ModeToggle />
		</footer>
	);
}

import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className="flex-grow-1">{children}</main>
			<hr />
			<Footer />
		</>
	);
}

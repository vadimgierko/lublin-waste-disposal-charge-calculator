import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { ReactNode } from "react";
import Layout from "@/layout";

export const metadata: Metadata = {
	title: "Kalkulator opłat za śmieci w Lublinie",
	description:
		"Oblicz miesięczną stawkę opłat za śmieci w Lublinie w oparciu o rozliczenie zużycia wody",
	authors: { name: "Vadim Gierko", url: "https://vadimgierko.com" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="pl" data-bs-theme="light">
			<body className="container-sm text-center d-flex flex-column">
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}

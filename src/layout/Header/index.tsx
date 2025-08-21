"use client";

import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
	return (
		<>
			<Navbar
				id="navbar"
				collapseOnSelect
				expand="lg"
				// bg={theme}
				// variant={theme}
				// className="fixed-top shadow"
			>
				<Container>
					<Navbar.Brand>Kalkulator wysokości opłaty za odpady</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Item>
								<Link href="/" passHref legacyBehavior>
									<Nav.Link>kalkulator</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href="/o-aplikacji" passHref legacyBehavior>
									<Nav.Link>o aplikacji</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<ModeToggle />
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<hr />
		</>
	);
}

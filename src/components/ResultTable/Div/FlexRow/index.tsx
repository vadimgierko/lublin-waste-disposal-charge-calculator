import { ReactNode } from "react";

export function FlexRow({ children }: { children: ReactNode }) {
	return <div className="d-flex">{children}</div>;
}

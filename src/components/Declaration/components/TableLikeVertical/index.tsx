import { ReactNode } from "react";

type TableLikeVarticalProps = { children: ReactNode };

export function TableLikeVertical({ children }: TableLikeVarticalProps) {
	return <div className="table-like-vertical">{children}</div>;
}

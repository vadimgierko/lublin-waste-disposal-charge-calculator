"use client";

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface AppStateProps {
	jestRozliczenie: boolean;
	setJestRozliczenie: Dispatch<SetStateAction<boolean>>;
	zuzycie: string;
	setZuzycie: Dispatch<SetStateAction<string>>;
	liczbaOsob: number;
	setLiczbaOsob: Dispatch<SetStateAction<number>>;
	jestRodzinaWelodzietna: boolean;
	setJestRodzinaWielodzietna: Dispatch<SetStateAction<boolean>>;
}

const AppStateContext = createContext<AppStateProps | null>(null);

export const useAppState = () => {
	const appState = useContext(AppStateContext);

	if (!appState) {
		throw new Error("useContenx has to be used within <AppState.Provider>");
	}

	return appState;
};

export default function AppStateProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [jestRozliczenie, setJestRozliczenie] = useState(true);
	// if true, use:
	const [zuzycie, setZuzycie] = useState("");
	// if false, use:
	const [liczbaOsob, setLiczbaOsob] = useState(1);
	// dodatkowo:
	const [jestRodzinaWelodzietna, setJestRodzinaWielodzietna] = useState(false);

	const value: AppStateProps = {
		jestRozliczenie,
		setJestRozliczenie,
		zuzycie,
		setZuzycie,
		liczbaOsob,
		setLiczbaOsob,
		jestRodzinaWelodzietna,
		setJestRodzinaWielodzietna,
	};

	return (
		<AppStateContext.Provider value={value}>
			{children}
		</AppStateContext.Provider>
	);
}

export type Theme = "light" | "dark";

export type ResultRozliczenie = {
	zuzycie: number;
	miesieczneZuzycie: number;
	oplataZaSmieci: number;
};

export type ResultLiczbaOsob = {
	liczbaOsob: number;
	oplataZaSmieci: number;
};

export type FormData = {
	jestRodzinaWelodzietna: boolean;
	jestRozliczenie: boolean;
	zuzycie: string;
	liczbaOsob: number;
};

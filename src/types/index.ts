export type Theme = "light" | "dark";

export type ResultRozliczenie = {
	zuzycie: number;
	miesieczneZuzycie: number;
	oplataZaSmieci: number;
};

export type ResultLiczbaOsob = {
	liczbaOsob: number;
	total: number;
};

export type DeclarationInput = ({
	zuzycie: number;
	liczbaOsob?: undefined;
} | {
	liczbaOsob: number;
	zuzycie?: undefined;
}) & {
	jestRodzinaWielodzietna: boolean;
	od_04_2026: boolean;
}
// | {
// 		zuzycie: number;
// 		liczbaOsob?: undefined;
// 		jestRodzinaWielodzietna: boolean;
// 		od_04_2026: boolean;
//   }
// | {
// 		liczbaOsob: number;
// 		zuzycie?: undefined;
// 		jestRodzinaWielodzietna: boolean;
// 		od_04_2026: boolean;
//   };

export type DeclarationData = {
	H1: ResultRozliczenie | undefined;
	H2: ResultLiczbaOsob | undefined;
	H3: number;
	I: number | undefined;
	J: number | undefined;
	K: number;
};

import { describe, it, expect } from "vitest";
import { calculateDeclaration } from "./calculateDeclaration";
import { DeclarationData, DeclarationInput } from "@/types";
import { MAKSYMALNA_OPLATA_2025, MAKSYMALNA_OPLATA_2026 } from "@/constants";

const TESTS: Array<{
    name: string;
    expectedResult: DeclarationData;
    input: DeclarationInput;
}> = [
        {
            name: "1. WODA - ZWOLNIENIE DLA RODZINY WIELODZIETNEJ",
            expectedResult: {
                H1: {
                    zuzycie: 126,
                    miesieczneZuzycie: 21,
                    oplataZaSmieci: 277.2
                },
                H2: undefined,
                H3: 277.2,
                I: 55.44,
                J: undefined,
                K: 221.76
            },
            input: { zuzycie: 126, jestRodzinaWielodzietna: true, od_04_2026: false }
        },
        {
            name: "2. RYCZAŁT - BRAK DANYCH O ZUŻYCIU WODY / BRAK WODOMIERZA / NOWY MIESZKANIEC",
            expectedResult: {
                H1: undefined,
                H2: {
                    liczbaOsob: 2,
                    total: 79.2
                },
                H3: 79.2,
                I: undefined,
                J: undefined,
                K: 79.2
            },
            input: { liczbaOsob: 2, jestRodzinaWielodzietna: false, od_04_2026: false }
        },
        {
            name: "3.a. WODA - PRZEKROCZENIE 7,8% PRZECIĘTNEGO DOCHODU (DO 04 2026)",
            expectedResult: {
                H1: {
                    zuzycie: 120,
                    miesieczneZuzycie: 20,
                    oplataZaSmieci: 264
                },
                H2: undefined,
                H3: 264,
                I: undefined,
                J: 16.97,
                K: MAKSYMALNA_OPLATA_2025
            },
            input: { zuzycie: 120, jestRodzinaWielodzietna: false, od_04_2026: false }
        },
        {
            name: "3.b. WODA - PRZEKROCZENIE 7,8% PRZECIĘTNEGO DOCHODU (OD 04 2026)",
            expectedResult: {
                H1: {
                    zuzycie: 140,
                    miesieczneZuzycie: 23.33,
                    oplataZaSmieci: 307.96
                },
                H2: undefined,
                H3: 307.96,
                I: undefined,
                J: 34.94,
                K: MAKSYMALNA_OPLATA_2026
            },
            input: { zuzycie: 140, jestRodzinaWielodzietna: false, od_04_2026: true }
        },
        {
            name: "4. WODA - BEZ ZWOLNIENIA",
            expectedResult: {
                H1: {
                    zuzycie: 56,
                    miesieczneZuzycie: 9.33,
                    oplataZaSmieci: 123.16
                },
                H2: undefined,
                H3: 123.16,
                I: undefined,
                J: undefined,
                K: 123.16
            },
            input: { zuzycie: 56, jestRodzinaWielodzietna: false, od_04_2026: false }
        },
    ];

describe.each(TESTS)("$name", ({ input, expectedResult }) => {
    it("calculates correctly", () => {
        expect(calculateDeclaration(input)).toStrictEqual(expectedResult);
    });
});
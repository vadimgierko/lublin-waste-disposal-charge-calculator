import { describe, it, expect } from "vitest";
import roundAndFixToTwoDecimals from "./roundAndFixToTwoDecimals";

describe("roundAndFixToTwoDecimals", () => {
	it("should round to two decimals normally", () => {
		expect(roundAndFixToTwoDecimals(1.234)).toBe(1.23);
		expect(roundAndFixToTwoDecimals(1.235)).toBe(1.24);
		expect(roundAndFixToTwoDecimals(1.236)).toBe(1.24);
		expect(roundAndFixToTwoDecimals(0.049)).toBe(0.05);
	});

	it("should handle whole numbers", () => {
		expect(roundAndFixToTwoDecimals(5)).toBe(5.0);
	});

	it("should handle floating point imprecision", () => {
		expect(roundAndFixToTwoDecimals(0.1 + 0.2)).toBe(0.3); // not 0.30000000000000004
		expect(roundAndFixToTwoDecimals(0.01 + 0.02)).toBe(0.03);
		expect(roundAndFixToTwoDecimals(0.001 + 0.004)).toBe(0.01);
	});
});

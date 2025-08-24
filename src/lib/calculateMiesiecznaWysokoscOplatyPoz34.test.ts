import { describe, expect, it } from "vitest";
import { calculateMiesiecznaWysokoscOplatyPoz34 } from "./calculateMiesiecznaWysokoscOplatyPoz34";

describe("calculateMiesiecznaWysokoscOplatyPoz34", () => {
	it("should return undefined", () => {
		expect(calculateMiesiecznaWysokoscOplatyPoz34(undefined, undefined)).toBe(
			undefined
		);
	});

	it("should return number 5", () => {
		expect(calculateMiesiecznaWysokoscOplatyPoz34(undefined, 5)).toBe(5);
		expect(calculateMiesiecznaWysokoscOplatyPoz34(5, undefined)).toBe(5);
	});

	it("should return number 10", () => {
		expect(calculateMiesiecznaWysokoscOplatyPoz34(5, 5)).toBe(10);
	});
});

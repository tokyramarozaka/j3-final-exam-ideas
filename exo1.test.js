import { assert } from "chai";
import { describe, it } from "mocha";
import { evaluatePrice } from "./exo1.js";

describe('evaluatePrice (3 points)', () => {
    it('should return the individual ticket price if it is cheaper than the group ticket (0.5 pt)', () => {
        const input = [6, 50, 8];
        const expectedPrice = 48;
        const actualPrice = evaluatePrice(input);
        assert.equal(actualPrice, expectedPrice);
    });

    it('should return the group ticket price if it is cheaper than the individual tickets (0.5 pt)', () => {
        const input = [6, 50, 20];
        const expectedPrice = 100;
        const actualPrice = evaluatePrice(input);
        assert.equal(actualPrice, expectedPrice);
    });

    it('should handle edge cases with very large group sizes (0.5 pt)', () => {
        const input = [6, 50, 12345];
        const expectedPrice = 61750;
        const actualPrice = evaluatePrice(input);
        assert.equal(actualPrice, expectedPrice);
    });

    it('should handle edge cases with very low individual ticket prices (0.5 pt)', () => {
        const input = [0.01, 50, 26];
        const expectedPrice = 0.26;
        const actualPrice = evaluatePrice(input);
        assert.equal(actualPrice, expectedPrice);
    });

    it('should handle edge cases by picking individual price when group ticket prices are high (0.5 pt)', () => {
        const input = [6, 10000, 26];
        const expectedPrice = 156;
        const actualPrice = evaluatePrice(input);
        assert.equal(actualPrice, expectedPrice);
    });

    it('should handle edge cases by picking group tickets when they are free (0.5 pt)', () => {
        const input = [6, 0, 26];
        const expectedPrice = 0;
        const actualPrice = evaluatePrice(input);
        assert.equal(actualPrice, expectedPrice);
    });
});
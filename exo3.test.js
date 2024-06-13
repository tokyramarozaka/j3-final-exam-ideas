import { expect } from "chai";
import { describe, it } from "mocha";
import { getMaxVenue } from "./exo3.js";

describe('getMaxVenue (5 points)', () => {
    it('should return 1 when there are two people and they do not intersect (1 point)', () => {
        const n = 2;
        const input = ['0 360000', '720000 800000'];
        const expectedMax = 1;
        const actualMax = getMaxVenue(n, input);
        expect(actualMax).to.equal(expectedMax);
    });

    it('should return 2 when there are two participants, and they intersect (1 point)', () => {
        const n = 2;
        const input = ['0 3600000', '1800000 7200000'];
        const expectedMax = 2;
        const actualMax = getMaxVenue(n, input);
        expect(actualMax).to.equal(expectedMax);
    });

    it('should return 1 when there are multiple participants with no intersection (1 point)', () => {
        const n = 4;
        const input = ['1000000 2000000', '3000000 4000000', '5000000 6000000', '7000000 8000000'];
        const expectedMax = 1;
        const actualMax = getMaxVenue(n, input);
        expect(actualMax).to.equal(expectedMax);
      });
          
    it('should handle multiple intersecting time intervals (1 point)', () => {
        const n = 5;
        const input = ['0 3600000', '1800000 7200000', '4800000 6000000', '3000000 5400000', '6000000 9000000'];
        const expectedMax = 3;
        const actualMax = getMaxVenue(n, input);
        expect(actualMax).to.equal(expectedMax);
    });

    it('should return n when all time intervals intersects or overlaps (1 point)', () => {
        const n = 4; 
        const input = ['0 2000', '100 1900', '200 1800', '300 1700'];
        const expectedMax = n; 
        const actualMax = getMaxVenue(n, input);
        expect(actualMax).to.equal(expectedMax);
    })
});

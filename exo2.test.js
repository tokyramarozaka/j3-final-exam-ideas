import { expect } from 'chai';
import { describe, it } from 'mocha';
import { reorganize } from './exo2.js';

describe('reorganize (4 points)', () => {
  it('should return an empty string for an empty input (0.5 point)', () => {
    const input = '';
    const expectedOutput = '';
    const actualOutput = reorganize(input);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should group and reorder letters, ignoring case and ignoring alphabetical order (1 point)', () => {
    const input = 'abdAbBce';
    const expectedOutput = 'aAbbBdce';
    const actualOutput = reorganize(input);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should handle multiple occurrences of the first letter (without consideration for any alphabetical order) (0.5 point)', () => {
    const input = 'adAabaB';
    const expectedOutput = 'aAaadbB';
    const actualOutput = reorganize(input);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should handle strings with repeated characters and capital letters at the same time (1.5 point)', () => {
    const input = 'hElLo WoRlD!';
    const expectedOutput = 'hElLloo WRD!';
    const actualOutput = reorganize(input);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should handle strings with special characters such as !?@#%^* (0.5 point)', () => {
    const input = '!?@#%^*!?';
    const expectedOutput = '!!??@#%^*';
    const actualOutput = reorganize(input);
    expect(actualOutput).to.equal(expectedOutput);
  });
});
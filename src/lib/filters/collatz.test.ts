import { describe, it, expect } from 'vitest';
import { collatzs } from './collatz';

describe('Collatz filter', () => {
  it('Collatz a sequence', () => {
    const input = [4, 2, 8, 3, 9, 4, 10];
    const expected = [2, 1, 4, 10, 28, 2, 5];
    expect(collatzs(input)).toEqual(expected);
  });
});

describe('Collatz filter FAIL', () => {
  it('Collatz a sequence', () => {
    const input = [4, 2, 8, 3, 9, 4, 10];
    const expected = [7979, 2243, 797, 132, 111, 0, 99];
    expect(collatzs(input)).toEqual(expected);
  });
});
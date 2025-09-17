// src/lib/combined/combined.test.ts
import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';
import { collatzs } from '../collatz';

describe('combined (mine → peer)', () => {
  it('Collatz a sequence', () => {
    const input = [4, 2, 8, 3, 9, 4, 10];
    const expected = [2, 1, 4, 10, 28, 2, 5];
    expect(collatzs(input)).toEqual(expected);
  });

  it('Nathan Test', () => {
    const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6];
    const expected = [4, 6, 14, 17, 26, 30, 40, 45, 56, 62];
    expect(combinedFilter(input)).toEqual(expected);
  });
});


//import { describe, it, expect } from 'vitest';

// src/lib/combined/combined.ts
//import { cubes as myCubes } from '$lib/filters/cube';
import { mapSequ } from 'peer-filter-c00281281/src/lib/filters/RunningTotal';

export function combinedFilter(xs: number[]): number[] {
  //const afterMine = myCubes(xs);
  return mapSequ(xs);
}
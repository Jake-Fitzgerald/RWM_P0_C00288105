// scripts/emit-results.mjs
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

console.log("Test break");

const mod = await import(pathToFileURL('./src/lib/filters/combined/combined.ts').href);
const { combinedFilter } = mod;

const inputs = {
  basic: [1, 3, 5, 7, 9, 999],
  edges: [],
  zeros: [0],
  small: [2, 3, 4]
};


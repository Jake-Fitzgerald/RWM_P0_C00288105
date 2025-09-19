// scripts/emit-results.mjs
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { collatzs} from "../src/lib/filters/collatz"


const mod = await import(pathToFileURL('./src/lib/filters/combined/combined.ts').href);
const { combinedFilter } = mod;

const inputs = {
  jake_inputs: [4, 2, 8, 3, 9, 4, 10],
  nathan_inputs: [4, 2, 8, 3, 9, 4, 10, 5, 11, 6]
};

const outputs = {};

for (const [array_name, array] of Object.entries(inputs)) {
  if (array_name == "jake_inputs"){
    outputs[array_name] = collatzs(array);
  }
  else {
    outputs[array_name] = combinedFilter(array);
  }
}



const artefact = { filterOrder: 'mine→peer', inputs, outputs };
writeFileSync('static/combined-results.json', JSON.stringify(artefact, null, 2));
console.log('Wrote static/combined-results.json');

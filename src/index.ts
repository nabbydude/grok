import { readFileSync, writeFileSync } from "fs";

import { InputCard } from "@/types/input";

import { parseCard } from "@/branches/card/_";
import { Node } from "@/reader/result";

const output: (Node & { name: string; })[] = [];
const results = { successes: 0, failures: 0, partials: 0 };

const IN_FILE_INDEX = 2;
const IN_FILE = process.argv[IN_FILE_INDEX];
const OUT_FILE_INDEX = 3;
const OUT_FILE = process.argv[OUT_FILE_INDEX];

const PERCENTAGE_MULT = 100;
const SIGNIFICANT_DIGITS = 5;
const LINE_LENGTH = 50;

function parseBatch(cards: InputCard[]) {
  for (let i = 0, l = cards.length; i < l; i++) {
    let log = `${i + 1}/${cards.length} (`;
    log += `${
      (i + 1) / cards.length * PERCENTAGE_MULT
    }`.substr(0, SIGNIFICANT_DIGITS);
    log += `%) ${cards[i].imageName}`;

    const res = parseCard.exec(cards[i].text, 0);

    if (log.length < LINE_LENGTH) log += ".".repeat(LINE_LENGTH - log.length);

    if (!res) {
      results.failures++;
      log += "N";
    }
    else if (res.end !== cards[i].text.length) {
      results.partials++;
      log += "..P";
    }
    else {
      results.successes++;
      log += "....Y";
    }

    // tslint:disable-next-line:no-console
     console.log(log);

    if (res) output.push({ name: cards[i].imageName, ...res });
  }

  writeFileSync(
    OUT_FILE,
    JSON.stringify(output, undefined, "  ")
  );

  // tslint:disable-next-line:no-console
  console.log(
    `parsing complete, ${
      results.successes
    } successes, ${
      results.partials
    } partials, ${
      results.failures
     } falures. (${
       results.successes / cards.length * PERCENTAGE_MULT
     }%)`
  );
}

const batch: InputCard[] = JSON.parse(readFileSync(IN_FILE, "utf8"));

parseBatch(batch);

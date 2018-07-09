import { Pattern, r } from "@/r";

import { ConstantValue } from "@/types/value";

const ONES = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

export const parseConstantValue: Pattern<ConstantValue> = r.anyOf(
  r`an?`.as(_ => <ConstantValue>{ type: "constant", value: 1 }),
  r.reg(/\d+/).as(([digit]) => <ConstantValue>{
    type: "constant",
    value: Number(digit)
  }),
  r.reg(
    // tslint:disable-next-line:max-line-length
    /((?:twen|thir|for|fif|six|seven|eigh|nine)ty)(?:-(one|two|three|four|five|six|seven|eight|nine))?/i
  ).as(([_, tens, ones]) => <ConstantValue>{
    type: "constant",
    value: (
      TENS.indexOf(tens.toLowerCase()) * 10 +
      (ones ? ONES.indexOf(ones.toLowerCase()) : 0)
    )
  }),
  r.reg(
    // tslint:disable-next-line:max-line-length
    /zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|(?:thir|four|fif|six|seven|eigh|nine)teen/i
  ).as(([ones]) => <ConstantValue>{
    type: "constant",
    value: ONES.indexOf(ones.toLowerCase())
  })
);

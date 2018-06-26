# Grok

A Node.js app for parsing *Magic: The Gathering*® rules text into an abstract syntax tree of card characteristics and game actions.


## Installing

1. `npm install` to intall all the required dependencies.
2. `npm run build` to run the typescript and babel transpilers.

The transpiled js will be ready in `/bin`.

### Prerequisites

Node.js, available at https://nodejs.org/

## Running the app

Run `/bin/index.js` or the included npm script with two command line arguments, like so:
```
node ./bin/index <input file> <output file>
or
npm run start <input file> <output file>
```
...where `<input file>` is the path to a JSON-formatted  array of MTGJSON-style card objects (only a `text` and `name` field are really required) and `<output file>` is the path Grok will output to.

Grok outputs a JSON-formatted array of card objects, each with a `name` and `success` field. `success` will be `true` if the entire card was parsed successfully, and `false` if it wasn't. if `success` is `true`, the object will also contain `end` and `payload` fields, where end is the length of the parsed text and `payload` is a representation of the card-text as an abstract syntax tree, the schema of which is evolving with the development of the project.

## Authors

* **Riley Froude** - [nabbydude](https://github.com/nabbydude)

## Legal

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Thanks

* [Wizards of the Coast](https://company.wizards.com/), for the great game they have made and continue to support.
* [MTGJSON](https://mtgjson.com/), for files that I have run dozens, if not hundreds of scripts on.

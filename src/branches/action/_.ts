import { r } from "@/r";

import { Action } from "@/types/action";

import { parseAttachAction      } from "./attach";
import { parseBolsterAction     } from "./bolster";
import { parseDamageAction      } from "./damage";
import { parseDrawAction        } from "./draw";
import { parseFatesealAction    } from "./fateseal";
import { parseGainLifeAction    } from "./gain-life";
import { parseInvestigateAction } from "./investigate";
import { parseLoseLifeAction    } from "./lose-life";
import { parseMonstrosityAction } from "./monstrosity";
import { parsePopulateAction    } from "./populate";
import { parseProliferateAction } from "./proliferate";
import { parseScryAction        } from "./scry";
import { parseSupportAction     } from "./support";

import { parseScopedAction      } from "./scoped";

export const parseAction = r.anyOf<Action>(
  parseAttachAction,
  parseBolsterAction,
  parseDamageAction,
  parseDrawAction,
  parseFatesealAction,
  parseGainLifeAction,
  parseInvestigateAction,
  parseLoseLifeAction,
  parseMonstrosityAction,
  parsePopulateAction,
  parseProliferateAction,
  parseScryAction,
  parseSupportAction,
  
  parseScopedAction
);

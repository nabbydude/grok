import { Pattern, r } from "@/r";

import { Action } from "@/types/action";

import { parseAttachAction      } from "@/branches/action/attach";
import { parseBolsterAction     } from "@/branches/action/bolster";
import { parseDamageAction      } from "@/branches/action/damage";
import { parseDrawAction        } from "@/branches/action/draw";
import { parseFatesealAction    } from "@/branches/action/fateseal";
import { parseGainLifeAction    } from "@/branches/action/gain-life";
import { parseInvestigateAction } from "@/branches/action/investigate";
import { parseLoseLifeAction    } from "@/branches/action/lose-life";
import { parseMonstrosityAction } from "@/branches/action/monstrosity";
import { parsePopulateAction    } from "@/branches/action/populate";
import { parseProliferateAction } from "@/branches/action/proliferate";
import { parseScopedAction      } from "@/branches/action/scoped";
import { parseScryAction        } from "@/branches/action/scry";
import { parseSupportAction     } from "@/branches/action/support";

export const parseAction: Pattern<Action> = r.defer(() => r.anyOf<Action>(
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
));

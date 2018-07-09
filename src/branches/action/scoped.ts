import { Pattern, r } from "@/r";

import { ScopedAction } from "@/types/action";

import { parseScope } from "@/branches/scope/_";

export const parseScopedAction: Pattern<ScopedAction> = r`${r.many(
  r.anyOf(
    r`counters?`.as(_ => <"counter">"counter"),
    r`destroys?`.as(_ => <"destroy">"destroy"),
    r`detains?`.as(_ => <"detain">"detain"),
    r`exiles?`.as(_ => <"exile">"exile"),
    r`goads?`.as(_ => <"goad">"goad"),
    r`manifests?`.as(_ => <"manifest">"manifest"),
    r`reveals?`.as(_ => <"reveal">"reveal"),
    r`taps?`.as(_ => <"tap">"tap"),
    r`transforms?`.as(_ => <"transform">"transform"),
    r`unattach(es)?`.as(_ => <"unattach">"unattach"),
    r`untaps?`.as(_ => <"untap">"untap")
  ),
  r`, `,
  r`,? and `
)} ${
  parseScope
}`.as(([actions, scope]) => <ScopedAction>{ type: "scoped", actions, scope });

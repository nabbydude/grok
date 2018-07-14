import { Pattern, r } from "@/r";

import { OwnedByObjectQualifier } from "@/types/object-qualifier";

import { parseScope } from "@/branches/scope/_";

export const parseOwnedByObjectQualifier: Pattern<OwnedByObjectQualifier> = (
  r.defer(() => r.anyOf(
    r`owned by ${parseScope}`,
    r`${parseScope} owns?`
  ).as(([scope]) => <OwnedByObjectQualifier>{ type: "ownedBy", scope }))
);

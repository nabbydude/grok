import { r } from "@/r";

import { OwnedByObjectQualifier } from "@/types/object-qualifier";

import { parseScope } from "@/branches/scope/_";

export const parseOwnedByObjectQualifier = r.anyOf(
  r`owned by ${parseScope}`,
  r`${parseScope} owns?`
).as(([scope]) => <OwnedByObjectQualifier>{ type: "ownedBy", scope });

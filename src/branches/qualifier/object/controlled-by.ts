import { Pattern, r } from "@/r";

import { ControlledByObjectQualifier } from "@/types/object-qualifier";

import { parseScope } from "@/branches/scope/_";

export const parseControlledByObjectQualifier: (
  Pattern<ControlledByObjectQualifier>
) = r.defer(() => r.anyOf(
  r`controlled by ${parseScope}`,
  r`${parseScope} controls?`
).as(
  ([scope]) => <ControlledByObjectQualifier>{ type: "controlledBy", scope }
));

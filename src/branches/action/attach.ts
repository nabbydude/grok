import { r } from "@/r";

import { AttachAction } from "@/types/action";

import { parseScope } from "@/branches/scope/_";

export const parseAttachAction = r`attach(es)? ${
  parseScope
} to ${
  parseScope
}`.as(([attacher, attachee]) => <AttachAction>{
  type: "attach",
  attacher,
  attachee
});

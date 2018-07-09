import { Pattern, r } from "@/r";

import { KeywordAbility                      } from "@/types/ability";

import { parseAbsorbKeywordAbility           } from "@/branches/ability/keyword/absorb";
import { parseAffinityKeywordAbility         } from "@/branches/ability/keyword/affinity";
import { parseAfflictKeywordAbility          } from "@/branches/ability/keyword/afflict";
import { parseAftermathKeywordAbility        } from "@/branches/ability/keyword/aftermath";
import { parseAmplifyKeywordAbility          } from "@/branches/ability/keyword/amplify";
import { parseAnnihilatorKeywordAbility      } from "@/branches/ability/keyword/annihilator";
import { parseAuraSwapKeywordAbility         } from "@/branches/ability/keyword/aura-swap";
import { parseAwakenKeywordAbility           } from "@/branches/ability/keyword/awaken";
import { parseBandingKeywordAbility          } from "@/branches/ability/keyword/banding";
import { parseBattleCryKeywordAbility        } from "@/branches/ability/keyword/battle-cry";
import { parseBestowKeywordAbility           } from "@/branches/ability/keyword/bestow";
import { parseBloodthirstKeywordAbility      } from "@/branches/ability/keyword/bloodthirst";
import { parseBushidoKeywordAbility          } from "@/branches/ability/keyword/bushido";
import { parseBuybackKeywordAbility          } from "@/branches/ability/keyword/buyback";
import { parseCascadeKeywordAbility          } from "@/branches/ability/keyword/cascade";
import { parseChampionKeywordAbility         } from "@/branches/ability/keyword/champion";
import { parseChangelingKeywordAbility       } from "@/branches/ability/keyword/changeling";
import { parseCipherKeywordAbility           } from "@/branches/ability/keyword/cipher";
import { parseConspireKeywordAbility         } from "@/branches/ability/keyword/conspire";
import { parseConvokeKeywordAbility          } from "@/branches/ability/keyword/convoke";
import { parseCrewKeywordAbility             } from "@/branches/ability/keyword/crew";
import { parseCumulativeUpkeepKeywordAbility } from "@/branches/ability/keyword/cumulative-upkeep";
import { parseCyclingKeywordAbility          } from "@/branches/ability/keyword/cycling";
import { parseDashKeywordAbility             } from "@/branches/ability/keyword/dash";
import { parseDeathtouchKeywordAbility       } from "@/branches/ability/keyword/deathtouch";
import { parseDefenderKeywordAbility         } from "@/branches/ability/keyword/defender";
import { parseDelveKeywordAbility            } from "@/branches/ability/keyword/delve";
import { parseDethroneKeywordAbility         } from "@/branches/ability/keyword/dethrone";
import { parseDevoidKeywordAbility           } from "@/branches/ability/keyword/devoid";
import { parseDevourKeywordAbility           } from "@/branches/ability/keyword/devour";
import { parseDoubleStrikeKeywordAbility     } from "@/branches/ability/keyword/double-strike";
import { parseDredgeKeywordAbility           } from "@/branches/ability/keyword/dredge";
import { parseEchoKeywordAbility             } from "@/branches/ability/keyword/echo";
import { parseEmbalmKeywordAbility           } from "@/branches/ability/keyword/embalm";
import { parseEmergeKeywordAbility           } from "@/branches/ability/keyword/emerge";
import { parseEnchantKeywordAbility          } from "@/branches/ability/keyword/enchant";
import { parseEntwineKeywordAbility          } from "@/branches/ability/keyword/entwine";
import { parseEpicKeywordAbility             } from "@/branches/ability/keyword/epic";
import { parseEquipKeywordAbility            } from "@/branches/ability/keyword/equip";
import { parseEscalateKeywordAbility         } from "@/branches/ability/keyword/escalate";
import { parseEternalizeKeywordAbility       } from "@/branches/ability/keyword/eternalize";
import { parseEvokeKeywordAbility            } from "@/branches/ability/keyword/evoke";
import { parseEvolveKeywordAbility           } from "@/branches/ability/keyword/evolve";
import { parseExaltedKeywordAbility          } from "@/branches/ability/keyword/exalted";
import { parseExploitKeywordAbility          } from "@/branches/ability/keyword/exploit";
import { parseExtortKeywordAbility           } from "@/branches/ability/keyword/extort";
import { parseFabricateKeywordAbility        } from "@/branches/ability/keyword/fabricate";
import { parseFadingKeywordAbility           } from "@/branches/ability/keyword/fading";
import { parseFearKeywordAbility             } from "@/branches/ability/keyword/fear";
import { parseFirstStrikeKeywordAbility      } from "@/branches/ability/keyword/first-strike";
import { parseFlankingKeywordAbility         } from "@/branches/ability/keyword/flanking";
import { parseFlashKeywordAbility            } from "@/branches/ability/keyword/flash";
import { parseFlashbackKeywordAbility        } from "@/branches/ability/keyword/flashback";
import { parseFlyingKeywordAbility           } from "@/branches/ability/keyword/flying";
import { parseForecastKeywordAbility         } from "@/branches/ability/keyword/forecast";
import { parseFortifyKeywordAbility          } from "@/branches/ability/keyword/fortify";
import { parseFrenzyKeywordAbility           } from "@/branches/ability/keyword/frenzy";
import { parseFuseKeywordAbility             } from "@/branches/ability/keyword/fuse";
import { parseGraftKeywordAbility            } from "@/branches/ability/keyword/graft";
import { parseGravestormKeywordAbility       } from "@/branches/ability/keyword/gravestorm";
import { parseHasteKeywordAbility            } from "@/branches/ability/keyword/haste";
import { parseHauntKeywordAbility            } from "@/branches/ability/keyword/haunt";
import { parseHexproofKeywordAbility         } from "@/branches/ability/keyword/hexproof";
import { parseHiddenAgendaKeywordAbility     } from "@/branches/ability/keyword/hidden-agenda";
import { parseHideawayKeywordAbility         } from "@/branches/ability/keyword/hideaway";
import { parseHorsemanshipKeywordAbility     } from "@/branches/ability/keyword/horsemanship";
import { parseImproviseKeywordAbility        } from "@/branches/ability/keyword/improvise";
import { parseIndestructibleKeywordAbility   } from "@/branches/ability/keyword/indestructible";
import { parseInfectKeywordAbility           } from "@/branches/ability/keyword/infect";
import { parseIngestKeywordAbility           } from "@/branches/ability/keyword/ingest";
import { parseIntimidateKeywordAbility       } from "@/branches/ability/keyword/intimidate";
import { parseKickerKeywordAbility           } from "@/branches/ability/keyword/kicker";
import { parseLandwalkKeywordAbility         } from "@/branches/ability/keyword/landwalk";
import { parseLevelUpKeywordAbility          } from "@/branches/ability/keyword/level-up";
import { parseLifelinkKeywordAbility         } from "@/branches/ability/keyword/lifelink";
import { parseLivingWeaponKeywordAbility     } from "@/branches/ability/keyword/living-weapon";
import { parseMadnessKeywordAbility          } from "@/branches/ability/keyword/madness";
import { parseMeleeKeywordAbility            } from "@/branches/ability/keyword/melee";
import { parseMenaceKeywordAbility           } from "@/branches/ability/keyword/menace";
import { parseMiracleKeywordAbility          } from "@/branches/ability/keyword/miracle";
import { parseModularKeywordAbility          } from "@/branches/ability/keyword/modular";
import { parseMorphKeywordAbility            } from "@/branches/ability/keyword/morph";
import { parseMyriadKeywordAbility           } from "@/branches/ability/keyword/myriad";
import { parseNinjutsuKeywordAbility         } from "@/branches/ability/keyword/ninjutsu";
import { parseOfferingKeywordAbility         } from "@/branches/ability/keyword/offering";
import { parseOutlastKeywordAbility          } from "@/branches/ability/keyword/outlast";
import { parseOverloadKeywordAbility         } from "@/branches/ability/keyword/overload";
import { parsePartnerKeywordAbility          } from "@/branches/ability/keyword/partner";
import { parsePersistKeywordAbility          } from "@/branches/ability/keyword/persist";
import { parsePhasingKeywordAbility          } from "@/branches/ability/keyword/phasing";
import { parsePoisonousKeywordAbility        } from "@/branches/ability/keyword/poisonous";
import { parseProtectionKeywordAbility       } from "@/branches/ability/keyword/protection";
import { parseProvokeKeywordAbility          } from "@/branches/ability/keyword/provoke";
import { parseProwessKeywordAbility          } from "@/branches/ability/keyword/prowess";
import { parseProwlKeywordAbility            } from "@/branches/ability/keyword/prowl";
import { parseRampageKeywordAbility          } from "@/branches/ability/keyword/rampage";
import { parseReachKeywordAbility            } from "@/branches/ability/keyword/reach";
import { parseReboundKeywordAbility          } from "@/branches/ability/keyword/rebound";
import { parseRecoverKeywordAbility          } from "@/branches/ability/keyword/recover";
import { parseReinforceKeywordAbility        } from "@/branches/ability/keyword/reinforce";
import { parseRenownKeywordAbility           } from "@/branches/ability/keyword/renown";
import { parseReplicateKeywordAbility        } from "@/branches/ability/keyword/replicate";
import { parseRetraceKeywordAbility          } from "@/branches/ability/keyword/retrace";
import { parseRippleKeywordAbility           } from "@/branches/ability/keyword/ripple";
import { parseScavengeKeywordAbility         } from "@/branches/ability/keyword/scavenge";
import { parseShadowKeywordAbility           } from "@/branches/ability/keyword/shadow";
import { parseShroudKeywordAbility           } from "@/branches/ability/keyword/shroud";
import { parseSkulkKeywordAbility            } from "@/branches/ability/keyword/skulk";
import { parseSoulbondKeywordAbility         } from "@/branches/ability/keyword/soulbond";
import { parseSoulshiftKeywordAbility        } from "@/branches/ability/keyword/soulshift";
import { parseSpliceKeywordAbility           } from "@/branches/ability/keyword/splice";
import { parseSplitSecondKeywordAbility      } from "@/branches/ability/keyword/split-second";
import { parseStormKeywordAbility            } from "@/branches/ability/keyword/storm";
import { parseSunburstKeywordAbility         } from "@/branches/ability/keyword/sunburst";
import { parseSurgeKeywordAbility            } from "@/branches/ability/keyword/surge";
import { parseSuspendKeywordAbility          } from "@/branches/ability/keyword/suspend";
import { parseTotemArmorKeywordAbility       } from "@/branches/ability/keyword/totem-armor";
import { parseTrampleKeywordAbility          } from "@/branches/ability/keyword/trample";
import { parseTransfigureKeywordAbility      } from "@/branches/ability/keyword/transfigure";
import { parseTransmuteKeywordAbility        } from "@/branches/ability/keyword/transmute";
import { parseTributeKeywordAbility          } from "@/branches/ability/keyword/tribute";
import { parseUndauntedKeywordAbility        } from "@/branches/ability/keyword/undaunted";
import { parseUndyingKeywordAbility          } from "@/branches/ability/keyword/undying";
import { parseUnearthKeywordAbility          } from "@/branches/ability/keyword/unearth";
import { parseUnleashKeywordAbility          } from "@/branches/ability/keyword/unleash";
import { parseVanishingKeywordAbility        } from "@/branches/ability/keyword/vanishing";
import { parseVigilanceKeywordAbility        } from "@/branches/ability/keyword/vigilance";
import { parseWitherKeywordAbility           } from "@/branches/ability/keyword/wither";

export const parseKeywordAbility: Pattern<KeywordAbility> = (
  r.anyOf<KeywordAbility>(
    parseDeathtouchKeywordAbility,
    parseDefenderKeywordAbility,
    parseDoubleStrikeKeywordAbility,
    parseFirstStrikeKeywordAbility,
    parseFlashKeywordAbility,
    parseFlyingKeywordAbility,
    parseHasteKeywordAbility,
    parseIndestructibleKeywordAbility,
    parseIntimidateKeywordAbility,
    parseLifelinkKeywordAbility,
    parseReachKeywordAbility,
    parseShroudKeywordAbility,
    parseTrampleKeywordAbility,
    parseVigilanceKeywordAbility,
    parseRampageKeywordAbility,
    parseFlankingKeywordAbility,
    parsePhasingKeywordAbility,
    parseShadowKeywordAbility,
    parseHorsemanshipKeywordAbility,
    parseFearKeywordAbility,
    parseProvokeKeywordAbility,
    parseStormKeywordAbility,
    parseSunburstKeywordAbility,
    parseBushidoKeywordAbility,
    parseConvokeKeywordAbility,
    parseEpicKeywordAbility,
    parseHauntKeywordAbility,
    parseSplitSecondKeywordAbility,
    parseDelveKeywordAbility,
    parseGravestormKeywordAbility,
    parseChangelingKeywordAbility,
    parseHideawayKeywordAbility,
    parseConspireKeywordAbility,
    parsePersistKeywordAbility,
    parseWitherKeywordAbility,
    parseRetraceKeywordAbility,
    parseExaltedKeywordAbility,
    parseCascadeKeywordAbility,
    parseReboundKeywordAbility,
    parseTotemArmorKeywordAbility,
    parseInfectKeywordAbility,
    parseBattleCryKeywordAbility,
    parseLivingWeaponKeywordAbility,
    parseUndyingKeywordAbility,
    parseUnleashKeywordAbility,
    parseDethroneKeywordAbility,
    parseHiddenAgendaKeywordAbility,
    parseCipherKeywordAbility,
    parseEvolveKeywordAbility,
    parseExtortKeywordAbility,
    parseFuseKeywordAbility,
    parseSoulbondKeywordAbility,
    parseProwessKeywordAbility,
    parseExploitKeywordAbility,
    parseMenaceKeywordAbility,
    parseDevoidKeywordAbility,
    parseIngestKeywordAbility,
    parseMyriadKeywordAbility,
    parseSkulkKeywordAbility,
    parsePartnerKeywordAbility,
    parseUndauntedKeywordAbility,
    parseImproviseKeywordAbility,
    parseAftermathKeywordAbility,
    parseMeleeKeywordAbility,
    parseEquipKeywordAbility,
    parseCumulativeUpkeepKeywordAbility,
    parseBuybackKeywordAbility,
    parseCyclingKeywordAbility,
    parseEchoKeywordAbility,
    parseEchoKeywordAbility,
    parseKickerKeywordAbility,
    parseFlashbackKeywordAbility,
    parseMadnessKeywordAbility,
    parseMorphKeywordAbility,
    parseEntwineKeywordAbility,
    parseNinjutsuKeywordAbility,
    parseTransmuteKeywordAbility,
    parseReplicateKeywordAbility,
    parseRecoverKeywordAbility,
    parseSuspendKeywordAbility,
    parseAuraSwapKeywordAbility,
    parseFortifyKeywordAbility,
    parseTransfigureKeywordAbility,
    parseEvokeKeywordAbility,
    parseProwlKeywordAbility,
    parseProwlKeywordAbility,
    parseUnearthKeywordAbility,
    parseLevelUpKeywordAbility,
    parseMiracleKeywordAbility,
    parseOverloadKeywordAbility,
    parseScavengeKeywordAbility,
    parseBestowKeywordAbility,
    parseOutlastKeywordAbility,
    parseDashKeywordAbility,
    parseAwakenKeywordAbility,
    parseSurgeKeywordAbility,
    parseEmergeKeywordAbility,
    parseEscalateKeywordAbility,
    parseEmbalmKeywordAbility,
    parseEternalizeKeywordAbility,
    parseFadingKeywordAbility,
    parseAmplifyKeywordAbility,
    parseModularKeywordAbility,
    parseSoulshiftKeywordAbility,
    parseDredgeKeywordAbility,
    parseBloodthirstKeywordAbility,
    parseGraftKeywordAbility,
    parseRippleKeywordAbility,
    parseVanishingKeywordAbility,
    parseAbsorbKeywordAbility,
    parseFrenzyKeywordAbility,
    parsePoisonousKeywordAbility,
    parseDevourKeywordAbility,
    parseAnnihilatorKeywordAbility,
    parseTributeKeywordAbility,
    parseRenownKeywordAbility,
    parseCrewKeywordAbility,
    parseFabricateKeywordAbility,
    parseAfflictKeywordAbility,
    parseHexproofKeywordAbility,
    parseReinforceKeywordAbility,
    parseEnchantKeywordAbility,
    parseAffinityKeywordAbility,
    parseLandwalkKeywordAbility,
    parseSpliceKeywordAbility,
    parseOfferingKeywordAbility,
    parseForecastKeywordAbility,
    parseProtectionKeywordAbility,
    parseBandingKeywordAbility,
    parseChampionKeywordAbility
  )
);

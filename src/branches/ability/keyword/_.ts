import { Pattern, r } from "@/r";

import { KeywordAbility                      } from "@/types/ability";
import { parseAbsorbKeywordAbility           } from "./absorb";
import { parseAffinityKeywordAbility         } from "./affinity";
import { parseAfflictKeywordAbility          } from "./afflict";
import { parseAftermathKeywordAbility        } from "./aftermath";
import { parseAmplifyKeywordAbility          } from "./amplify";
import { parseAnnihilatorKeywordAbility      } from "./annihilator";
import { parseAuraSwapKeywordAbility         } from "./aura-swap";
import { parseAwakenKeywordAbility           } from "./awaken";
import { parseBandingKeywordAbility          } from "./banding";
import { parseBattleCryKeywordAbility        } from "./battle-cry";
import { parseBestowKeywordAbility           } from "./bestow";
import { parseBloodthirstKeywordAbility      } from "./bloodthirst";
import { parseBushidoKeywordAbility          } from "./bushido";
import { parseBuybackKeywordAbility          } from "./buyback";
import { parseCascadeKeywordAbility          } from "./cascade";
import { parseChampionKeywordAbility         } from "./champion";
import { parseChangelingKeywordAbility       } from "./changeling";
import { parseCipherKeywordAbility           } from "./cipher";
import { parseConspireKeywordAbility         } from "./conspire";
import { parseConvokeKeywordAbility          } from "./convoke";
import { parseCrewKeywordAbility             } from "./crew";
import { parseCumulativeUpkeepKeywordAbility } from "./cumulative-upkeep";
import { parseCyclingKeywordAbility          } from "./cycling";
import { parseDashKeywordAbility             } from "./dash";
import { parseDeathtouchKeywordAbility       } from "./deathtouch";
import { parseDefenderKeywordAbility         } from "./defender";
import { parseDelveKeywordAbility            } from "./delve";
import { parseDethroneKeywordAbility         } from "./dethrone";
import { parseDevoidKeywordAbility           } from "./devoid";
import { parseDevourKeywordAbility           } from "./devour";
import { parseDoubleStrikeKeywordAbility     } from "./double-strike";
import { parseDredgeKeywordAbility           } from "./dredge";
import { parseEchoKeywordAbility             } from "./echo";
import { parseEmbalmKeywordAbility           } from "./embalm";
import { parseEmergeKeywordAbility           } from "./emerge";
import { parseEnchantKeywordAbility          } from "./enchant";
import { parseEntwineKeywordAbility          } from "./entwine";
import { parseEpicKeywordAbility             } from "./epic";
import { parseEquipKeywordAbility            } from "./equip";
import { parseEscalateKeywordAbility         } from "./escalate";
import { parseEternalizeKeywordAbility       } from "./eternalize";
import { parseEvokeKeywordAbility            } from "./evoke";
import { parseEvolveKeywordAbility           } from "./evolve";
import { parseExaltedKeywordAbility          } from "./exalted";
import { parseExploitKeywordAbility          } from "./exploit";
import { parseExtortKeywordAbility           } from "./extort";
import { parseFabricateKeywordAbility        } from "./fabricate";
import { parseFadingKeywordAbility           } from "./fading";
import { parseFearKeywordAbility             } from "./fear";
import { parseFirstStrikeKeywordAbility      } from "./first-strike";
import { parseFlankingKeywordAbility         } from "./flanking";
import { parseFlashKeywordAbility            } from "./flash";
import { parseFlashbackKeywordAbility        } from "./flashback";
import { parseFlyingKeywordAbility           } from "./flying";
import { parseForecastKeywordAbility         } from "./forecast";
import { parseFortifyKeywordAbility          } from "./fortify";
import { parseFrenzyKeywordAbility           } from "./frenzy";
import { parseFuseKeywordAbility             } from "./fuse";
import { parseGraftKeywordAbility            } from "./graft";
import { parseGravestormKeywordAbility       } from "./gravestorm";
import { parseHasteKeywordAbility            } from "./haste";
import { parseHauntKeywordAbility            } from "./haunt";
import { parseHexproofKeywordAbility         } from "./hexproof";
import { parseHiddenAgendaKeywordAbility     } from "./hidden-agenda";
import { parseHideawayKeywordAbility         } from "./hideaway";
import { parseHorsemanshipKeywordAbility     } from "./horsemanship";
import { parseImproviseKeywordAbility        } from "./improvise";
import { parseIndestructibleKeywordAbility   } from "./indestructible";
import { parseInfectKeywordAbility           } from "./infect";
import { parseIngestKeywordAbility           } from "./ingest";
import { parseIntimidateKeywordAbility       } from "./intimidate";
import { parseKickerKeywordAbility           } from "./kicker";
import { parseLandwalkKeywordAbility         } from "./landwalk";
import { parseLevelUpKeywordAbility          } from "./level-up";
import { parseLifelinkKeywordAbility         } from "./lifelink";
import { parseLivingWeaponKeywordAbility     } from "./living-weapon";
import { parseMadnessKeywordAbility          } from "./madness";
import { parseMeleeKeywordAbility            } from "./melee";
import { parseMenaceKeywordAbility           } from "./menace";
import { parseMiracleKeywordAbility          } from "./miracle";
import { parseModularKeywordAbility          } from "./modular";
import { parseMorphKeywordAbility            } from "./morph";
import { parseMyriadKeywordAbility           } from "./myriad";
import { parseNinjutsuKeywordAbility         } from "./ninjutsu";
import { parseOfferingKeywordAbility         } from "./offering";
import { parseOutlastKeywordAbility          } from "./outlast";
import { parseOverloadKeywordAbility         } from "./overload";
import { parsePartnerKeywordAbility          } from "./partner";
import { parsePersistKeywordAbility          } from "./persist";
import { parsePhasingKeywordAbility          } from "./phasing";
import { parsePoisonousKeywordAbility        } from "./poisonous";
import { parseProtectionKeywordAbility       } from "./protection";
import { parseProvokeKeywordAbility          } from "./provoke";
import { parseProwessKeywordAbility          } from "./prowess";
import { parseProwlKeywordAbility            } from "./prowl";
import { parseRampageKeywordAbility          } from "./rampage";
import { parseReachKeywordAbility            } from "./reach";
import { parseReboundKeywordAbility          } from "./rebound";
import { parseRecoverKeywordAbility          } from "./recover";
import { parseReinforceKeywordAbility        } from "./reinforce";
import { parseRenownKeywordAbility           } from "./renown";
import { parseReplicateKeywordAbility        } from "./replicate";
import { parseRetraceKeywordAbility          } from "./retrace";
import { parseRippleKeywordAbility           } from "./ripple";
import { parseScavengeKeywordAbility         } from "./scavenge";
import { parseShadowKeywordAbility           } from "./shadow";
import { parseShroudKeywordAbility           } from "./shroud";
import { parseSkulkKeywordAbility            } from "./skulk";
import { parseSoulbondKeywordAbility         } from "./soulbond";
import { parseSoulshiftKeywordAbility        } from "./soulshift";
import { parseSpliceKeywordAbility           } from "./splice";
import { parseSplitSecondKeywordAbility      } from "./split-second";
import { parseStormKeywordAbility            } from "./storm";
import { parseSunburstKeywordAbility         } from "./sunburst";
import { parseSurgeKeywordAbility            } from "./surge";
import { parseSuspendKeywordAbility          } from "./suspend";
import { parseTotemArmorKeywordAbility       } from "./totem-armor";
import { parseTrampleKeywordAbility          } from "./trample";
import { parseTransfigureKeywordAbility      } from "./transfigure";
import { parseTransmuteKeywordAbility        } from "./transmute";
import { parseTributeKeywordAbility          } from "./tribute";
import { parseUndauntedKeywordAbility        } from "./undaunted";
import { parseUndyingKeywordAbility          } from "./undying";
import { parseUnearthKeywordAbility          } from "./unearth";
import { parseUnleashKeywordAbility          } from "./unleash";
import { parseVanishingKeywordAbility        } from "./vanishing";
import { parseVigilanceKeywordAbility        } from "./vigilance";
import { parseWitherKeywordAbility           } from "./wither";

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

import { ActivationInstructions } from "@/types/activation-instructions";
import { Cost } from "@/types/cost";
import { Effect } from "@/types/effect";
import { Scope } from "@/types/scope";
import { State } from "@/types/state";
import { Value } from "@/types/value";

// tslint:disable:max-file-line-count

interface AbilityBase {
  type: string;
}

//#region Defs

export interface ActivatedAbility extends AbilityBase {
  type: "activated";
  cost: Cost;
  effect: Effect;
  instructions: ActivationInstructions;
}

export interface SpellAbility extends AbilityBase {
  type: "spell";
  effect: Effect;
}

export interface StaticAbility extends AbilityBase {
  type: "static";
  state: State;
}

interface KeywordAbilityBase extends AbilityBase {
  type: "keyword";
  keyword: string;
}

//#region Keyword Abilities

export interface DeathtouchKeywordAbility extends KeywordAbilityBase {
  keyword: "deathtouch";
}

export interface DefenderKeywordAbility extends KeywordAbilityBase {
  keyword: "defender";
}

export interface DoubleStrikeKeywordAbility extends KeywordAbilityBase {
  keyword: "doubleStrike";
}

export interface FirstStrikeKeywordAbility extends KeywordAbilityBase {
  keyword: "firstStrike";
}

export interface FlashKeywordAbility extends KeywordAbilityBase {
  keyword: "flash";
}

export interface FlyingKeywordAbility extends KeywordAbilityBase {
  keyword: "flying";
}

export interface HasteKeywordAbility extends KeywordAbilityBase {
  keyword: "haste";
}

export interface IndestructibleKeywordAbility extends KeywordAbilityBase {
  keyword: "indestructible";
}

export interface IntimidateKeywordAbility extends KeywordAbilityBase {
  keyword: "intimidate";
}

export interface LifelinkKeywordAbility extends KeywordAbilityBase {
  keyword: "lifelink";
}

export interface ReachKeywordAbility extends KeywordAbilityBase {
  keyword: "reach";
}

export interface ShroudKeywordAbility extends KeywordAbilityBase {
  keyword: "shroud";
}

export interface TrampleKeywordAbility extends KeywordAbilityBase {
  keyword: "trample";
}

export interface VigilanceKeywordAbility extends KeywordAbilityBase {
  keyword: "vigilance";
}

export interface RampageKeywordAbility extends KeywordAbilityBase {
  keyword: "rampage";
  value: Value;
}

export interface FlankingKeywordAbility extends KeywordAbilityBase {
  keyword: "flanking";
  value: Value;
}

export interface PhasingKeywordAbility extends KeywordAbilityBase {
  keyword: "phasing";
}

export interface ShadowKeywordAbility extends KeywordAbilityBase {
  keyword: "shadow";
}

export interface HorsemanshipKeywordAbility extends KeywordAbilityBase {
  keyword: "horsemanship";
}

export interface FearKeywordAbility extends KeywordAbilityBase {
  keyword: "fear";
}

export interface ProvokeKeywordAbility extends KeywordAbilityBase {
  keyword: "provoke";
}

export interface StormKeywordAbility extends KeywordAbilityBase {
  keyword: "storm";
}

export interface SunburstKeywordAbility extends KeywordAbilityBase {
  keyword: "sunburst";
}

export interface BushidoKeywordAbility extends KeywordAbilityBase {
  keyword: "bushido";
}

export interface ConvokeKeywordAbility extends KeywordAbilityBase {
  keyword: "convoke";
}

export interface EpicKeywordAbility extends KeywordAbilityBase {
  keyword: "epic";
}

export interface HauntKeywordAbility extends KeywordAbilityBase {
  keyword: "haunt";
}

export interface SplitSecondKeywordAbility extends KeywordAbilityBase {
  keyword: "splitSecond";
}

export interface DelveKeywordAbility extends KeywordAbilityBase {
  keyword: "delve";
}

export interface GravestormKeywordAbility extends KeywordAbilityBase {
  keyword: "gravestorm";
}

export interface ChangelingKeywordAbility extends KeywordAbilityBase {
  keyword: "changeling";
}

export interface HideawayKeywordAbility extends KeywordAbilityBase {
  keyword: "hideaway";
}

export interface ConspireKeywordAbility extends KeywordAbilityBase {
  keyword: "conspire";
}

export interface PersistKeywordAbility extends KeywordAbilityBase {
  keyword: "persist";
}

export interface WitherKeywordAbility extends KeywordAbilityBase {
  keyword: "wither";
}

export interface RetraceKeywordAbility extends KeywordAbilityBase {
  keyword: "retrace";
}

export interface ExaltedKeywordAbility extends KeywordAbilityBase {
  keyword: "exalted";
}

export interface CascadeKeywordAbility extends KeywordAbilityBase {
  keyword: "cascade";
}

export interface ReboundKeywordAbility extends KeywordAbilityBase {
  keyword: "rebound";
}

export interface TotemArmorKeywordAbility extends KeywordAbilityBase {
  keyword: "totemArmor";
}

export interface InfectKeywordAbility extends KeywordAbilityBase {
  keyword: "infect";
}

export interface BattleCryKeywordAbility extends KeywordAbilityBase {
  keyword: "battleCry";
}

export interface LivingWeaponKeywordAbility extends KeywordAbilityBase {
  keyword: "livingWeapon";
}

export interface UndyingKeywordAbility extends KeywordAbilityBase {
  keyword: "undying";
}

export interface UnleashKeywordAbility extends KeywordAbilityBase {
  keyword: "unleash";
}

export interface DethroneKeywordAbility extends KeywordAbilityBase {
  keyword: "dethrone";
}

export interface HiddenAgendaKeywordAbility extends KeywordAbilityBase {
  keyword: "hiddenAgenda";
}

export interface CipherKeywordAbility extends KeywordAbilityBase {
  keyword: "cipher";
}

export interface EvolveKeywordAbility extends KeywordAbilityBase {
  keyword: "evolve";
}

export interface ExtortKeywordAbility extends KeywordAbilityBase {
  keyword: "extort";
}

export interface FuseKeywordAbility extends KeywordAbilityBase {
  keyword: "fuse";
}

export interface SoulbondKeywordAbility extends KeywordAbilityBase {
  keyword: "soulbond";
}

export interface ProwessKeywordAbility extends KeywordAbilityBase {
  keyword: "prowess";
}

export interface ExploitKeywordAbility extends KeywordAbilityBase {
  keyword: "exploit";
}

export interface MenaceKeywordAbility extends KeywordAbilityBase {
  keyword: "menace";
}

export interface DevoidKeywordAbility extends KeywordAbilityBase {
  keyword: "devoid";
}

export interface IngestKeywordAbility extends KeywordAbilityBase {
  keyword: "ingest";
}

export interface MyriadKeywordAbility extends KeywordAbilityBase {
  keyword: "myriad";
}

export interface SkulkKeywordAbility extends KeywordAbilityBase {
  keyword: "skulk";
}

export interface PartnerKeywordAbility extends KeywordAbilityBase {
  keyword: "partner";
}

export interface UndauntedKeywordAbility extends KeywordAbilityBase {
  keyword: "undaunted";
}

export interface ImproviseKeywordAbility extends KeywordAbilityBase {
  keyword: "improvise";
}

export interface AftermathKeywordAbility extends KeywordAbilityBase {
  keyword: "aftermath";
}

export interface MeleeKeywordAbility extends KeywordAbilityBase {
  keyword: "melee";
}

export interface EquipKeywordAbility extends KeywordAbilityBase {
  keyword: "equip";
  cost: Cost;
  scope: Scope;
}

export interface CumulativeUpkeepKeywordAbility extends KeywordAbilityBase {
  keyword: "cumulativeUpkeep";
  cost: Cost;
}

export interface BuybackKeywordAbility extends KeywordAbilityBase {
  keyword: "buyback";
  cost: Cost;
}

export interface CyclingKeywordAbility extends KeywordAbilityBase {
  keyword: "cycling";
  cost: Cost;
}

export interface EchoKeywordAbility extends KeywordAbilityBase {
  keyword: "echo";
  cost: Cost;
}

export interface KickerKeywordAbility extends KeywordAbilityBase {
  keyword: "kicker";
  cost: Cost;
}

export interface FlashbackKeywordAbility extends KeywordAbilityBase {
  keyword: "flashback";
  cost: Cost;
}

export interface MadnessKeywordAbility extends KeywordAbilityBase {
  keyword: "madness";
  cost: Cost;
}

export interface MorphKeywordAbility extends KeywordAbilityBase {
  keyword: "morph";
  cost: Cost;
}

export interface EntwineKeywordAbility extends KeywordAbilityBase {
  keyword: "entwine";
  cost: Cost;
}

export interface NinjutsuKeywordAbility extends KeywordAbilityBase {
  keyword: "ninjutsu";
  cost: Cost;
}

export interface TransmuteKeywordAbility extends KeywordAbilityBase {
  keyword: "transmute";
  cost: Cost;
}

export interface ReplicateKeywordAbility extends KeywordAbilityBase {
  keyword: "replicate";
  cost: Cost;
}

export interface RecoverKeywordAbility extends KeywordAbilityBase {
  keyword: "recover";
  cost: Cost;
}

export interface SuspendKeywordAbility extends KeywordAbilityBase {
  keyword: "suspend";
  cost: Cost;
}

export interface AuraSwapKeywordAbility extends KeywordAbilityBase {
  keyword: "auraSwap";
  cost: Cost;
}

export interface FortifyKeywordAbility extends KeywordAbilityBase {
  keyword: "fortify";
  cost: Cost;
}

export interface TransfigureKeywordAbility extends KeywordAbilityBase {
  keyword: "transfigure";
  cost: Cost;
}

export interface EvokeKeywordAbility extends KeywordAbilityBase {
  keyword: "evoke";
  cost: Cost;
}

export interface ProwlKeywordAbility extends KeywordAbilityBase {
  keyword: "prowl";
  cost: Cost;
}

export interface UnearthKeywordAbility extends KeywordAbilityBase {
  keyword: "unearth";
  cost: Cost;
}

export interface LevelUpKeywordAbility extends KeywordAbilityBase {
  keyword: "levelUp";
  cost: Cost;
}

export interface MiracleKeywordAbility extends KeywordAbilityBase {
  keyword: "miracle";
  cost: Cost;
}

export interface OverloadKeywordAbility extends KeywordAbilityBase {
  keyword: "overload";
  cost: Cost;
}

export interface ScavengeKeywordAbility extends KeywordAbilityBase {
  keyword: "scavenge";
  cost: Cost;
}

export interface BestowKeywordAbility extends KeywordAbilityBase {
  keyword: "bestow";
  cost: Cost;
}

export interface OutlastKeywordAbility extends KeywordAbilityBase {
  keyword: "outlast";
  cost: Cost;
}

export interface DashKeywordAbility extends KeywordAbilityBase {
  keyword: "dash";
  cost: Cost;
}

export interface AwakenKeywordAbility extends KeywordAbilityBase {
  keyword: "awaken";
  value: Value;
  cost: Cost;
}

export interface SurgeKeywordAbility extends KeywordAbilityBase {
  keyword: "surge";
  cost: Cost;
}

export interface EmergeKeywordAbility extends KeywordAbilityBase {
  keyword: "emerge";
  cost: Cost;
}

export interface EscalateKeywordAbility extends KeywordAbilityBase {
  keyword: "escalate";
  cost: Cost;
}

export interface EmbalmKeywordAbility extends KeywordAbilityBase {
  keyword: "embalm";
  cost: Cost;
}

export interface EternalizeKeywordAbility extends KeywordAbilityBase {
  keyword: "eternalize";
  cost: Cost;
}

export interface FadingKeywordAbility extends KeywordAbilityBase {
  keyword: "fading";
  value: Value;
}

export interface AmplifyKeywordAbility extends KeywordAbilityBase {
  keyword: "amplify";
  value: Value;
}

export interface ModularKeywordAbility extends KeywordAbilityBase {
  keyword: "modular";
  value: Value;
}

export interface SoulshiftKeywordAbility extends KeywordAbilityBase {
  keyword: "soulshift";
  value: Value;
}

export interface DredgeKeywordAbility extends KeywordAbilityBase {
  keyword: "dredge";
  value: Value;
}

export interface BloodthirstKeywordAbility extends KeywordAbilityBase {
  keyword: "bloodthirst";
  value: Value;
}

export interface GraftKeywordAbility extends KeywordAbilityBase {
  keyword: "graft";
  value: Value;
}

export interface RippleKeywordAbility extends KeywordAbilityBase {
  keyword: "ripple";
  value: Value;
}

export interface VanishingKeywordAbility extends KeywordAbilityBase {
  keyword: "vanishing";
  value: Value;
}

export interface AbsorbKeywordAbility extends KeywordAbilityBase {
  keyword: "absorb";
  value: Value;
}

export interface FrenzyKeywordAbility extends KeywordAbilityBase {
  keyword: "frenzy";
  value: Value;
}

export interface PoisonousKeywordAbility extends KeywordAbilityBase {
  keyword: "poisonous";
  value: Value;
}

export interface DevourKeywordAbility extends KeywordAbilityBase {
  keyword: "devour";
  value: Value;
}

export interface AnnihilatorKeywordAbility extends KeywordAbilityBase {
  keyword: "annihilator";
  value: Value;
}

export interface TributeKeywordAbility extends KeywordAbilityBase {
  keyword: "tribute";
  value: Value;
}

export interface RenownKeywordAbility extends KeywordAbilityBase {
  keyword: "renown";
  value: Value;
}

export interface CrewKeywordAbility extends KeywordAbilityBase {
  keyword: "crew";
  value: Value;
}

export interface FabricateKeywordAbility extends KeywordAbilityBase {
  keyword: "fabricate";
  value: Value;
}

export interface AfflictKeywordAbility extends KeywordAbilityBase {
  keyword: "afflict";
  value: Value;
}

export interface HexproofKeywordAbility extends KeywordAbilityBase {
  keyword: "hexproof";
  scope: Scope;
}

export interface ReinforceKeywordAbility extends KeywordAbilityBase {
  keyword: "reinforce";
  value: Value;
  cost: Cost;
}

export interface EnchantKeywordAbility extends KeywordAbilityBase {
  keyword: "enchant";
  scope: Scope;
}

export interface AffinityKeywordAbility extends KeywordAbilityBase {
  keyword: "affinity";
  scope: Scope;
}

export interface LandwalkKeywordAbility extends KeywordAbilityBase {
  keyword: "landwalk";
  scope: Scope;
}

export interface SpliceKeywordAbility extends KeywordAbilityBase {
  keyword: "splice";
  scope: Scope;
  cost: Cost;
}

export interface OfferingKeywordAbility extends KeywordAbilityBase {
  keyword: "offering";
  scope: Scope;
}

export interface ForecastKeywordAbility extends KeywordAbilityBase {
  keyword: "forecast";
  ability: ActivatedAbility;
}

export interface ProtectionKeywordAbility extends KeywordAbilityBase {
  keyword: "protection";
  scope: Scope;
}

export interface BandingKeywordAbility extends KeywordAbilityBase {
  keyword: "banding";
  scope: Scope;
}

export interface ChampionKeywordAbility extends KeywordAbilityBase {
  keyword: "champion";
  scope: Scope;
}

//#endregion

export type KeywordAbility = (
  DeathtouchKeywordAbility       |
  DefenderKeywordAbility         |
  DoubleStrikeKeywordAbility     |
  FirstStrikeKeywordAbility      |
  FlashKeywordAbility            |
  FlyingKeywordAbility           |
  HasteKeywordAbility            |
  IndestructibleKeywordAbility   |
  IntimidateKeywordAbility       |
  LifelinkKeywordAbility         |
  ReachKeywordAbility            |
  ShroudKeywordAbility           |
  TrampleKeywordAbility          |
  VigilanceKeywordAbility        |
  RampageKeywordAbility          |
  FlankingKeywordAbility         |
  PhasingKeywordAbility          |
  ShadowKeywordAbility           |
  HorsemanshipKeywordAbility     |
  FearKeywordAbility             |
  ProvokeKeywordAbility          |
  StormKeywordAbility            |
  SunburstKeywordAbility         |
  BushidoKeywordAbility          |
  ConvokeKeywordAbility          |
  EpicKeywordAbility             |
  HauntKeywordAbility            |
  SplitSecondKeywordAbility      |
  DelveKeywordAbility            |
  GravestormKeywordAbility       |
  ChangelingKeywordAbility       |
  HideawayKeywordAbility         |
  ConspireKeywordAbility         |
  PersistKeywordAbility          |
  WitherKeywordAbility           |
  RetraceKeywordAbility          |
  ExaltedKeywordAbility          |
  CascadeKeywordAbility          |
  ReboundKeywordAbility          |
  TotemArmorKeywordAbility       |
  InfectKeywordAbility           |
  BattleCryKeywordAbility        |
  LivingWeaponKeywordAbility     |
  UndyingKeywordAbility          |
  UnleashKeywordAbility          |
  DethroneKeywordAbility         |
  HiddenAgendaKeywordAbility     |
  CipherKeywordAbility           |
  EvolveKeywordAbility           |
  ExtortKeywordAbility           |
  FuseKeywordAbility             |
  SoulbondKeywordAbility         |
  ProwessKeywordAbility          |
  ExploitKeywordAbility          |
  MenaceKeywordAbility           |
  DevoidKeywordAbility           |
  IngestKeywordAbility           |
  MyriadKeywordAbility           |
  SkulkKeywordAbility            |
  PartnerKeywordAbility          |
  UndauntedKeywordAbility        |
  ImproviseKeywordAbility        |
  AftermathKeywordAbility        |
  MeleeKeywordAbility            |
  EquipKeywordAbility            |
  CumulativeUpkeepKeywordAbility |
  BuybackKeywordAbility          |
  CyclingKeywordAbility          |
  EchoKeywordAbility             |
  KickerKeywordAbility           |
  FlashbackKeywordAbility        |
  MadnessKeywordAbility          |
  MorphKeywordAbility            |
  EntwineKeywordAbility          |
  NinjutsuKeywordAbility         |
  TransmuteKeywordAbility        |
  ReplicateKeywordAbility        |
  RecoverKeywordAbility          |
  SuspendKeywordAbility          |
  AuraSwapKeywordAbility         |
  FortifyKeywordAbility          |
  TransfigureKeywordAbility      |
  EvokeKeywordAbility            |
  ProwlKeywordAbility            |
  UnearthKeywordAbility          |
  LevelUpKeywordAbility          |
  MiracleKeywordAbility          |
  OverloadKeywordAbility         |
  ScavengeKeywordAbility         |
  BestowKeywordAbility           |
  OutlastKeywordAbility          |
  DashKeywordAbility             |
  AwakenKeywordAbility           |
  SurgeKeywordAbility            |
  EmergeKeywordAbility           |
  EscalateKeywordAbility         |
  EmbalmKeywordAbility           |
  EternalizeKeywordAbility       |
  FadingKeywordAbility           |
  AmplifyKeywordAbility          |
  ModularKeywordAbility          |
  SoulshiftKeywordAbility        |
  DredgeKeywordAbility           |
  BloodthirstKeywordAbility      |
  GraftKeywordAbility            |
  RippleKeywordAbility           |
  VanishingKeywordAbility        |
  AbsorbKeywordAbility           |
  FrenzyKeywordAbility           |
  PoisonousKeywordAbility        |
  DevourKeywordAbility           |
  AnnihilatorKeywordAbility      |
  TributeKeywordAbility          |
  RenownKeywordAbility           |
  CrewKeywordAbility             |
  FabricateKeywordAbility        |
  AfflictKeywordAbility          |
  HexproofKeywordAbility         |
  ReinforceKeywordAbility        |
  EnchantKeywordAbility          |
  AffinityKeywordAbility         |
  LandwalkKeywordAbility         |
  SpliceKeywordAbility           |
  OfferingKeywordAbility         |
  ForecastKeywordAbility         |
  ProtectionKeywordAbility       |
  BandingKeywordAbility          |
  ChampionKeywordAbility
);

//#endregion

export type Ability = (
  ActivatedAbility |
  SpellAbility     |
  StaticAbility    |
  KeywordAbility
);

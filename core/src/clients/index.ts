import {
  SifchainChain,
  EthereumChain,
  CosmoshubChain,
  AkashChain,
  IrisChain,
  SentinelChain,
  CryptoOrgChain,
  PersistenceChain,
  RegenChain,
  OsmosisChain,
  TerraChain,
  JunoChain,
  IxoChain,
  BandChain,
  LikecoinChain,
  EmoneyChain,
  StarnameChain,
  BitsongChain,
  CerberusChain,
  ComdexChain,
  ChihuahuaChain,
  KiChain,
  StargazeChain,
  EvmosChain,
  SecretChain,
  GravityChain,
} from "../clients/chains";

import { Network } from "..";
import { NobleChain } from "./chains/NobleChain";

export const networkChainCtorLookup = {
  [Network.SIFCHAIN]: SifchainChain,
  [Network.ETHEREUM]: EthereumChain,
  [Network.COSMOSHUB]: CosmoshubChain,
  [Network.IRIS]: IrisChain,
  [Network.AKASH]: AkashChain,
  [Network.SENTINEL]: SentinelChain,
  [Network.CRYPTO_ORG]: CryptoOrgChain,
  [Network.PERSISTENCE]: PersistenceChain,
  [Network.REGEN]: RegenChain,
  [Network.OSMOSIS]: OsmosisChain,
  [Network.NOBLE]: NobleChain,
  [Network.TERRA]: TerraChain,
  [Network.JUNO]: JunoChain,
  [Network.IXO]: IxoChain,
  [Network.BAND]: BandChain,
  [Network.LIKECOIN]: LikecoinChain,
  [Network.EMONEY]: EmoneyChain,
  [Network.STARNAME]: StarnameChain,
  [Network.BITSONG]: BitsongChain,
  [Network.CERBERUS]: CerberusChain,
  [Network.COMDEX]: ComdexChain,
  [Network.CHIHUAHUA]: ChihuahuaChain,
  [Network.KI]: KiChain,
  [Network.STARGAZE]: StargazeChain,
  [Network.EVMOS]: EvmosChain,
  [Network.SECRET]: SecretChain,
  [Network.GRAVITY]: GravityChain,
};

export * from "./chains";
export * from "./native";
export * from "./sifchain";
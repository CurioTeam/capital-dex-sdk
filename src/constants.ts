import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  SKALE = 836542336838601,
  SKALE_TESTNET = 1171947029810826,
  AURORA_TESTNET = 1313161555,
  AURORA = 1313161554,
  BOBA_TESTNET = 28,
  BOBA = 288
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES = {
  [ChainId.MAINNET]: '0x03407772F5EBFB9B10Df007A2DD6FFf4EdE47B53',
  [ChainId.GOERLI]: '0x0D0234C00495CEE1604778bDcDD5d6025223de65',
  [ChainId.SKALE]: '0xC36F5180B181f1b949E0Ff4d65B258e0987F443F',
  [ChainId.SKALE_TESTNET]: '0xef273d5eD7Bfa88aA9C94a6D4EfFFD196aE0f48a',
  [ChainId.BOBA_TESTNET]: '0x44d47C22F1413960B0abD5D36E39AD0a0a1AA827',
  [ChainId.AURORA_TESTNET]: '0x99fb0229A03ef03dbb014eDa134cd9780778c084',
  [ChainId.AURORA]: '0x83240728cb18a3D9e6D5091844bC449e16006d79',
  [ChainId.BOBA]: '0xAF141A9F7E0627455bE33c7aF69bcDB77Ffb08C9'
}

export const INIT_CODE_HASHES = {
  [ChainId.MAINNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.GOERLI]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.SKALE]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.SKALE_TESTNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.BOBA_TESTNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.AURORA_TESTNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.AURORA]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.BOBA]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

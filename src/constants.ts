import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  KOVAN = 42,
  SKALE = 836542336838601,
  SKALE_TESTNET = 2317290928455356,
  AURORA_TESTNET = 1313161555,
  BOBA_TESTNET = 28
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
  [ChainId.KOVAN]: '0x8E0E163E9F66d639c448d1f5e0594CaC2558305e',
  [ChainId.SKALE]: '0xC36F5180B181f1b949E0Ff4d65B258e0987F443F',
  [ChainId.SKALE_TESTNET]: '0x63E9516E2adCDc743CAFB4E02b0a5e08B6F05b14',
  [ChainId.BOBA_TESTNET]: '0x44d47C22F1413960B0abD5D36E39AD0a0a1AA827',
  [ChainId.AURORA_TESTNET]: '0x99fb0229A03ef03dbb014eDa134cd9780778c084'
}

export const INIT_CODE_HASHES = {
  [ChainId.MAINNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.KOVAN]: '0xeb421c75c82ac3e801293f21bf65f03f21b5a26a0921355126d34b4c5173bfe9',
  [ChainId.SKALE]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.SKALE_TESTNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.BOBA_TESTNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.AURORA_TESTNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b'
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

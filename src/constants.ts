import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
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
  [ChainId.ROPSTEN]: '0x8E0E163E9F66d639c448d1f5e0594CaC2558305e',
  [ChainId.RINKEBY]: '0x8E0E163E9F66d639c448d1f5e0594CaC2558305e',
  [ChainId.GÖRLI]: '0x8E0E163E9F66d639c448d1f5e0594CaC2558305e',
  [ChainId.KOVAN]: '0x8E0E163E9F66d639c448d1f5e0594CaC2558305e'
}

export const INIT_CODE_HASHES = {
  [ChainId.MAINNET]: '0x068929976e9b11179f781aadb37dc33b6fc0d30a27419125438dab4d4d11418b',
  [ChainId.ROPSTEN]: '0xeb421c75c82ac3e801293f21bf65f03f21b5a26a0921355126d34b4c5173bfe9',
  [ChainId.RINKEBY]: '0xeb421c75c82ac3e801293f21bf65f03f21b5a26a0921355126d34b4c5173bfe9',
  [ChainId.GÖRLI]: '0xeb421c75c82ac3e801293f21bf65f03f21b5a26a0921355126d34b4c5173bfe9',
  [ChainId.KOVAN]: '0xeb421c75c82ac3e801293f21bf65f03f21b5a26a0921355126d34b4c5173bfe9'
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

import invariant from 'tiny-invariant'
import {ChainId} from '../constants'
import {validateAndParseAddress} from '../utils'
import {Currency} from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GOERLI]: new Token(ChainId.GOERLI, '0x440F4dAc53209030807A339062db28421b995919', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.SKALE]: new Token(ChainId.SKALE, '0xD2Aaa00700000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.SKALE_TESTNET]: new Token(ChainId.SKALE_TESTNET, '0xD2Aaa00700000000000000000000000000000000', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.AURORA_TESTNET]: new Token(ChainId.AURORA_TESTNET, '0x219bF573A543B8246BdA9c2606AFCB6BcbAcC7da', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BOBA_TESTNET]: new Token(ChainId.BOBA_TESTNET, '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.AURORA]: new Token(ChainId.AURORA, '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BOBA]: new Token(ChainId.BOBA, '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, '0x26FA2E430c1c252cD8f2ddB02801d4a4f30936fF', 18, 'WBNB', 'Wrapped BNB')
}

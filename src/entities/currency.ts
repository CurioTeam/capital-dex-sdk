import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string
  public readonly displaySymbol?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly ETHER_NEON: Currency = new Currency(18, 'ETH', 'Ether', 'NEON')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   * @param displaySymbol
   */
  protected constructor(decimals: number, symbol?: string, name?: string, displaySymbol?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.displaySymbol = symbol ?? displaySymbol
  }
}

const ETHER = Currency.ETHER
const ETHER_NEON = Currency.ETHER_NEON
export { ETHER, ETHER_NEON }

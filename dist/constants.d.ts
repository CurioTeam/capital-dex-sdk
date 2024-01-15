import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    GOERLI = 5,
    SKALE = 836542336838601,
    SKALE_TESTNET = 1171947029810826,
    AURORA_TESTNET = 1313161555,
    AURORA = 1313161554,
    BOBA_TESTNET = 28,
    BOBA = 288,
    BSC_TESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESSES: {
    1: string;
    5: string;
    836542336838601: string;
    1171947029810826: string;
    28: string;
    1313161555: string;
    1313161554: string;
    288: string;
    97: string;
};
export declare const INIT_CODE_HASHES: {
    1: string;
    5: string;
    836542336838601: string;
    1171947029810826: string;
    28: string;
    1313161555: string;
    1313161554: string;
    288: string;
    97: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};

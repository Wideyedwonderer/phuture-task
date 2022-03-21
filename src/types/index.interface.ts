import { BigNumber } from "ethers";

export interface Index {
    id: number;
    name: string;
    ethPriceInWei: BigNumber;
    usdPriceInCents: number;
    usdCapitalization: number;
    percentageChange: number;
}
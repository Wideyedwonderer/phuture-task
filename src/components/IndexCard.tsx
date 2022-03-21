import { ethers } from "ethers";
import { Index } from "../types/index.interface";
import indexCardStyles from './IndexCard.module.css';
let currencyFormatter = require('currency-formatter');

const IndexCard = ({indexData}: {indexData: Index}) => {

    return (
        <div className={indexCardStyles.card}>
            
                <div className={indexCardStyles.container}>
                    <div className={indexCardStyles.indexName}>

                    {indexData.name}
                    </div>

                    <div className={indexCardStyles.indexPrice}>

                    {`$${indexData.usdPriceInCents / 100} / ${ethers.utils.formatEther(indexData.ethPriceInWei)} ETH`}
                    </div>

                    <div className={indexCardStyles.bottomContainer}>
                        <span className={indexCardStyles.usdCapitalization}>{`$${currencyFormatter.format(indexData.usdCapitalization, 'USD')}`}</span>
                        <span className={indexCardStyles.percentageChange}>{`+${indexData.percentageChange}%`}</span>
                    </div>
                </div>
            
        </div>
    )
}
export default IndexCard;
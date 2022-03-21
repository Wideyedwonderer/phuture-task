import { ethers } from "ethers";
import { useMemo } from "react";

export function useContract(address: string, abi: any, provider: ethers.providers.Web3Provider | undefined) {

    const contract = useMemo(() => 
        new ethers.Contract(address, abi, provider)
    ,[address, provider]);

    if(!provider) {
        return null;
    }
    return contract;
  }
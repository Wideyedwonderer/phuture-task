import React, { useCallback, useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BigNumber, Contract, ethers } from "ethers";
import Indexer from './constants/abis/indexer.json';
import { CONTRACTS } from './constants/contracts';
import { useContract } from './hooks/useContract';
import Header from './header/Header';
import { Group } from './types/group.interface';
import { Web3Provider } from '@ethersproject/providers';
import { Index } from './types/index.interface';
import IndexGroup from './components/IndexGroup';
import IndexGroupsList from './components/IndexGroupsList';

function App() {
  const [groupData, setGroupData] = useState<Group[]>();
  const [network, setNetwork] = useState<string>();

  const [provider, setProvider] = useState<Web3Provider>();
  const indexerContract = useContract(CONTRACTS.INDEXER_ROPSTEN_ADDRESS, Indexer.abi, provider);


//  	const subscribeToProviderEvents = useCallback(() => {
// console.log('asdasdasdjdfkfdgjs')
// 		if (provider) {
// 			if (!provider.on) {
// 				return;
// 			}

// 			provider.on("network", (newNetwork, oldNetwork) => {
//         if (oldNetwork) {
//           window.location.reload();
//       }
//         setNetwork(provider.network.name)});
// 		}

// 	}, [provider]);

  // useEffect(() => {
  //   subscribeToProviderEvents();
  // }, [provider]);

  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider((window as any).ethereum, "ropsten"));
  }, [network]);

  useEffect(() => {
    const resolveGroupData = async (indexerContract: Contract) => {
      console.log(indexerContract)
      const groupIds: BigInt[] = await indexerContract.getGroupIds();
      const groups: Group[] = [
        {
          name: 'Mock',
          indexes: [
            {
              name: "DeFI",
              ethPriceInWei: BigNumber.from('100000000000000000'),
              id: 1,
              usdCapitalization: 101023,
              usdPriceInCents: 50,
              percentageChange: 20
            },
            {
              name: "DeFI",
              ethPriceInWei: BigNumber.from('100000000000000000'),
              id: 1,
              usdCapitalization: 101023,
              usdPriceInCents: 50,
              percentageChange: 20
            },
            {
              name: "DeFI",
              ethPriceInWei: BigNumber.from('100000000000000000'),
              id: 1,
              usdCapitalization: 101023,
              usdPriceInCents: 50,
              percentageChange: 20
            },
            {
              name: "DeFI",
              ethPriceInWei: BigNumber.from('100000000000000000'),
              id: 1,
              usdCapitalization: 101023,
              usdPriceInCents: 50,
              percentageChange: 20
            }
          ]
        }
      ];
      
      // for(let groupId in groupIds) {
      //   const groupData = await indexerContract.getGroup(groupId);

      //   const groupIndexes: Index[] = [];

      //   for(let indexId in groupData.indexes) {
      //     const index: Index = await indexerContract.getIndex(indexId);
      //     groupIndexes.push(index);
      //   }
      //   groups.push({name: groupData.name, indexes: groupIndexes})
      // }

      setGroupData(groups);
    }
    if(indexerContract) {
      resolveGroupData(indexerContract)
    }
  },[indexerContract])

  
  return (
    <div className="App">
      <Header/>
    
      {groupData ? <IndexGroupsList groupsData={groupData}/> : null}
    </div>
  );
}

export default App;

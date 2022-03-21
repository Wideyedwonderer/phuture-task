import { Group } from "../types/group.interface";
import IndexGroup from "./IndexGroup";
import indexGroupsListStyles from './IndexGroupsList.module.css';

const IndexGroupsList = ({groupsData}: {groupsData: Group[]}) => (
    <div className={indexGroupsListStyles.container}>
        <div 
            className={indexGroupsListStyles.title}
        >
              All Indices
      </div>
    {groupsData?.map((data) => <IndexGroup key={data.name} groupData={data}/>)}
    </div>
    )
export default IndexGroupsList;
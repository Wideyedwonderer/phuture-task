import { Group } from "../types/group.interface";
import IndexCard from "./IndexCard";
import indexGroupStyles from './IndexGroup.module.css';

const IndexGroup = ({groupData}: {groupData: Group}) => {


    return (
        <div>
            <div className={indexGroupStyles.groupName}>{groupData.name}</div>
            <div className={indexGroupStyles.container}>
            {
                groupData?.indexes?.map((indexData) => <IndexCard key={indexData.id} indexData={indexData}/>)
            }
            </div>
        </div>
    )
}

export default IndexGroup;
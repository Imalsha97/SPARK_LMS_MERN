import React  from  "react";
import Tabs from "../components/Tabs";
import Spinner from "../components/Spinner";
const Dashboard = () => {
    const contents = [
        {title:"Books",elements:<h1>Content books</h1>},
        {title:"Members",elements:<h1>Content members</h1>},
    ]
    return (
       <Tabs contents={contents} />
           
      
    );
};
export default Dashboard;




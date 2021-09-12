import React from "react";
import Tabs from "../components/Tabs"; 

const Dashboard = () => {
    // const [active,setActive] = useState(0);
    // const handleClick = (event) =>{
    //     const index = parseInt(event.target.id, 0);
    //     if (index !== active){
    //         setActive(index);
    //     }
    const contents = [
        {title:"Books",elements:<h1>Contents of books go here</h1>},
        {title:"Members",elements:<h1>Contents of Members go here</h1>},
    ]


    return (


        <Tabs contents = {contents} />
        
    
    );


    };
export default Dashboard;
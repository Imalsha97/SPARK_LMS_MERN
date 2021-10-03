import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

import Tabs from "../components/Tabs";

import { getBooks } from "../api/bookAPI";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState([]);
    useEffect(() => {
        setIsLoading(true);
           getBooks()
           .then((response) => {
              if (!response.error) {
                 console.log("response",response.data);
                 setBook(response.data);
              }
           })
           .catch((error) => {
              console.log(error);
           })
           .finally(() => {
              setIsLoading(false);
           });
     },[]);
  
    const contents = [
        {title:"Books",elements:<h1>Content books</h1>},
        {title:"Members",elements:<h1>Content members</h1>},
    ]
    return (
     isLoading ? <Spinner /> : <Tabs contents={contents}/> 
           
      
    );
};
export default Dashboard;




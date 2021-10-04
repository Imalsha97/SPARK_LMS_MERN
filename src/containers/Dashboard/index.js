import React, { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";
import Spinner from "../../components/Spinner";
import Tabs from "../../components/Tabs";
import { getBooks } from "../../api/bookAPI";

import Books from "./Books";

// import Tabs from "../components/Tabs";

// import { getBooks } from "../api/bookAPI";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setIsLoading(true);
           getBooks()
           .then((response) => {
              if (!response.error) {
                 console.log("response",response.data);
                 setBooks(response.data);
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
      { title: "Books", elements: <Books catalog={books} /> },
      { title: "Members", elements: <h1>Content of members go here</h1> },
    ]
    return (
     isLoading ? <Spinner /> : <Tabs contents={contents}/> 
           
      
    );
};
export default Dashboard;




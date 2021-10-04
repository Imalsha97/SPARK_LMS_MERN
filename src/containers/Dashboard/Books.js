import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {

   const updateCatalog=[
      ...catalog,
      {
         id: "3",
         title: "Harry Potter",
         author: "J. K. Rowling",
         isAvailable: true,
         burrowedMemberId: "",
         burrowedDate: "",
       },
       {
         id: "4",
         title: "Harry Potter",
         author: "J. K. Rowling",
         isAvailable: false,
         burrowedMemberId: "",
         burrowedDate: "",
       }

   ];

   const handleTableRowClick = (id) =>{
      console.log(id);
   }
   return (
      <FluidContainer>
         {/* {catalog[0]  &&  catalog[0].title ? catalog[0].title : "Still loading"} */}
         <Table data={updateCatalog} handleRowClick={handleTableRowClick} instruction="Click row to view book" />
      </FluidContainer>
   );
};

export default Books;

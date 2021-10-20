import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import { FluidContainer, Button ,Container } from "../../../components/CommonComponents";

import { useDispatch } from 'react-redux';
import Book from "./Book";
// import AddBookDialog from "./AddBookDialog";
// import AddEditBookDialog from "./AddEditBookDialog";
import AddEditBookDialog from "./AddEditBookDialog";


import { addBook } from "../../../api/bookAPI";
import { addBook as addBookToStore } from "../../../store/booksSlice";


const Books = ({ catalog }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [showAddBookDialog, setShowAddBookDialog] = useState(false);

  const dispatch = useDispatch();

  const handleTableRowClick = (id) => {
    setSelectedBookId(id);
  };

  const handleBookViewBackClick = () => {
    setSelectedBookId(null);
  };
  const handleAddBook = (confirmed,data) => {
    if(confirmed) {
      addBook(data)
      .then((response) => {
        if (!response.error){
          
          dispatch(addBookToStore(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
     
    }
    setShowAddBookDialog(false);
  };

  return selectedBookId === null ? (
    <>
    <FluidContainer>
      <Container flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="flex-start"
      >
        <Button rounded onClick={() =>setShowAddBookDialog(true)}>
          <IoAddSharp/>
        </Button>
      

      </Container>
      <Table
        data={catalog}
        handleRowClick={handleTableRowClick}
        instruction="Click row the view"
      />
    </FluidContainer>
    <AddEditBookDialog 
      show={showAddBookDialog}
      handleClose={handleAddBook}
      />
    </>

  ) : (
    <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
  );
};

export default Books;

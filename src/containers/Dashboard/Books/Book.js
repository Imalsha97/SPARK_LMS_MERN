import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/Spinner";
import ConfirmationDialog from "../../../components/ConfirmationDialog";

import { getBook , lendBook , returnBook } from "../../../api/bookAPI";
import BookCoverPlaceholder from "../../../shared/book-cover-placeholder.png";
import LendDialog from "./LeadDialog";
import { getTodaysDate } from "../../../shared/utils";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const H1 = styled.h1`
  text-align: left;
`;

const H2 = styled.h2`
  text-align: left;
`;

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showLendConfirmation, setShowLendConfirmation ] = useState(false);
  const [showReturnConfirmation, setShowReturnConfirmation ] = useState(false);

 

  useEffect(() => {
    setIsLoading(true);
    getBook(id)
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const handleDelete = (confirmation) => {
    if (confirmation) {
      console.log("Delete confirmed");
    }
    setShowDeleteConfirmation(false);
  };

  const handleLend = (confirmed, memberId) => {
    if (confirmed) {
       lendBook(book.id, memberId, getTodaysDate());
    }
    setShowLendConfirmation(false);
 };
 const handleReturn = (confirmed) => {
  if (confirmed) {
    returnBook(book.id);
  }
    setShowReturnConfirmation(false);
};

  return (
    <>
      <Container>
        <Button onClick={handleBackClick} size={1.5}>
          <IoReturnUpBack />
        </Button>
        {!isLoading && book !== null ? (
          <>
            <FlexRow>
              <ContainerInlineTextAlignLeft>
                <H1>{book.title}</H1>
                <H2>{`by ${book.author}`}</H2>
                <p>
                  Leran ipsum dolor sit amet,fghjjkajkjksjdbchdh bd bjdk ndn kdn
                  njdj dbh vdhdb
                </p>
                {book.isAvailable ? (
                  ""
                ) : (
                  <>
                    <h4>{`Burrowed by: ${book.borrowedMemberId}`}</h4>
                    <h4>{`Burrowed date: ${book.borrowedDate}`}</h4>
                  </>
                )}
              </ContainerInlineTextAlignLeft>
              <ContainerInline>
                <img
                  src={BookCoverPlaceholder}
                  alt="Book Cover Placeholder"
                  style={{ border: "1px solid black" }}
                />
              </ContainerInline>
            </FlexRow>
            <FlexRow>
              {book.isAvailable ? (
                <>
                  <Button onClick={() => setShowLendConfirmation(true)}>
                    Lead
                  </Button>
                  <Button color="danger" onClick={() => setShowDeleteConfirmation(true)}>
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <h4>{`Burrowed by: ${book.borrowedMemberId}`}</h4>
                  <h4>{`Burrowed date: ${book.borrowedDate}`}</h4>
                  <Button onClick={() => setShowReturnConfirmation(true)}>
                    Return
                  </Button>
                </>
              )}
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>
      <ConfirmationDialog
        handleClose={handleDelete}
        show={showDeleteConfirmation}
        headerText="Confirm book deletion"
        detailText="Are you sure want to delete this book? This action can't be undone."
      />
      <LendDialog show={showLendConfirmation} handleClose={handleLend} />
      <ConfirmationDialog
        handleClose={handleReturn}
        show={showReturnConfirmation}
        headerText="Confirm book return"
        detailText="Press 'Confirm' to return book"
      />
    </>
  );
};

export default Book;

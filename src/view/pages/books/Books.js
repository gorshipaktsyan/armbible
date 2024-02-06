import * as React from "react";
import { useState } from "react";
import useAppState from "../../../libs/hooks/useAppState";

import { useNavigate } from "react-router-dom";
import BooksStyledComponents from "./styles";
import BookModal from "./Modal";
import actions from "../../../store/actions";
import { Box } from "@mui/material";

const { StyledBox, StyledTitle, StyledContainer, StyledList, StyledItem } =
  BooksStyledComponents;

export default function Books() {
  const { state, dispatch } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const [chapters, setChapters] = useState();
  const [selectedBookName, setSelectedBookName] = useState();
  const navigate = useNavigate();

  function handlePress(book) {
    dispatch({
      type: actions.SET_CURRENT_BCV,
      payload: { currentBook: book.bookId },
    });
    setChapters(book.chapters);
    setSelectedBookName(book.fullName);
    setIsOpen(true);
  }
  function handleChapterClick(currentChapter) {
    dispatch({
      type: actions.SET_CURRENT_BCV,
      payload: { currentChapter },
    });
    setIsOpen(false);
    navigate("/armbible/chapter");
  }
  return (
    <StyledBox>
      <StyledContainer>
        <StyledTitle>ՆՈՐ ԿՏԱԿԱՐԱՆ</StyledTitle>
        <Box>Վերականգնման տարբերակ</Box>
        <StyledList>
          {state.home.books.map((book) => {
            return (
              <StyledItem key={book.bookId} onClick={() => handlePress(book)}>
                {book.abbreviation}
              </StyledItem>
            );
          })}
        </StyledList>
        <Box sx={{ position: "fixed", left: "48%", bottom: "50px" }}>
          version 1.1.1
        </Box>
        {isOpen && (
          <BookModal
            chapters={chapters}
            bookName={selectedBookName}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleChapterClick={handleChapterClick}
          />
        )}
      </StyledContainer>
    </StyledBox>
  );
}

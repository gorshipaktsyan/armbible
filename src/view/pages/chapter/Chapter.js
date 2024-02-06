import React, { useState, useEffect } from "react";
import BooksService from "../../../services/BooksService";
import useAppState from "../../../libs/hooks/useAppState";
import ChapterStyledComponents from "./styles";
import Verse from "./verse/Verse";
import { Box } from "@mui/material";
import actions from "../../../store/actions";
import { useSwipeable } from "react-swipeable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import AppBar from "../../components/appBar/AppBar";
const config = {
  delta: 10,
  preventScrollOnSwipe: false,
  trackTouch: true,
  trackMouse: false,
  rotationAngle: 0,
  swipeDuration: Infinity,
  touchEventOptions: { passive: true },
};
const {
  StyledChapter,
  StyledContainer,
  StyledFab,
  StyledSubject,
  SubjectTitle,
  StyledContent,
} = ChapterStyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const { state, dispatch } = useAppState();
  const { currentBook, currentChapter } = state.chapter;
  const [verses, SetVerses] = useState(
    BooksService.getChapter({
      currentBook,
      currentChapter,
    })
  );
  const chapterName =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;
  const book = state.home.books.find((book) => book.bookId === currentBook);

  useEffect(() => {
    SetVerses(
      BooksService.getChapter({
        currentBook,
        currentChapter,
      })
    );
  }, [currentChapter, currentBook]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleLeftSwipe() {
    const index = book.content.findIndex(
      (chapter) => chapter === currentChapter + 1
    );
    if (index !== -1) {
      dispatch({
        type: actions.SET_CURRENT_BCV,
        payload: { currentChapter: currentChapter + 1 },
      });
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleRightSwipe() {
    const index = book.content.findIndex(
      (chapter) => chapter === currentChapter - 1
    );
    if (index !== -1) {
      dispatch({
        type: actions.SET_CURRENT_BCV,
        payload: { currentChapter: currentChapter - 1 },
      });
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleRightSwipe();
      } else if (event.key === "ArrowRight") {
        handleLeftSwipe();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleRightSwipe, handleLeftSwipe]);

  const handlers = useSwipeable(
    {
      onSwipedLeft: () => handleLeftSwipe(),
      onSwipedRight: () => handleRightSwipe(),
      swipeDuration: 500,
      preventScrollOnSwipe: true,
      trackMouse: true,
    },
    config
  );

  function handleBack() {
    navigate("/armbible");
  }
  return (
    <>
      <AppBar fullName={book.fullName} chapterName={chapterName} />
      <ScrollToTop currentChapter={currentChapter} />
      <StyledContainer {...handlers}>
        <StyledChapter>
          {currentChapter === 1 && (
            <>
              <SubjectTitle>Թեմա՝</SubjectTitle>
              <StyledSubject>{book.subject}</StyledSubject>
            </>
          )}
          <StyledContent>
            {(verses || []).map((v) => {
              return (
                <Box key={v._id}>
                  <Verse
                    id={v._id}
                    prefix={v.prefix}
                    number={v.number}
                    verse={v.verse}
                  />
                </Box>
              );
            })}
          </StyledContent>
          <StyledFab onClick={handleBack}>
            <ArrowBackIcon
              sx={{
                color: "white",
              }}
            />
          </StyledFab>
        </StyledChapter>
      </StyledContainer>
    </>
  );
}

import { Modal } from "@mui/material";
import BooksStyledComponents from "./styles";

const { StyledModal, StyledModalTitle, StyledModalList, StyledModalItem } =
  BooksStyledComponents;

export default function BookModal({
  chapters,
  bookName,
  isOpen,
  setIsOpen,
  handleChapterClick,
}) {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <StyledModal>
        <StyledModalTitle>{bookName}</StyledModalTitle>
        <StyledModalList>
          {[...Array(chapters + 1).keys()]
            .filter((el) => el !== 0)
            .map((chapter) => {
              return (
                <StyledModalItem
                  key={chapter}
                  onClick={() => handleChapterClick(chapter)}
                >
                  {chapter}
                </StyledModalItem>
              );
            })}
        </StyledModalList>
      </StyledModal>
    </Modal>
  );
}

import styled from "@emotion/styled";
import { Fab } from "@mui/material";
import { Box } from "@mui/system";

const ChapterStyledComponents = {
  StyledContainer: styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(253, 253, 232)",
  }),
  StyledChapter: styled(Box)({
    width: "400px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "64px",
  }),
  StyledContent: styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px",
    padding: "0px 10px",
  }),
  SubjectTitle: styled(Box)({
    fontSize: "16px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  }),
  StyledSubject: styled(Box)({
    fontSize: "16px",
    textAlign: "center",
  }),
  StyledFab: styled(Fab)({
    zIndex: 1000,
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "black",
    "&:hover": { cursor: "pointer", backgroundColor: "black" },
  }),
};
export default ChapterStyledComponents;

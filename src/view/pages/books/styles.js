import styled from "@emotion/styled";
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";

const BooksStyledComponents = {
  StyledBox: styled(Box)({
    minHeight: "100dvh",
    backgroundColor: "rgb(253, 253, 232)",
  }),
  StyledContainer: styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  StyledTitle: styled(Box)({
    marginTop: "30px",
    fontWeight: "bold",
    fontSize: "25px",
  }),
  StyledList: styled(Box)({
    maxWidth: "400px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    marginTop: "10px",
  }),
  StyledItem: styled(Box)({
    padding: "10px 5px",
    fontSize: "20px",
    width: "80px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#f0f0dc",
      cursor: "pointer",
    },
  }),
  StyledModal: styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    border: "2px solid #000",
    boxShadow: "24px",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "rgb(253, 253, 232)",
  }),
  StyledModalTitle: styled(Box)({
    marginTop: "10px",
    fontSize: "20px",
    "&:hover": {
      cursor: "default",
    },
  }),
  StyledModalList: styled(List)({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  }),
  StyledModalItem: styled(ListItem)({
    fontSize: "20px",
    width: "50px",
    height: "50px",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#f0f0dc",
      cursor: "pointer",
    },
  }),
};
export default BooksStyledComponents;

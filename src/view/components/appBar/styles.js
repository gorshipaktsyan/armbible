import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledAppBar = {
  StyledTitle: styled(Box)({
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    fontWeight: "bold",
    margin: "auto",
    "&:hover": {
      cursor: "default",
    },
  }),
};

export default StyledAppBar;

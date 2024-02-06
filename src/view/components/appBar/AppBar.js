import { AppBar, Toolbar, Box, Slide, useScrollTrigger } from "@mui/material";
import StyledAppBar from "./styles";

const { StyledTitle } = StyledAppBar;
export default function AppBarComponent({ fullName, chapterName }) {
  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          backgroundColor: "black",
          zIndex: 1500,
        }}
      >
        <Toolbar>
          <StyledTitle>
            <Box sx={{ fontSize: "16px" }}>{fullName}</Box>
            <Box sx={{ fontSize: "14px" }}>{chapterName}</Box>
          </StyledTitle>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

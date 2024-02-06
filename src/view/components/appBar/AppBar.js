import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: "30px" }} />{" "}
          </IconButton>
          <StyledTitle sx={{ fontSize: "20px", cursor: "default" }}>
            <Box>{fullName}</Box>
            <Box sx={{ marginLeft: "5px" }}>{chapterName}</Box>
          </StyledTitle>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

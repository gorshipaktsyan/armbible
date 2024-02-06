import { Box } from "@mui/material";
import Prefix from "../prefix/Prefix";
import StyledVerse from "./styles";

const { StyledText, StyledVerseNumber } = StyledVerse;

export default function Verse({ id, prefix, number, verse }) {
  return (
    <>
      <Prefix prefix={prefix} />
      <StyledText>
        <StyledVerseNumber>{number}</StyledVerseNumber>
        <Box>{verse}</Box>
      </StyledText>
    </>
  );
}

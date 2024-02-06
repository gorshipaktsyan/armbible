import React from "react";
import StyledPrefix from "./styles";

const { StyledBox, StyledText } = StyledPrefix;

export default function Prefix({ prefix }) {
  if (!prefix) {
    return null;
  }
  return (
    <StyledBox>
      {prefix.split("/").map((e, index) => {
        return <StyledText key={index}>{e}</StyledText>;
      })}
    </StyledBox>
  );
}

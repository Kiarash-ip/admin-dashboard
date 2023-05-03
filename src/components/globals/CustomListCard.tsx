import React, { ReactElement } from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

const CustomStyledList = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  "& > div:not(:first-child)": {
    marginTop: "24px",
  },
}));

interface Props {
  children: React.ReactNode;
}

export default function CustomListCard({ children }: Props) {
  return <CustomStyledList>{children}</CustomStyledList>;
}

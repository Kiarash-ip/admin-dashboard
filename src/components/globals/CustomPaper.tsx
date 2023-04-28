import React, { ReactElement } from "react";
import { styled, SxProps } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const CustomCard = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(33, 43, 54)",
  color: "rgb(255, 255, 255)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  backgroundImage: "none",
  overflow: "hidden",
  position: "relative",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
  borderRadius: "16px",
  zIndex: "0",
  display: "flex",
  alignItems: "center",
}));

interface Props {
  children: ReactElement;
  extraStyles?: SxProps;
}

export default function CustomPaper({ children, extraStyles = {} }: Props) {
  return <CustomCard sx={extraStyles}>{children}</CustomCard>;
}

import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MovingIcon from "@mui/icons-material/Moving";
import TinyChart from "./TinyChart";
import { tokens } from "../../theme";
import CustomPaper from "../globals/CustomPaper";

const ProgressResult = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "16px",
  marginBottom: "8px",
}));

const ProgressIcon = styled(MovingIcon, {
  shouldForwardProp: (prop) => prop !== "positive",
})<{ positive: boolean }>(({ theme, positive }) => ({
  width: "24px",
  height: "24px",
  marginRight: "8px",
  padding: "4px",
  borderRadius: "50%",
  ...(positive
    ? {
        color: "rgb(54, 179, 126)",
        backgroundColor: "rgba(54, 179, 126, 0.16)",
      }
    : {
        color: "rgb(255, 86, 48)",
        backgroundColor: "rgba(255, 86, 48, 0.16)",
        transform: "rotate(70deg)",
      }),
}));

export default function CardComp() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid item md={4}>
      <CustomPaper
        extraStyles={{
          display: "flex",
          padding: "24px",
        }}
      >
        <>
          <Box flexGrow="1">
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              Total Active Users
            </Typography>
            <ProgressResult>
              <ProgressIcon positive={true} />
              <Typography
                component="div"
                variant="subtitle2"
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                +2.6%
              </Typography>
            </ProgressResult>
            <Typography
              variant="h3"
              sx={{
                fontSize: "2rem",
                fontWeight: "700",
                lineHeight: "1.57143",
              }}
            >
              18,765
            </Typography>
          </Box>
          <div>
            <TinyChart color={colors.blueAccent[600]} />
          </div>
        </>
      </CustomPaper>
    </Grid>
  );
}

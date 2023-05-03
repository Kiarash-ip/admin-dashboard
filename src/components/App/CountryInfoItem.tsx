import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";
import WindowIcon from "@mui/icons-material/Window";
import AndroidIcon from "@mui/icons-material/Android";

const CustomStyleSliceBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "1 1 0%",
}));

interface Props {
  title: string;
  src: string;
  android: string;
  windows: string;
  mac: string;
}

export default function CountryInfoItem({
  title,
  src,
  android,
  windows,
  mac,
}: Props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        "& > div:not(:first-child)": {
          marginLeft: "16px",
        },
      }}
    >
      <CustomStyleSliceBox minWidth="120px">
        <Box mr="8px" width="28px">
          <Box
            component="img"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={src}
            alt={title}
          />
        </Box>
        <Typography component="h6" variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
      </CustomStyleSliceBox>
      <CustomStyleSliceBox minWidth="72px">
        <AndroidIcon
          sx={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
            color: "rgb(99, 115, 129)",
          }}
        />
        <Typography component="p" variant="body1" fontSize="0.875rem">
          {android}
        </Typography>
      </CustomStyleSliceBox>
      <CustomStyleSliceBox minWidth="72px">
        <WindowIcon
          sx={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
            color: "rgb(99, 115, 129)",
          }}
        />
        <Typography component="p" variant="body1" fontSize="0.875rem">
          {windows}
        </Typography>
      </CustomStyleSliceBox>
      <CustomStyleSliceBox minWidth="72px">
        <AppleIcon
          sx={{
            width: "16px",
            height: "16px",
            marginRight: "4px",
            color: "rgb(99, 115, 129)",
          }}
        />
        <Typography component="p" variant="body1" fontSize="0.875rem">
          {mac}
        </Typography>
      </CustomStyleSliceBox>
    </Box>
  );
}

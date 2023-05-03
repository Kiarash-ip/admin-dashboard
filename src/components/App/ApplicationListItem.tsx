import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useTheme, styled } from "@mui/material/styles";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";
import WindowIcon from "@mui/icons-material/Window";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";

export enum CostPlatform {
  free = "free",
  noneFree = "noneFree",
}

const CustomStyleRateContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingRight: "24px",
}));

const CustomStyleAvatar = styled(Avatar)(() => ({
  width: "48px",
  height: "48px",
  flexShrink: "0",
  display: "flex",
  borderRadius: "12px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(145, 158, 171, 0.16)",
}));

const CustomStyleChip = styled(Chip, {
  shouldForwardProp: (props) => props !== "type",
})<{ type: CostPlatform }>(({ theme, type }) => ({
  height: "24px",
  minWidth: "22px",
  borderRadius: "6px",
  cursor: "default",
  alignItems: "center",
  whiteSpace: "nowrap",
  display: "inline-flex",
  justifyContent: "center",
  textTransform: "capitalize",
  padding: "0px 8px",
  fontSize: "0.75rem",
  fontWeight: "700",
  "& .MuiChip-label": {
    padding: "0",
  },
  ...(type === CostPlatform.free
    ? {
        backgroundColor: "rgba(54, 179, 126, 0.16)",
        color: "rgb(134, 232, 171)",
      }
    : type === CostPlatform.noneFree
    ? {
        color: "rgb(255, 172, 130)",
        backgroundColor: "rgba(255, 86, 48, 0.16)",
      }
    : {}),
}));

interface Props {
  avatar: string;
  title: string;
  platform: string;
  cost: string;
  rate: number;
  reviews: string;
}

export default function ApplicationListItem({
  avatar,
  title,
  platform,
  cost,
  rate,
  reviews,
}: Props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" alignItems="center">
      <CustomStyleAvatar
        variant="square"
        imgProps={{
          sx: {
            width: "24px",
            height: "24px",
          },
        }}
        src={avatar}
      />
      <Box ml="16px" flexGrow={1} minWidth="160px">
        <Typography variant="h6">{title}</Typography>
        <Box
          display="flex"
          alignItems="center"
          mt="4px"
          color={colors.grey[300]}
        >
          {platform === "Mac" ? (
            <AppleIcon />
          ) : platform === "Windows" ? (
            <WindowIcon />
          ) : (
            <></>
          )}
          <Typography
            variant="caption"
            sx={{
              margin: "0 8px 0 4px",
            }}
          >
            {platform}
          </Typography>
          <CustomStyleChip
            label={cost}
            type={cost === "Free" ? CostPlatform.free : CostPlatform.noneFree}
          />
        </Box>
      </Box>
      <CustomStyleRateContainer>
        <Rating name={`${title}-rate`} value={rate} precision={0.5} readOnly />
        <Typography
          variant="body2"
          sx={{
            color: colors.grey[300],
            marginTop: "4px",
          }}
        >
          {reviews} reviews
        </Typography>
      </CustomStyleRateContainer>
    </Box>
  );
}

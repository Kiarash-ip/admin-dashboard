import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import CupIcon from "../globals/CupIcon";

interface Props {
  avatar: string;
  name: string;
  likes: string;
  cupColor: string;
  cupBgColor: string;
}

export default function AuthorListItem({
  avatar,
  name,
  likes,
  cupColor,
  cupBgColor,
}: Props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > div:not(:first-child)": {
          marginLeft: "16px",
        },
      }}
    >
      <Avatar src={avatar} />
      <Box flexGrow={1}>
        <Typography component="h6" variant="subtitle1">
          {name}
        </Typography>
        <Typography
          component="span"
          variant="caption"
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "4px",
            color: colors.grey[300],
          }}
          fontSize="0.75rem"
        >
          <FavoriteIcon
            sx={{
              width: "16px",
              height: "16px",
              marginRight: "4px",
            }}
          />
          {likes}
        </Typography>
      </Box>
      <CupIcon color={cupColor} bgColor={cupBgColor} />
    </Box>
  );
}

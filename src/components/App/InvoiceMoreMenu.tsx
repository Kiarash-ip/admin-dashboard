import React, { forwardRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import ListItemText from "@mui/material/ListItemText";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ShareIcon from "@mui/icons-material/Share";
import Backdrop from "@mui/material/Backdrop";
import { Divider, Menu } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../../theme";

const CustomStyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: "unset",
  marginRight: "16px",
}));

const CustomStyledListItem = styled(ListItem)(() => ({
  padding: "0",
  fontWeight: "400",
}));

interface Props {
  open: boolean;
  handleClose(): void;
  anchorEl: HTMLElement | null;
}

function InvoiceMoreMenu({ open, handleClose, anchorEl }: Props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      // MenuListProps={{
      //   sx: {
      //     backgroundColor: colors.primary[400],
      //   },
      // }}
      PaperProps={{
        sx: {
          backgroundColor: colors.primary[400],
          backgroundImage: "none",
          padding: "8px",
          borderRadius: "12px",
          minWidth: "160px",
          overflow: "inherit",
          "::before": {
            content: `""`,
            width: "12px",
            height: "12px",
            backgroundColor: colors.primary[400],
            position: "absolute",
            top: "14px",
            right: "-6px",
            borderRight: "1px solid rgba(145, 158, 171, 0.12)",
            borderTop: "1px solid rgba(145, 158, 171, 0.12)",
            transform: "rotate(45deg)",
          },
          "& .MuiList-root": {
            padding: "0",
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "top" }}
    >
      <CustomStyledListItem onClick={handleClose}>
        <ListItemButton sx={{ padding: "6px 8px", borderRadius: "6px" }}>
          <CustomStyledListItemIcon>
            <DownloadIcon />
          </CustomStyledListItemIcon>
          <ListItemText
            primary="Download"
            sx={{
              margin: "0",
            }}
          />
        </ListItemButton>
      </CustomStyledListItem>
      <CustomStyledListItem onClick={handleClose}>
        <ListItemButton sx={{ padding: "6px 8px", borderRadius: "6px" }}>
          <CustomStyledListItemIcon>
            <LocalPrintshopIcon />
          </CustomStyledListItemIcon>
          <ListItemText
            primary="Print"
            sx={{
              margin: "0",
            }}
          />
        </ListItemButton>
      </CustomStyledListItem>
      <CustomStyledListItem onClick={handleClose}>
        <ListItemButton sx={{ padding: "6px 8px", borderRadius: "6px" }}>
          <CustomStyledListItemIcon>
            <ShareIcon />
          </CustomStyledListItemIcon>
          <ListItemText
            primary="Share"
            sx={{
              margin: "0",
            }}
          />
        </ListItemButton>
      </CustomStyledListItem>
      <Divider
        sx={{
          margin: "8px 0",
          borderStyle: "dashed",
        }}
      />
      <CustomStyledListItem onClick={handleClose}>
        <ListItemButton
          sx={{
            padding: "6px 8px",
            borderRadius: "6px",
            justifyContent: "flex-start",
          }}
        >
          <CustomStyledListItemIcon>
            <DeleteIcon
              sx={{
                color: "rgb(255, 86, 48)",
              }}
            />
          </CustomStyledListItemIcon>
          <ListItemText
            primary="Delete"
            sx={{
              margin: "0",
              color: "rgb(255, 86, 48)",
            }}
          />
        </ListItemButton>
      </CustomStyledListItem>
    </Menu>
  );
}

export default InvoiceMoreMenu;

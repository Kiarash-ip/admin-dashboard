import React, { useState } from "react";
import { Avatar, Drawer, Typography } from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material/IconButton";
import { tokens } from "../../theme";
import SideBarList from "./SideBarList";
import Box from "@mui/system/Box";
import Logo from "./Logo";

interface Props {
  open: boolean;
  toggleSidebar(): void;
}

interface IconButtonProps extends MuiIconButtonProps {
  open?: boolean;
}

const drawerWidth = 280;
const buttonWidth = 26;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "88px",
});

const buttonOpenedMixin = (theme: Theme): CSSObject => ({
  left: drawerWidth - buttonWidth / 2,
  transform: `rotate(${0}deg)`,
  transition: theme.transitions.create(["left", "transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const buttonClosedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create(["left", "transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  left: `calc(88px  - ${buttonWidth / 2}px)`,
  transform: `rotate(${180}deg)`,
});

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "relative",
  width: drawerWidth,
  height: "100%",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const CustomIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "open",
})<IconButtonProps>(({ theme, open }) => ({
  position: "fixed",
  top: "100px",
  cursor: "pointer",
  left: "268px",
  width: "26px",
  height: "26px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...(open && {
    ...buttonOpenedMixin(theme),
  }),
  ...(!open && {
    ...buttonClosedMixin(theme),
  }),
}));

const CustomProfile = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  ...(open
    ? {
        display: "flex",
      }
    : {
        display: "none",
      }),
  cursor: "pointer",
  padding: "16px 20px",
  borderRadius: "12px",
  marginTop: "24px",
}));

const Sidebar = ({ open, toggleSidebar }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <CustomDrawer
        variant="permanent"
        open={open}
        hideBackdrop={true}
        sx={{
          "& .MuiDrawer-paper": {
            "::-webkit-scrollbar": {
              display: "none",
            },
            backgroundColor: colors.primary[500],
          },
        }}
      >
        <CustomIconButton
          onClick={toggleSidebar}
          open={open}
          sx={{
            ".MuiIconButton-root": {
              backgroundColor: "#141b2d",
            },
            border: `1px solid ${colors.grey[500]}`,
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              width: "16px",
              height: "16px",
            }}
          />
        </CustomIconButton>
        <Box padding={open ? "24px 20px 16px 20px" : "0"}>
          <Logo open={open} />
          <CustomProfile bgcolor={colors.primary[400]} open={open}>
            <Avatar src="/images/img_avatar.png" />
            <Box paddingLeft="16px">
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                }}
              >
                Minimal UI
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.grey[300],
                }}
              >
                Admin
              </Typography>
            </Box>
          </CustomProfile>
        </Box>
        <SideBarList open={open} />
      </CustomDrawer>
    </>
  );
};

export default Sidebar;

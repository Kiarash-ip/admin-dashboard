import React from 'react'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PublicIcon from '@mui/icons-material/Public';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { tokens, useMode } from '../../theme';
import { Avatar, useTheme } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { alpha, styled } from '@mui/material';
import Box from '@mui/material/Box';

type Props = {
  open: boolean
}

const Navigation = ({open}: Props) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  console.log(colors)
  return (
    <AppBar sx={{
      backgroundColor: alpha(colors.primary[500], 0.8),
      backdropFilter: "blur(6px)",
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      height: "90px",
      width: "unset",
      transition: theme.transitions.create('left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      ...(open ? {
        left: "280px"
      } : {
        left: "88px"
      })
    }}>
      <IconButton size='large' sx={{":hover": {
          transform: "scale(1.1)",
          transition: "all 0.3s ease"
        }}}>
        <SearchOutlinedIcon />
      </IconButton>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        gap: "5px"
      }}>
        <IconButton size='large' sx={{":hover": {
          transform: "scale(1.1)",
          transition: "all 0.3s ease"
        }}}>
        <PublicIcon />
        </IconButton>
        <IconButton size='large' sx={{":hover": {
          transform: "scale(1.1)",
          transition: "all 0.3s ease"
        }}}>
        <Badge badgeContent={5} color="warning" sx={{color: "white", "& .MuiBadge-badge": {
          color: "#fff"
        }}}> 
          <NotificationsIcon />
        </Badge>
        </IconButton>
        <IconButton size='large' sx={{":hover": {
          transform: "scale(1.1)",
          transition: "all 0.3s ease"
        }}}>
          <PeopleAltIcon />
        </IconButton>
        <IconButton sx={{":hover": {
          transform: "scale(1.1)",
          transition: "all 0.3s ease"
        }}}>
          <Avatar src='/images/img_avatar.png' sx={{
            width: "40px",
            height: "40px",
          }}/>
        </IconButton>
      </Box>
    </AppBar>
  )
}

export default Navigation
import React from 'react'
import { sidebar } from '../../mockDatas'
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem'
import { Divider, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { tokens } from '../../theme'

const SideBarList = ({open}: {open: boolean}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <List>{sidebar.map(list => {
        return <>
            <ListItem sx={{
                ...(open ? {
                    display: "block"
                } : {
                    display: "none"
                })
            }}>
                <ListItemText primary={list.title} sx={{
                    color: colors.grey[200],
                    textTransform: "uppercase",
                    "& .MuiListItemText-primary": {
                        fontSize: "11px",
                        fontWeight: "700"
                    }
                }}/>
            </ListItem>
            {list.items.map(subList => {
                return <ListItem key={subList.id} sx={{
                    ...(open ? {
                        padding: "8px 12px"
                    } : {
                        padding: "0px 6px",
                    }),
                    "& .MuiButtonBase-root": {
                        borderRadius: "8px",
                        ...(!open && {
                            flexDirection: "column",
                        })
                    }
                }}>
                <ListItemButton sx={{
                    "& .MuiListItemIcon-root": {
                        ...(open ? {
                            marginRight: "16px",
                        }: {
                            marginRight: "0",
                        }),
                        minWidth: "unset"
                    }
                }}>
                    <ListItemIcon>
                        <subList.icon sx={{
                            width: "24px",
                            height: "24px",
                        }}/>
                    </ListItemIcon>
                    <ListItemText primary={subList.title} sx={{
                    color: colors.grey[100],
                    "& .MuiListItemText-primary": {
                        ...(open ? {
                            fontSize: "16px"
                        }: {
                            fontSize: "10px"
                        }),
                        fontWeight: "400"
                    }
                }}/>
                </ListItemButton>
            </ListItem>
            })}
            <Divider sx={{
                ...(open ? {
                    display: "none"
                } : {
                    display: "block",
                    margin: "0 auto",
                    width: "50%"
                })
            }}/>
        </>
    })}</List>
  )
}

export default SideBarList
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { text } from 'stream/consumers';

interface Props {
    menuOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppBarDrawer = ({ menuOpen, setOpen }: Props) => {
    return (
        <Drawer anchor='left' open={menuOpen} onClose={() => { setOpen(!menuOpen) }}>
            <Box>
                <List>
                    <ListItem key={"Inbox"} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText primary={"Inbox"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>

    )
}

export default AppBarDrawer
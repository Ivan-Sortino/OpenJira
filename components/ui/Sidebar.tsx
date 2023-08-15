import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Mail', 'Drafts']

export const SideBar = () => {
  return (
    <Drawer 
        anchor="left"
        open={ true }
        onClose={() => console.log('cerrado')}
        
    >
        <Box sx={{width:'250'}}>
            <Box sx={{padding: '5px 10px'}}>
                <Typography variant="h4">Menu</Typography>
            </Box>

            <List>
                {
                    menuItems.map((text, index) =>(
                        <ListItemButton key={ text}>
                            <ListItemIcon>
                                { index % 2 ? <InboxIcon/>: <MailOutlineIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>

                        </ListItemButton>
                    ))
                }
            </List>
            <Divider></Divider>
        </Box>
        

    </Drawer>
  )
}

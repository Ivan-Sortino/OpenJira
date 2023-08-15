import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <IconButton
          size="large"
          edge="start">
            <MenuIcon/>
          </IconButton>
          <Typography variant='h5'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}

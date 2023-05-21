import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '/pictures/LOGO.png'
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import Link from 'next/link';
const NavList = styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
});

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl0, setAnchorEl0] = React.useState(null);

    const handleDrawerToggle = () => {
      setDrawerOpen(!drawerOpen);
    };
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClick1 = (event) => {
        setAnchorEl0(event.currentTarget);
      };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    }; 
    const handleMenuClose1 = () => {
        setAnchorEl0(null);
      };

      const [isTransparent, setIsTransparent] = React.useState(true);
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.onscroll = function () {
            if (window.scrollY <= 200) {
              setIsTransparent(true);
            } else {
              setIsTransparent(false);
            }
          };
        }
      }, []);
  return (
    <>
    <AppBar  position="fixed" sx={{ display: { md: 'none' , background:"#fff"}}}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{color:"black"}} />
        </IconButton>
      </Toolbar>
    </AppBar>
    <AppBar position="fixed" sx={{ display: { xs: 'none', md: 'block' , background: isTransparent ? 'white' : 'none',
          backdropFilter: isTransparent ? 'none' : 'blur(14px) saturate(180%)',
          transition: 'all 0.5s ease', overflow:"hidden"} }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly !important' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        </IconButton>
        <Image src={logo} width={100}/>
        <NavList sx={{color:"black" }}>
          <Button color="inherit" sx={{ fontWeight:"600" , fontSize:{xs:"13px" , lg:"15px"}}}>Home</Button>
          <Button color="inherit" sx={{ fontWeight:"600", fontSize:{xs:"13px" , lg:"15px"}}} onClick={handleMenuClick1}>
            Our Methodologies <ExpandMoreIcon />
          </Button>
          <Menu
            anchorEl={anchorEl0}
            open={Boolean(anchorEl0)}
            onClose={handleMenuClose1}
          >
            <MenuItem onClick={handleMenuClose1}>Methodology 1</MenuItem>
            <MenuItem onClick={handleMenuClose1}>Methodology 2</MenuItem>
            <MenuItem onClick={handleMenuClose1}>Methodology 3</MenuItem>
          </Menu>
          <Button color="inherit" sx={{ fontWeight:"600", fontSize:{xs:"13px" , lg:"15px"}}} onClick={handleMenuClick}>
            Programs <ExpandMoreIcon />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Program 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Program 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Program 3</MenuItem>
          </Menu>
          <Button sx={{ fontWeight:"600", fontSize:{xs:"13px" , lg:"15px"}}} color="inherit">Success Stories</Button>
          <Button sx={{ fontWeight:"600", fontSize:{xs:"13px" , lg:"15px"}}} color="inherit">Blog</Button>
        </NavList>
      <Link href={{pathname: '/Register', query: {price: 349}}}><Button variant="contained" sx={{background:"linear-gradient(0deg, #FCD281 0%, #FBCF7A 15%, #FAC669 35.99%, #F7B94D 59.99%, #F4A627 85.99%, #F39B0E 99.98%)" , borderRadius:"52.8079px" ,fontWeight:"700" , color:"#000" , fontSize:"14px" , textTransform:"none"}}>Register Now</Button></Link> 
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}  >
      <Image src={logo} width={100} style={{display:"flex" , alignSelf:"center", marginTop:"1em"}} />
        <List>
          <ListItem button >
            <ListItemText sx={{textAlign:"center" }} primary="Home" />
          </ListItem>
          <ListItem button onClick={handleMenuClick1} >
            <ListItemText sx={{textAlign:"center"}} primary="Our Methodologies" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button onClick={handleMenuClick}>
            <ListItemText sx={{textAlign:"center"}} primary=" Programs" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button >
            <ListItemText sx={{textAlign:"center"}} primary="Success Stories" />
          </ListItem>
          <ListItem button >
            <ListItemText sx={{textAlign:"center"}} primary="Blog" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
    </>
  );
};

export default Navbar;

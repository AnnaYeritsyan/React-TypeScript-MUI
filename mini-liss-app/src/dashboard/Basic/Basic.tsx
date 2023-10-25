import * as React from 'react';
import { ReactNode } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import { Clients } from './Clients/Clients';
// import { Manipulations } from './Manipulations/Manipulations';
import   {useState } from "react";
import { Box, Button, Typography, Paper, Link } from "@mui/material";
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'
import clientImage from '../../assets/img/client.svg';
import manipulationsImage from '../../assets/img/manipulations.svg';
import ordersImage from '../../assets/img/orders.svg';
import resultsImage from '../../assets/img/results.svg';
import nomenclatureImage from '../../assets/img/nomenclature.svg';
import reportsImage from '../../assets/img/reports.svg';
import employesImage from '../../assets/img/staff.svg';
import adminImage from '../../assets/img/admin.svg';
import { Dashboard } from '../dashboard';
import {Outlet} from 'react-router-dom'
import { Clients } from '../Clients/Clients';
import { LangSelect } from '../LangSelect/LangSelect';



const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
    '.MuiBox-root':{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "9px"
    }
  }));
// import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const papername = [{
    name:"Clients",
    img:clientImage
}, 
{ name:"Manipulations",
img:manipulationsImage
},{
    name:"Orders",
    img:ordersImage
}, {
    name:"Results",
    img:resultsImage
},{
    name:"Nomenclature", 
    img: nomenclatureImage 
},{
    name:"Price lists",
    img:clientImage
},{
    name:"Reports",
    img:reportsImage
}, {
    name:"Employees",
    img:employesImage
},{
    name:"Admin",
    img:adminImage 
}  ]
export default function Basic() {

    const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const locationPathname = window.location.pathname

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <Link href="/dashboard" underline="hover" sx={{color:'white'}}>
  {'Home'+ locationPathname}  
</Link>
          </Typography>
          <Box>
            <LangSelect/>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {papername.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <Box  onClick={()=>navigate(text.name.toLowerCase().replace(" ", ""))} textAlign={"center"}>
                 
                  {<img src={text.img} width={30}/>}
                <Outlet/>
                  </Box>
                </ListItemIcon>
                
             <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
         
        </List>
         
      </Drawer>
      <>
   
      {
       window.location.pathname === "/dashboard"?<Dashboard/> :  window.location.pathname !== '/dashboard' && (
						<Paper
							sx={{
								m: 0,
								p: 1,
								pt: 0.5,
								width: '100%',
								height: `calc(100vh - ${52 + 17}px)`,
								display: 'flex',
								flexDirection: 'column',
								overflow: 'hidden',
							}}
						>
						
						</Paper>
					)}
        </>
         
    
    </Box>
  );
}



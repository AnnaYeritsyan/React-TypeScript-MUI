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
import   {useState } from "react";
import { Box, Button, Typography, Paper, Link } from "@mui/material";
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom'
import clientImage from '../assets/img/client.svg';
import manipulationsImage from '../assets/img/manipulations.svg';
import ordersImage from '../assets/img/orders.svg';
import resultsImage from '../assets/img/results.svg';
import nomenclatureImage from '../assets/img/nomenclature.svg';
import reportsImage from '../assets/img/reports.svg';
import employesImage from '../assets/img/staff.svg';
import adminImage from '../assets/img/admin.svg';


const styledCard ={
    // display: "flex",
    // flexDirection: "column",
    // alignItems:"center",
    // justifyContent: "space-evenly",
    height: "264px",
    // padding: "20px",
    margin:"30px",
    width:210
}
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
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
export const Dashboard=()=>{
    
    const navigate = useNavigate()
    return(
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box>
        <IconButton aria-label="cart">
    
    </IconButton>
        </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", }} >
        {papername.map((e, idx) => (
          <Paper key={idx} sx={styledCard}>
          
            <Box  onClick={()=>navigate(e.name.toLowerCase().replace(" ", ""))} textAlign={"center"}>
              <img src={e.img} width="180px" height="180px" />
            <Typography>{e.name}</Typography>
            </Box> 
        </Paper>
        ))}
      </Box>
     
      </Box>
    )
}



import {Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PaidIcon from '@mui/icons-material/Paid';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DrawerHeader from "../drawer/DrawerHeader";

const drawerWidth = 240;

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
// }));

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
};

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const MiniDrawer: React.FC<{title: string}> = (props) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [cookie] = useCookies();
    const [openMenu, setOpenMenu] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const handleMenuMaster = () => {
      setOpenMenu(!openMenu)
    }

    const isAdminstrator = cookie.roles === 'Administrator' ? true : false;

    let menuAdmin = [];

    if(openMenu){

      for(let role of cookie.role){
        if(role === "VIEW_USER"){
          menuAdmin.push(<Link key='VIEW_USER' to="/masterdata/user/revamp" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="User-revamp" />
          </ListItemButton>
        </Link>)
        } else if(role === 'VIEW_ROLE'){
          menuAdmin.push(<Link key='VIEW_ROLE' to="/masterdata/role-header" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <RecentActorsIcon />
            </ListItemIcon>
            <ListItemText primary="Role-revamp" />
          </ListItemButton>
        </Link>)
        }
      }
    };

    let mainMenu = [];
    for(let role of cookie.role){

      if(role === 'VIEW_TRANSAKSI_BON_SEMENTARA'){
        mainMenu.push( 
          <List key={role}>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem
                key={"Bon Sementara"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AddCardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Bon Sementara"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        )
      } else if(role === 'VIEW_REALISASI'){
        mainMenu.push( 
        <List key={role}>
          <Link
            to="/realisasi"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem
              key={"Realisasi"}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CreditScoreIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Realisasi"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        )
      } else if(role === 'VIEW_PULLING'){
        mainMenu.push( 
          <List key={role}>
            <Link
              to="/pulling-account"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem
                key={"Pulling Account"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Pulling Account"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        )
      } else if(role === 'VIEW_DEPOSIT'){
        mainMenu.push(
          <List key={role}>
            <Link to="/deposit" style={{ textDecoration: "none", color: "black" }}>
              <ListItem key={"VIEW_DEPOSIT"} disablePadding sx={{ display: "block" }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5,}}>
                  <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center",}}>
                    <PaidIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Deposit"} sx={{ opacity: open ? 1 : 0 }}/>
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        )
      } else if(role === 'VIEW_TYPE_GL'){
        mainMenu.push(
          <List key={role}>
            <Link to="/type-general-ledger" style={{ textDecoration: "none", color: "black" }}>
              <ListItem key={"VIEW_TYPE_GL"} disablePadding sx={{ display: "block" }}>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5,}}>
                  <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center",}}>
                    <CurrencyExchangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"TYpe GL"} sx={{ opacity: open ? 1 : 0 }}/>
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        )
      } else if(role === 'VIEW_JURNAL_ENTRY'){
        mainMenu.push(
          <List key={role}>
          <Link to="/jurnal-entry" style={{ textDecoration: "none", color: "black" }}>
            <ListItem key={"VIEW_JURNAL_ENTRY"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5,}}>
                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center",}}>
                  <BusinessCenterIcon />
                </ListItemIcon>
                <ListItemText primary={"Jurnal Entry"} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        )
      }
    }

    return(
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton 
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                       {props.title}
                    </Typography>
                </Toolbar>

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                    },
                  }}
                  variant="persistent"
                  anchor="left"
                  open={open}
            >
                <DrawerHeader>
                    <h4 style={{ marginRight: 50 }}>MENU</h4>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {
                      isAdminstrator && <ListItemButton onClick={handleMenuMaster}>
                        <ListItemIcon>
                          <FolderSharedIcon />
                        </ListItemIcon>
                        <ListItemText primary="User Managment" />
                        {openMenu ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    }
                    {
                      <Collapse in={openMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          { menuAdmin }
                      </List>
                      </Collapse>
                    }
                </List>

                <List>
                    {mainMenu}
                </List>

            </Drawer>
            {/* <Main open={open}> 
              <DrawerHeader />

            </Main> */}
        </Box>
    )
};

export default MiniDrawer;
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Avatar,
  } from "@mui/material";
  import { Outlet } from "react-router-dom";
  import MenuIcon from "@mui/icons-material/Menu";
  import * as React from "react";
  
  export const CELayout = () => {
    const drawerWidth = 240;
  
    const DrawerApp = () => {
      return (
        <Box>
          <Avatar
            src="https://i.scdn.co/image/ab6761610000e5eb96c4949ee078fbef5d5adb68"
            sx={{ width: 240, height: 200 }}
          />
          <Typography variant="h2" sx={{ textAlign: "center", fontSize: "3rem" }}>
            Gojira
          </Typography>
          <List>
            <ListItem>
              <ListItemButton component="a" href="/">
                <ListItemText primary={"Inicio"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/wiki">
                <ListItemText primary={"Wiki"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/albuns">
                <ListItemText primary={"Albuns"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/social">
                <ListItemText primary={"Social"}></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );
    };
  
    const Container = () => {
      const [abrirNav, setAbrirNav] = React.useState(false);
  
      const abrirModal = () => {
        setAbrirNav(!abrirNav);
      };
  
      return (
        <Box>
          <AppBar>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={abrirModal}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box>
            <Drawer
              open={abrirNav}
              variant="temporary"
              sx={{
                display: { xs: "block", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              <DrawerApp />
            </Drawer>
          </Box>
        </Box>
      );
    };
  
    return (
      <>
        <Container />
  
        <Outlet />
      </>
    );
  };
  
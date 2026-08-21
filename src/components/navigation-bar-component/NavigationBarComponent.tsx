import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

const NavigationBarComponent = () => {
  const [open, setOpen] = useState(false);
  const drawerWidth = 240; // You can adjust this width
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      const drawerWidth = 240; // You can adjust this width
      <AppBar
        position="fixed"
        sx={{
          transition: "margin 0.3s ease, width 0.3s ease",
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
          }),
        }}
      >
        <Toolbar className="bg-blue-950">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h6>Sample NavBar</h6>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#162456"
          },
        }}
      >
        <div className="bg-blue-950">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Home", "About", "Projects", "Contact"].map((text) => (
            <ListItem
              component="button"
              key={text}
              className="bg-blue-950"
              sx={{
                mb: 2,
                backgroundColor: "#162456",
                borderRadius: 1,
                color: "white"
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavigationBarComponent;

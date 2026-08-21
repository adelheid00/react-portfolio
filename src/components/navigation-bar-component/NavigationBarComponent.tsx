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
import { Link } from "react-router-dom";

const NavigationBarComponent = () => {
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const listItems: string[] = ["Home", "About", "Projects", "Contact"];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        className={`transition-[margin,width] duration-300 ease-in-out ${
          open ? `ml-[${drawerWidth}px] w-[calc(100%-${drawerWidth}px)]` : ""
        }`}
      >
        <Toolbar className="bg-blue-950 flex">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className="mr-2"
          >
            <MenuIcon />
          </IconButton>

          {/* Wrapper to push list to the right */}
          <div className="flex flex-grow justify-end">
            <List className="flex flex-row gap-2">
              {listItems.map((text) => (
                <ListItem
                  key={text}
                  className="rounded text-white px-2 py-1"
                  component={Link}
                  to={`/${text.toLowerCase()}`} // ✅ routes to /home, /about, /projects, /contact
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className="w-240 shrink-0 [&_.MuiDrawer-paper]:w-240 [&_.MuiDrawer-paper]:box-border [&_.MuiDrawer-paper]:bg-primary-dark"
      >
        <div className="bg-blue-950">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {listItems.map((text) => (
            <ListItem
              component="button"
              key={text}
              className="mb-2 bg-[#262933] rounded text-white"
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

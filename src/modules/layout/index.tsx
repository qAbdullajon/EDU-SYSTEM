import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  InputBase,
  Link,
  List,
  Paper,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent, useState } from "react";
import routes from "../../router/routes";
import { Outlet } from "react-router-dom";
import "./style.css";
import { UserPopover } from "../../componensts";
import { PersonOutline } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Layout = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#122349",
        color: "white",
        height: "100vh",
      }}
    >
      <Link
        href="/"
        height={70}
        display={"flex"}
        p={"14px"}
        borderBottom={"1px solid #303030"}
        borderRight={"1px solid #303030"}
      >
        <img src="/public/images/logo.svg" alt="Logo" height={40} />
      </Link>
      <List>
        {routes.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            component="a"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              padding: "13px 16px 13px 30px",
              fontSize: "16px",
              fontWeight: "500",
              "&:hover": { backgroundColor: "#49BE6A" },
            }}
          >
            {item.icon}
            <span style={{ marginLeft: 15 }}>{item.title}</span>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: {
              sm: `calc(100% - ${drawerWidth}px)`,
              ml: { sm: `${drawerWidth}px` },
            },
          }}
        >
          <Toolbar className="bg-[#122349] h-[70px]">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: 4,
              }}
            >
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", sm: "400px" }, // ✅ Responsiv
                  height: 40,
                  borderRadius: 2,
                  p: "4px 10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" },
                }}
              >
                <InputBase
                  sx={{
                    flex: 1,
                    backgroundColor: "white",
                    borderRadius: "4px",
                    "&:focus": { outline: "none" },
                  }}
                  placeholder="Qidiruv"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton type="button" sx={{ p: "8px", color: "#1976d2" }}>
                  <SearchIcon sx={{ fontSize: "24px", color: "black" }} />
                </IconButton>
              </Paper>

              <Button
                onClick={handleClick}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  p: "5px 10px",
                  borderRadius: 2,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "transparent", 
                    boxShadow: "none",
                  },
                  "&:active": {
                    backgroundColor: "transparent", 
                    boxShadow: "none", 
                    transform: "none", 
                  },
                }}
              >
                <Box
                  sx={{
                    width: 35,
                    height: 35,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    bgcolor: "white",
                  }}
                >
                  <PersonOutline sx={{ fontSize: 32, color: "#122349" }} />
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    minWidth:{xs: 0, sm: '90px'},
                    color: "white",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  {/* User name */}
                  <span style={{ textTransform: "none" }}>John due</span>
                  {open ? (
                    <KeyboardArrowUpIcon sx={{ fontSize: "24px" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ fontSize: "24px" }} />
                  )}
                </Box>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Box component="nav" className="!border-none">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
      <UserPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  );
};

export default Layout;

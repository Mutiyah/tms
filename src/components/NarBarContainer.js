import React, {useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import headerStyles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

const NavBarContainer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const logoRef = useRef();
  const logoRef2 = useRef();
  useEffect(() => {
    gsap.fromTo(
      logoRef2.current,
      { width: "30%" },
      {
        width: "35%",
        duration: 5,
        ease: "bounce",
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
      }
    );
    gsap.fromTo(
      logoRef.current,
      { width: "8em" },
      {
        width: "10em",
        duration: 5,
        ease: "bounce",
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
      }
    );
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", boxShadow: "none" }}
    >
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "#fff", padding: "0px" }}
      >
        <Toolbar disableGutters style={{ backgroundColor: "#fff" }}>
          {/* large screen logo  */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              ref={logoRef2}
              src="./images/logo.png"
              className={headerStyles.logo}
              alt="logo"
            />
          </Typography>

          {/* small screen logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src="./images/logo.png"
              className={headerStyles.logo}
              alt="logo"
            />
          </Typography>

          {/* small screen nav menu */}
          <Box
            sx={{ display: { xs: "flex", md: "none" } }}
            className={headerStyles.hamburger}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                style={{ color: "#000", fontWeight: "bold", fontSize: "1.5em", marginRight: '-10px'}}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", width: "100%" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/" className={headerStyles.navMenuLink}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/about-us" className={headerStyles.navMenuLink}>
                  About Us
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/solutions" className={headerStyles.navMenuLink}>
                  Our Solutions
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/contact-us" className={headerStyles.navMenuLink}>
                  Contact Us
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* large screen nav menu*/}
          <Box
            className={headerStyles.navMenu}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", width: "70%" },
            }}
          >
            <Link to="/" className={headerStyles.navMenuLink}>
              Home
            </Link>
            <Link to="/about-us" className={headerStyles.navMenuLink}>
              About Us
            </Link>
            <Link to="/solutions" className={headerStyles.navMenuLink}>
              Our Solutions
            </Link>
            <Link to="/contact-us" className={headerStyles.navMenuLink}>
              Contact Us
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarContainer;

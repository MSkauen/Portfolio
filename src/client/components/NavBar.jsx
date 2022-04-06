import React from "react";
import {
    AppBar,
    Toolbar,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Link } from "react-scroll";
import DrawerComponent from "./Drawer";
import "../../shared/css/NavBar.css";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        "&:hover": {
            color: "#B6995A",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:960px)');

    return (
        <AppBar elevation={0}  id="navbar" position="static">
            <Toolbar id="toolbar">

                {isMobile ? (
                    <DrawerComponent  />
                ) : (
                    <div className={classes.navlinks}>
                        <ul>
                            <li className="nav-item">
                                <Link
                                    activeClass=""
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-0}
                                    duration={700}
                                >
                                    Contact me
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    activeClass=""
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass=""
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    activeClass=""
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={700}
                                >
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;

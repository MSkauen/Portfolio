import React from "react";
import {
    AppBar,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Link } from "react-scroll";
import DrawerComponent from "./Drawer";
import "../../shared/css/NavBar.css";

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from "@mui/material/Slide";

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
    const trigger = useScrollTrigger({threshold: 100});
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:960px)');

    return (
            <AppBar elevation={0}  id="navbar" position="fixed">
                <Slide in={trigger}>
                    <Toolbar id="toolbar">

                        {isMobile ? (
                            <DrawerComponent  />
                        ) : (
                            <div className={classes.navlinks}>
                                <ul>
                                    <li className="nav-item">
                                        <Link
                                            activeClass=""
                                            to="contact-innerRef"
                                            spy={true}
                                            smooth={true}
                                            offset={-0}
                                            duration={700}
                                        >
                                            Contact
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            activeClass=""
                                            to="skills-innerRef"
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
                                            to="project-innerRef"
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
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={700}
                                        >
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </Toolbar>
                </Slide>
            </AppBar>
    );
}
export default Navbar;

import React, { useState } from "react";
import "../../shared/css/Drawer.css";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  } from "@mui/material";
import { Cross as Hamburger } from 'hamburger-react'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles"
import { Link } from "react-scroll";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const useStyles = makeStyles(()=>({

    palette: {
        background: {
            default: "black"
        }
    },
    link:{
        textDecoration:"none",
        color: "white",
        fontSize: "20px",
    },
    icon:{
        color: "black"
    }
}));

export default function DrawerComponent () {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>
            <SwipeableDrawer
                id="drawer"
                className={classes.palette}
                anchor={"right"}
                hideBackdrop={true}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onClick={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                onKeyDown={() => setOpenDrawer(false)}
            >
                <List className={"navbar"} >
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="root"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration={700}
                                onClick={() => setOpenDrawer(false)}
                            >About</Link>
                        </ListItemText>
                    </ListItem>

                    <hr/>

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="skills-innerRef"
                                spy={false}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={() => setOpenDrawer(false)}
                            >
                                Skills
                            </Link>
                        </ListItemText>
                    </ListItem>

                    <hr/>

                    <ListItem onClick={() => setOpenDrawer(false)}>


                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="project-innerRef"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration={700}
                                onClick={() => setOpenDrawer(false)}
                            >Projects</Link>
                        </ListItemText>
                    </ListItem>

                    <hr/>

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="contact-innerRef"
                                spy={false}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={() => setOpenDrawer(false)}
                            >
                                Contact
                            </Link>
                        </ListItemText>
                    </ListItem>

                    <hr/>
                </List>
            </SwipeableDrawer>

            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}
                        sx={{
                            color: 'white',
                            borderRadius: '0',
                            top: 'auto', bottom: '0',
                            paddingTop: '1em',
                        }}
                        disableRipple>
                <Hamburger
                    toggled={openDrawer}
                    toggle={setOpenDrawer}
                    anchor={"right"}

                />
            </IconButton>
        </div>
    );
}

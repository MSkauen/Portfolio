import React, { useState } from "react";
import "../../shared/css/Drawer.css";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles"
import { Link } from "react-scroll";

const useStyles = makeStyles(()=>({
    palette: {
        background: {
            default: "black"
        }
    },
    link:{
        textDecoration:"none",
        color: "black",
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
            <Drawer
                className={classes.palette}
                anchor={"right"}
                hideBackdrop={true}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onClick={() => setOpenDrawer(false)}
                onKeyDown={() => setOpenDrawer(false)}
            >
                <List className={"navbar"}>
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
                            >Hjem</Link>
                        </ListItemText>
                    </ListItem>

                    <Divider/>

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="about-us"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration={700}
                                onClick={() => setOpenDrawer(false)}
                            >Artister</Link>
                        </ListItemText>
                    </ListItem>

                    <Divider/>

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="booking"
                                spy={false}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={() => setOpenDrawer(false)}
                            >
                                Kontakt & Booking
                            </Link>
                        </ListItemText>
                    </ListItem>

                    <Divider/>

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                className={classes.link}
                                activeClass=""
                                to="faq"
                                spy={false}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={() => setOpenDrawer(false)}
                            >
                                FAQ
                            </Link>
                        </ListItemText>
                    </ListItem>

                    <Divider/>
                </List>
            </Drawer>

            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
                <MenuIcon
                    anchor={"right"}
                    sx={{
                        borderRadius: '0'
                    }}
                />
            </IconButton>
        </div>
    );
}

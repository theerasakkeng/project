import { Drawer, AppBar, Toolbar, IconButton,  } from '@material-ui/core'
import { useStyles } from '../styles'
import React, { useState } from 'react'
import MenuItems from './MenuItems';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';



export default function Navigation(props) {
    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const toggleNavigation = () => {
        setOpen(open);
    };
    const closeToggleNavigation = () => {
        setOpen(!open);
    }

    return (
        <div className={classes.appRoot}>
            <AppBar className={classes.AppBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={classes.menutig} onClick={toggleNavigation}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
                
                    <div>
                        <Drawer classes={{
                            paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse
                            ),

                        }} variant="permanent" open={open}>
                            <div className={clsx(classes.menuback, !open && classes.navigationToolbarCollapse && classes.hidechevicon)}>
                                <IconButton onClick={closeToggleNavigation}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <div className={classes.navigationsLogoContainer}>
                                <h3>Menu</ h3>
                            </div>
                            <MenuItems />
                        </Drawer>
                    </div>
        </div>
    )
}

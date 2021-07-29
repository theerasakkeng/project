import { Drawer, AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core'
import { useStyles } from '../styles'
import React, { useState } from 'react'
import MenuItems from './MenuItems';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';



export default function Navigation(props) {

    Navigation.propTypes = {
        window: PropTypes.func,
      };
    const {open,setOpen} = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const classes = useStyles();
    const theme = useTheme();
    const toggleNavigationMobile = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleNavigation = () => {
        setOpen(!open);
    };


    const { window } = props;

    const container = window !== undefined ? () => window().document.body : undefined; 
    return (
        <div>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, !open && classes.appBarShift)}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleNavigationMobile}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="project">
                <Hidden smUp implementation="css">
                    <Drawer
                        classes={{ paper: classes.drawerPaper, }}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={toggleNavigationMobile}
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        container={container}
                        ModalProps={{ keepMounted: true }}
                    >
                        <div className={classes.toolbar} />
                        <div className={classes.navigationsLogoContainer}>
                            <h3>Menu</ h3>
                        </div>
                        <MenuItems />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <div>
                        <Drawer
                            classes={{
                                paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse)
                            }}
                            variant="permanent" open={open}>
                            <div className={clsx(classes.menuback, !open && classes.navigationToolbarCollapse)}>
                                <IconButton onClick={toggleNavigation}>
                                    {open ? <ChevronLeftIcon /> : <MenuIcon/>}
                                </IconButton>
                            </div>
                            <div className={classes.navigationsLogoContainer}>
                                <h3>Menu</ h3>
                            </div>
                            <MenuItems />
                        </Drawer>
                    </div>
                </Hidden>
            </nav>
        </div>
    )
}


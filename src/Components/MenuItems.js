import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputIcon from '@material-ui/icons/Input';
import RoomIcon from '@material-ui/icons/Room';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import React, { useState } from 'react'
import { useStyles } from '../styles'
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function MenuItems() {
   const classes = useStyles();
   const [active, setActive] = useState(false);

   return (
         <List style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         <Link to="/" className={classes.route}>
         <ListItem button className={clsx(classes.menuItem, active && classes.menuItemActive)}>
               <ListItemIcon>
                  <AccountBoxIcon color="primary" />
               </ListItemIcon>
               <ListItemText primary="Profile" />
            </ListItem>
            </Link>
            <Link  to="dashboard"  className={classes.route}>
            <ListItem button className={clsx(classes.menuItem, active && classes.menuItemActive)}>
               <ListItemIcon>
                  <DashboardIcon color="primary" />
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
            </ListItem>
            </Link>
            <Link  to="sale"  className={classes.route}>
            <ListItem button className={clsx(classes.menuItem, active && classes.menuItemActive)}>
               <ListItemIcon>
                  <MonetizationOnIcon color="primary" />
               </ListItemIcon>
               <ListItemText primary="Sale" />
            </ListItem>
            </Link>
            <Link  to="crud"  className={classes.route}>
            <ListItem button className={clsx(classes.menuItem, active && classes.menuItemActive)}>
               <ListItemIcon>
                  <InputIcon color="primary" />
               </ListItemIcon>
               <ListItemText primary="CRUD" />
            </ListItem>
            </Link>
            <Link  to="map"  className={classes.route}>
            <ListItem button className={clsx(classes.menuItem, active && classes.menuItemActive)}>
               <ListItemIcon>
                  <RoomIcon color="primary" />
               </ListItemIcon>
               <ListItemText primary="Map" />
            </ListItem>
            </Link>
         </List>
   )
}

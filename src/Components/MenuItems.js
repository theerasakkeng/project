import { ListItem, ListItemIcon, ListItemText,List } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputIcon from '@material-ui/icons/Input';
import RoomIcon from '@material-ui/icons/Room';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import React,{useState} from 'react'
import { useStyles } from '../styles'
import clsx from 'clsx';

export default function MenuItems() {
    const classes = useStyles()
    const[actice,setActice] = useState(false);

    return (
       <div>
        <List style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <ListItem button className={clsx(classes.menuItem, actice && classes.menuItemActive)}>
            <ListItemIcon>
               <AccountBoxIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
        </ListItem>
        <ListItem button className={clsx(classes.menuItem, actice && classes.menuItemActive)}>
            <ListItemIcon>
               <DashboardIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
         <ListItem button className={clsx(classes.menuItem, actice && classes.menuItemActive)}>
         <ListItemIcon>
            <MonetizationOnIcon color="primary"/>
         </ListItemIcon>
         <ListItemText primary="Sale"/>
     </ListItem>
      <ListItem button className={clsx(classes.menuItem, actice && classes.menuItemActive)}>
      <ListItemIcon>
         <InputIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="CRUD"/>
  </ListItem>
   <ListItem button className={clsx(classes.menuItem, actice && classes.menuItemActive)}>
   <ListItemIcon>
      <RoomIcon color="primary"/>
   </ListItemIcon>
   <ListItemText primary="Map"/>
</ListItem>
</List>
</div>
    )
}

import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemText, Typography,IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../../styles';


export default function DetailView(props) {

    const classes = useStyles();
    const {
        location: { cases, country, deaths, recovered, todayCases, todayDeaths, todayRecovered, countryInfo:{lat,long}  },
        onClickClose

    } = props;

    return (
        <div>
            <Drawer variant="permanent" anchor="right" classes={{paper : classes.drawerDetail}}>
            <div className={classes.menuback}>
                                <IconButton onClick={() => {onClickClose();}}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                <Typography variant="h5" style={{textAlign:"center"}}>{country}</Typography>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <List>
                    <ListItem>
                        <ListItemText primary={`Coronavirus Cases: ${cases}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Deaths: ${deaths}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Recovered: ${recovered}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Today Cases: ${todayCases}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Today Deaths: ${todayDeaths}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Today Recovered: ${todayRecovered}`} />
                    </ListItem>
                </List>
                </div>
            </Drawer>

        </div>
    )
}

import React from 'react'
import { useStyles } from '../../styles'
import { AppBar, Toolbar, Typography, IconButton, Card, CardActionArea, CardMedia, CardContent, Grid, Container } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Sale() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="relative" style={{ backgroundColor: "white", boxShadow: "none" }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography className={classes.root} style={{ color: "black" }}> Kuma's Shop</Typography>
                        <IconButton>
                            <ShoppingBasketIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="lg">
                <div style={{ paddingTop: 20 }}>
                    <Grid container spacing={2}>
                        <Grid item lg={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia />
                                    <CardContent>
                                        <Typography>
                                            ขนมหมา
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia />
                                    <CardContent>
                                        <Typography>
                                            ขนมหมา
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia />
                                    <CardContent>
                                        <Typography>
                                            ขนมหมา
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia />
                                    <CardContent>
                                        <Typography>
                                            ขนมหมา
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia />
                                    <CardContent>
                                        <Typography>
                                            ขนมหมา
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

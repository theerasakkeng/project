import React, { useState, useEffect, useContext } from 'react'
import { Typography, Divider, Card, Grid } from '@material-ui/core'
import { useStyles } from '../styles';

import { CovidContext } from '../Provider/CovidProvider';
export default function Profile() {
    const [covid, setCovid] = useContext(CovidContext)
    const classes = useStyles();

    const [data, setData] = useState({});
    const api = "https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR1mWA6t2BUx5sZnQg67orUs5tq-tivACagctyIAYyvaBkdxd6F4GFS4kCk"

    const CovidThailand = async () => {
        const response = await fetch(api);
        const dataCovid = await response.json();
        setData(dataCovid)
    }
    useEffect(() => {
        CovidThailand();
    }, []);

    const { Confirmed, NewConfirmed, Recovered, NewRecovered, Hospitalized, NewHospitalized, Deaths, NewDeaths } = data;
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant="h4">
                Theerasak Phansai
            </Typography>
            <Typography>
                Skill : React JavaScript HTML CSS
            </Typography>
            <Divider />
            <Typography variant="h4" style={{ padding: "20px" }}>จำนวนผู้ติดเชื้อ Covid-19 ในประเทศไทย</Typography>
            <div style={{ paddingTop: "20 px" }}>
                <Grid container justifyContent="center">
                    <Grid item lg={6} xs={10}>
                        <Card style={{ height: "15vh", backgroundColor: "#FF8C00", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                            <Typography variant="h5">จำนวนผู้ติดเชื้อ</Typography>
                            <Typography variant="h4">{Confirmed}</Typography>
                            <Typography variant="h5">(+{NewConfirmed})</Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" style={{ paddingTop: "20px" }}>
                    <Grid item lg={2} style={{ paddingRight: "20px" }}>
                        <Card style={{ height: "15vh", backgroundColor: "#228B22", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                            <Typography variant="h6">รักษาหาย</Typography>
                            <Typography variant="h5">{Recovered}</Typography>
                            <Typography variant="h6">(+{NewRecovered})</Typography>
                        </Card>
                    </Grid>
                    <Grid item lg={2} >
                        <Card style={{ height: "15vh", backgroundColor: "#1E90FF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                            <Typography variant="h6">รักษาอยู่โรงพยาบาล</Typography>
                            <Typography variant="h5">{Hospitalized}</Typography>
                            <Typography variant="h6">(+{NewHospitalized})</Typography>
                        </Card>
                    </Grid>
                    <Grid item lg={2} style={{ paddingLeft: "20px" }}>
                        <Card style={{ height: "15vh", backgroundColor: "#DC143C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 20 }}>
                            <Typography variant="h6">เสียชีวิต</Typography>
                            <Typography variant="h5">{Deaths}</Typography>
                            <Typography variant="h6">(+{NewDeaths})</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

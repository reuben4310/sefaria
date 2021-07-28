import React, { useEffect, useState } from 'react';
import { makeStyles, InputLabel, FormControl, Select, Collapse, Button, Paper, Box, Grid } from '@material-ui/core';
import Cake from '../media/cake.png';
import "../App.css"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        height: "100%!important",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        height: "100%!important",
        padding: "1px 4px 1px 4px",
    },
}));

export default function AlHamichyah() {
    const classes = useStyles();
    const [michyahCode, setMichyahCode] = useState([{}]);
    const [specialDayCollapsed, setSpecialDayCollapsed] = useState();

    const handleSpecialDayClick = () => {
        setSpecialDayCollapsed((prev) => !prev);
    };

    useEffect(() => {
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Berachot%2C_Birkat_Hanehenin%2C_Eating%2C_Brachot_Achronot%2C_Al_Hamichyah')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setMichyahCode(data);
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <React.Fragment>
            <FormControl className={classes.formControl}>
                <Box textAlign="center"><Paper className={classes.paper}>
                    <Grid
                        container
                        direction="row"
                        alignItems="right"
                        justify="flex-end">
                        <Grid
                            item
                            xs={7}>
                            {michyahCode.he && (<h3 style={{ direction: "rtl" }}>{michyahCode.he[1].replace(/<[^>]+>/g, '')}
                                <br />
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[0]}:
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[1]}
                                <br />
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[2]}:
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[3]}
                                <br />
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[4]}:
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[5]}
                                <br />
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split("י")[0]}

                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split("אם")[2], "ו"}

                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split("אם ")[2].split("הַגֶּפֶן וְעַל פְּרִי הַגֶּפֶן:")}  {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[1], " עַל הַמִּחְיָה וְעַל הַכַּלְכָּלָה"}&nbsp;
                                וְעַל&nbsp;
                                {michyahCode.he[2].replace(/<[^>]+>/g, '').split(":")[3]}
                                <br /><br />

                                {michyahCode.he[3].replace(/<[^>]+>/g, '')}
                                <br /><br />
                                {specialDayCollapsed ? (
                                    <Button
                                        variant="contained"
                                        onClick={
                                            handleSpecialDayClick} >Hide</Button>
                                ) : (
                                    <Button
                                        style={{ backgroundColor: '#00172D', color: '#FFFFFF' }}
                                        onClick={
                                            handleSpecialDayClick}>ביום שמתפללים מוסף</Button>)}
                                <br />
                                <Collapse in={specialDayCollapsed}>
                                    <h5> {michyahCode.he[5].replace(/<[^>]+>/g, '')}</h5>
                                </Collapse>
                                <br />
                                {michyahCode.he[6].replace(/<[^>]+>/g, '')}
                                <br /><br />
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[0]}:
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[1]}:&nbsp;
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[2]}:
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[3]}
                                <br />
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[4]}:&nbsp;
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[5]}:&nbsp;
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[6]}:
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[7]}
                                <br />
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[8]}:&nbsp;
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[9]}:&nbsp;
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[10]}:
                                {michyahCode.he[7].replace(/<[^>]+>/g, '').split(":")[11]}
                                <br />
                                {michyahCode.he[8].replace(/<[^>]+>/g, '')}
                                <br />
                                {michyahCode.he[9].replace(/<[^>]+>/g, '')}
                            </h3>)}
                        </Grid>
                        <Grid item
                            xs={5}>
                            <img className="cake" src={Cake} alt=""></img>
                        </Grid>
                    </Grid>
                </Paper>
                </Box>
            </FormControl>
        </React.Fragment >
    );
}
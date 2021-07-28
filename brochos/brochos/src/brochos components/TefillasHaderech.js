import React, { useEffect, useState } from 'react';
import { makeStyles, FormControl, Paper, Box, Grid } from '@material-ui/core';
import Derech from '../media/derech.png';
import "../App.css";

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

export default function TefillasHaderech({ onChange, display, inputProps, labelText }) {
    const classes = useStyles();
    const [derechCode, setDerechCode] = useState([{}]);

    useEffect(() => {
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Berachot%2C_Tefillat_HaDerech?commentary=0&context=1&pad=0&wrapLinks=1')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setDerechCode(data);
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
                            {derechCode.he && (<h1 style={{ direction: "rtl" }}>{derechCode.he[0].replace(/<[^>]+>/g, '').split("לפי נוסח ספרד")}</h1>)}
                        </Grid>
                        <Grid item
                            xs={5}>
                            <img className="derech" src={Derech} alt=""></img>
                        </Grid>
                    </Grid>
                </Paper>
                </Box>
            </FormControl>
        </React.Fragment >
    );
}
import React, { useEffect, useState } from 'react';
import { makeStyles, InputLabel, FormControl, Select, Collapse, Button, Paper, Box, Grid } from '@material-ui/core';

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

export default function AsherYazar() {
    const classes = useStyles();
    const [asherCode, setAsherCode] = useState([{}]);

    useEffect(() => {
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Asher_Yatzar')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setAsherCode(data);
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <React.Fragment>
            <FormControl className={classes.formControl}>
                <Box textAlign="center"><Paper className={classes.paper}>
                    {asherCode.he && (<h2 style= {{direction: "rtl" }}>{asherCode.he[0].replace(/<[^>]+>/g, '')}</h2>)}
                </Paper></Box>
            </FormControl>
        </React.Fragment >
    );
}
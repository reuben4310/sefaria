import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 12, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

function Home() {
    const [asherTitle, setAsherTitle] = useState([{}]);
    const [birchasTitle, setBirchasTitle] = useState([{}]);
    const [michyahTitle, setMichyahTitle] = useState([{}]);
    const [derechTitle, setDerechTitle] = useState([{}]);
    const classes = useStyles();

    useEffect(() => {
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Weekday%2C_Shacharit%2C_Preparatory_Prayers%2C_Asher_Yatzar')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setAsherTitle(data);
                console.log("data", data.heTitleVariants[0]);
            })
            .catch(err => console.error(err));
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Berachot%2C_Birkat_HaMazon?commentary=0&context=1&pad=0&wrapLinks=1&wrapNamedEntities=1&multiple=0&transLangPref=')

            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setBirchasTitle(data);
            })
            .catch(err => console.error(err));
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Berachot%2C_Birkat_Hanehenin%2C_Eating%2C_Brachot_Achronot%2C_Al_Hamichyah')

            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setMichyahTitle(data);
            })
            .catch(err => console.error(err));

        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Berachot%2C_Tefillat_HaDerech?commentary=0&context=1&pad=0&wrapLinks=1')

            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setDerechTitle(data);
            })
            .catch(err => console.error(err));

    }, []);

    return (
        <main>
            <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="right"
                justify="flex-end"
            >
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link to="/thd" className="asher">{derechTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link to="/ahm" className="asher">{michyahTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link
                    to="/bh" className="asher">{birchasTitle.heTitleVariants}</Link></Paper></Box>
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link to="/asher" className="asher"> {asherTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
            </Grid>
        </main >
    );
}

export default Home;

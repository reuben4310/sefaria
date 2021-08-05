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
        <main className="mobile">
            <Grid
                item
                xs={9}
                container
                direction="row"
                alignItems="right"
                justify="flex-end"
            >
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link to="/thd" className="asher">{derechTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link to="/ahm" className="asher">{michyahTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link
                    to="/bh" className="asher">{birchasTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
                <Box textAlign="center" component="h1"><Paper className={classes.paper}><Link to="/asher" className="asher"> {asherTitle.heTitleVariants}</Link></Paper></Box>&nbsp;&nbsp;
            </Grid>
            <hr/>
            {/* <p>BlessDeck App
                Chazal designed berachos very precisely. Each bracha’s length, text, and even number of words and letters, is by design, laced with tremendous depth and symbolism.
                Some berachos are concise, like birchos hamitzvos (blessings over commandments) and birchos hanehenin (blessings over pleasures). Perhaps Chazal knew that our eagerness to shake the lulav and our salivating tongues wouldn’t allow for anything longer.
                On the opposite side of the spectrum, some berachos are very lengthy, like the beracha-marathon of Shemoneh Esrei. Clearly in this instance, brevity was not a consideration Chazal factored in when taking close audience with Hashem and asking Him of our needs.
                However, there’s a small contingency of berachos which don’t quite fit the bill as being “one-liner” berachos, nor are they in the same class as the verbose Shemoneh Esrei.
                It’s a unique category of berachos which, upon a cursory glance, would seem to demand a decent amount of time commitment and visual attention, but because of the circumstance under which they are recited, they lend themselves to be said quickly and by heart.
                The prime examples of this category are berachos like Birchas HaMazon (benching), Al HaMichya, Asher Yatzar, and Tefillas HaDerech.
                Concentrating on Birchas HaMazon and Al Hamichya without reading from the text throughout the din of a busy restaurant is no piece of cake. Nor is reciting Asher Yatzar while furtively standing beside the restroom door with eyes darting in every which direction. And saying Tefillas HaDerech while doing 80 on the highway simply isn’t the way to go.
                How then can we find a way to give these berachos the attention they deserve?
                Enter BlessDeck.
                Powered by Sefaria, BlessDeck gives you quick access to Birchas HaMazon, Al Hamichya, Asher Yatzar, and Tefillas HaDerech - all fully customized to your nusach of choice.
                By eliminating the tedious task of digging though folders and dropdown lists, BlessDeck can help you become a champion to these oft forlorn berachos by saying them with the kavannah they justly deserve.
                Can I get an Amen?
</p> */}
        </main >
    );
}

export default Home;

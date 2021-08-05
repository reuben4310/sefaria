import React, { useEffect, useState } from 'react';
import { makeStyles, FormControl, Grid, Box, Paper, Button, Collapse } from '@material-ui/core';
import Bread from '../media/bread.png';
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

export default function BirchasHamazon() {
    const classes = useStyles();
    const [birchasCode, setBirchasCode] = useState([{}]);
    const [chanukahCollapsed, setChanukahCollapsed] = useState();
    const [purimCollapsed, setPurimCollapsed] = useState();
    const [yalleCollapsed, setYalleCollapsed] = useState();
    const [musafDayCollapsed, setMusafDayCollapsed] = useState();
    const musaf = document.getElementById("musaf");

    const handleChanukahClick = () => {
        setChanukahCollapsed((prev) => !prev);
    };

    const handlePurimClick = () => {
        setPurimCollapsed((prev) => !prev);
    };

    const handleYalleClick = () => {
        setYalleCollapsed((prev) => !prev);
    };

    const handleMusafDayClick = () => {
        setMusafDayCollapsed((prev) => !prev);
    };

    useEffect(() => {
        fetch('https://www.sefaria.org/api/texts/Siddur_Ashkenaz%2C_Berachot%2C_Birkat_HaMazon?commentary=0&context=1&pad=0&wrapLinks=1&wrapNamedEntities=1&multiple=0&transLangPref=')

            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setBirchasCode(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>
            <br/>
            <FormControl className={classes.formControl}>
                <Grid
                    container
                    direction="row"
                    alignItems="right"
                    justify="flex-end">
                    <Grid
                        item
                        xs={7}
                        className={classes.paper}>
                        <h2 style={{ textAlign: "center" }}> Birchas HaMazon(Blessing over bread)</h2>
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3
                            style={{ direction: "rtl" }}>{birchasCode.he[21].replace(/<[^>]+>/g, '').split(":")[0]}
                            ,(נ״ס: כָּאָמוּר פּוֹתֵחַ אֶת יָדֶךָ וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן):
                            {birchasCode.he[21].replace(/<[^>]+>/g, '').split(":")[1]}:
                        </h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[23].replace(/<[^>]+>/g, '')}</h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center">
                            <Paper className={classes.paper}>
                                <br />
                                {purimCollapsed ? (
                                    <Button
                                        variant="contained"
                                        onClick={
                                           
                                            handlePurimClick} >Hide Purim</Button>
                                ) : (
                                    <Button
                                        variant="outlined"

                                        
                                        style={{ backgroundColor: '#004E4E', color: '#FFFFFF' }}
                                        onClick={
                                            handlePurimClick}>בפורים</Button>)}&nbsp;&nbsp;

                                {chanukahCollapsed ? (
                                    <Button
                                        variant="contained"
                                        onClick={
                                            handleChanukahClick}>Hide Chanukah</Button>
                                ) : (
                                    <Button
                                        id="chanuk"
                                        style={{ backgroundColor: '#36454f', color: '#FFFFFF' }}
                                        onClick={handleChanukahClick}>בחנוכה</Button>
                                )}
                                <Collapse in={purimCollapsed}>
                                    <br />
                                    <h4 id="purim">Please remember to close the button when you are done,if you want to use any of the other special days buttons.</h4>
                                    {birchasCode.he && (<h5 style={{ direction: "rtl", color: "#004E4E" }}>{birchasCode.he[25].replace(/<[^>]+>/g, '')}</h5>)}
                                    {birchasCode.he && (<h5 style={{ direction: "rtl", color: "#004E4E" }}>{birchasCode.he[28].replace(/<[^>]+>/g, '')}</h5>)}
                                    {birchasCode.he && (<h5 style={{ direction: "rtl", color: "#004E4E" }}>{birchasCode.he[29].replace(/<[^>]+>/g, '')}</h5>)}
                                </Collapse>
                                <br />
                                <Collapse in={chanukahCollapsed}>
                                    <h4>Please remember to close the button when you are done,if you want to use any of the other special days buttons.</h4>
                                    {birchasCode.he && (<h5 style={{ direction: "rtl", paddingTop: "15px", color: "#36454f" }}>{birchasCode.he[25].replace(/<[^>]+>/g, '')}</h5>)}
                                    {birchasCode.he && (<h5 style={{ direction: "rtl", color: "#36454f" }}>{birchasCode.he[26].replace(/<[^>]+>/g, '')}</h5>)}
                                    {birchasCode.he && (<h5 style={{ direction: "rtl", color: "#36454f" }}>{birchasCode.he[27].replace(/<[^>]+>/g, '')}</h5>)}
                                </Collapse>
                            </Paper>
                        </Box>
                        <br /><br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[30].replace(/<[^>]+>/g, '')}</h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[32].replace(/<[^>]+>/g, '')}</h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center" >
                            <Paper className={classes.paper} style={{ paddingTop: "15px", paddingBottom: "12px" }}>
                                {yalleCollapsed ? (
                                    <Button
                                        variant="contained"
                                        onClick={
                                            handleYalleClick} >Hide</Button>
                                ) : (
                                    <Button

                                        style={{ backgroundColor: '#004E4E', color: '#FFFFFF' }}
                                        onClick={
                                            handleYalleClick}>בראש חודש ובחול המועד</Button>)}
                                <Collapse in={yalleCollapsed}>
                                    <h4>Please remember to close the button when you are done,if you want to use any of the other special days buttons.</h4>
                                    {birchasCode.he && (<h4 style={{ direction: "rtl", color: "rgb(53, 94, 59)" }}>
                                        {birchasCode.he[36].replace(/<[^>]+>/g, '')}
                                        <br /><br />
                                        {birchasCode.he[37].replace(/<[^>]+>/g, '')}
                                        &nbsp;|&nbsp; {birchasCode.he[38].replace(/<[^>]+>/g, '')}&nbsp;| &nbsp;
                                        {birchasCode.he[40].replace(/<[^>]+>/g, '')}
                                        <br /><br />
                                        זָכְרֵֽנוּ יְהֹוָה אֱלֹהֵֽינוּ בּוֹ לְטוֹבָה, וּפָקְדֵֽנוּ בוֹ לִבְרָכָה, וְהוֹשִׁיעֵֽנוּ בוֹ לְחַיִּים (נ״ס: טוֹבִים), וּבִדְבַר יְשׁוּעָה וְרַחֲמִים חוּס וְחָנֵּֽנוּ, וְרַחֵם עָלֵֽינוּ וְהוֹשִׁיעֵֽנוּ, כִּי אֵלֶֽיךָ עֵינֵֽינוּ, כִּי אֵל מֶֽלֶךְ חַנּוּן וְרַחוּם אָֽתָּה:
                                    </h4>)}  </Collapse></Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[46].replace(/<[^>]+>/g, '')}
                            <br /><br />
                            {birchasCode.he[48].replace(/<[^>]+>/g, '')} </h3>)}
                        </Paper>
                        </Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[49].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;{birchasCode.he[50].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;{birchasCode.he[51].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;{birchasCode.he[52].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;{birchasCode.he[53].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;{birchasCode.he[54].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;{birchasCode.he[55].replace(/<[^>]+>/g, '')}&nbsp;&nbsp;</h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[56].replace(/<[^>]+>/g, '')}
                            <br />
                            {birchasCode.he[57].replace(/<[^>]+>/g, '')}
                            <br />
                            {birchasCode.he[58].replace(/<[^>]+>/g, '')}
                            <br />
                            {birchasCode.he[59].replace(/<[^>]+>/g, '')}
                            <br /><br />
                            {birchasCode.he[60].replace(/<[^>]+>/g, '')}
                        </h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>



                            {birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[63].replace(/<[^>]+>/g, '')}</h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h5 id="musaf" style={{ direction: "rtl", color: "#00172D" }}>


                            {musafDayCollapsed ? (
                                <Button
                                    variant="contained"
                                    onClick={
                                        musaf.scrollIntoView({ behavior: "smooth" }),
                                        handleMusafDayClick} >Hide</Button>
                            ) : (
                                <Button
                                    style={{ backgroundColor: '#00172D', color: '#FFFFFF' }}
                                    onClick={

                                        handleMusafDayClick}>ביום שמתפללים מוסף</Button>)}
                            <br />
                            <Collapse in={musafDayCollapsed}>
                                <h4>Please remember to close the button when you are done,if you want to use any of the other special days buttons.</h4>
                                <br />
                                {birchasCode.he[66].replace(/<[^>]+>/g, '')}
                                <br />
                                {birchasCode.he[67].replace(/<[^>]+>/g, '')}
                                <br /><br />
                                {birchasCode.he[68].replace(/<[^>]+>/g, '')}
                                <br />
                                {birchasCode.he[69].replace(/<[^>]+>/g, '')}
                                <br /><br />
                                {birchasCode.he[72].replace(/<[^>]+>/g, '')}
                                <br />
                                {birchasCode.he[73].replace(/<[^>]+>/g, '')}
                            </Collapse></h5>)}</Paper>
                        </Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[74].replace(/<[^>]+>/g, '')}</h3>)}</Paper></Box>
                        <br />
                        <Box textAlign="center"><Paper className={classes.paper}>{birchasCode.he && (<h3 style={{ direction: "rtl" }}>{birchasCode.he[75].replace(/<[^>]+>/g, '')}</h3>)}</Paper></Box>
                        <br />
                    </Grid>
                    <Grid item
                        xs={5}>
                        <img className="bread" src={Bread} alt=""></img>
                    </Grid>
                </Grid>
            </FormControl>
        </React.Fragment>
    );
}
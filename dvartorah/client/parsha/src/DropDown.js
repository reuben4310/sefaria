import React, { useEffect, useState } from 'react';
import { makeStyles, InputLabel, FormControl, Select } from '@material-ui/core';
// import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function DropDown({ onChange, display, inputProps, labelText }) {
    const classes = useStyles();
    const [level, setLevel] = useState();
    const [genesisCode, setGenesisCode] = useState([] || {});
    const [exodusCode, setExodusCode] = useState([]);
    const [leviticusCode, setLeviticusCode] = useState([]);
    const [numbersCode, setNumbersCode] = useState([]);
    const [deuteronomyCode, setDeuteronomyCode] = useState([]);

    useEffect(() => {
        // Breishish
        fetch('https://www.sefaria.org/api/v2/index/Genesis')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setGenesisCode(data);
                console.log("gen", data);
            })
            .catch(err => console.error(err));
        // Shmos
        fetch('https://www.sefaria.org/api/v2/index/Exodus')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setExodusCode(data);
            })
            .catch(err => console.error(err));
        // Vayikra
        fetch('https://www.sefaria.org/api/v2/index/Leviticus')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setLeviticusCode(data);
            })
            .catch(err => console.error(err));
        // Bamidbar
        fetch('https://www.sefaria.org/api/v2/index/Numbers')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setNumbersCode(data);
            })
            .catch(err => console.error(err));
        // Devarim
        fetch('https://www.sefaria.org/api/v2/index/Deuteronomy')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setDeuteronomyCode(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>
            <FormControl className={classes.formControl}>
                <h4>Please pick a parsha</h4>
                <Select
                    native
                    onChange={
                        onChange
                    }
                    inputProps={inputProps}
                >
                    <option style={{ fontWeight: "bold" }} label="Parsha list" value="Parsha list" key="" />
                    <hr />
                    {/* Breishes */}
                    {genesisCode && genesisCode.alts ? (genesisCode.alts.Parasha.nodes.map((option, index) => {
                        return <option
                            key={index}
                            value={index}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>
                    })) : ''}
                    {/* Shmos */}
                    {exodusCode && exodusCode.alts ? (exodusCode.alts.Parasha.nodes.map((option, index) => {
                        return <option
                            key={index}
                            value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>
                    })) : ''}
                    {/* Vayikra */}
                    {leviticusCode && leviticusCode.alts ? (leviticusCode.alts.Parasha.nodes.map((option, index) => {
                        return <option
                            key={index}
                            value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>
                    })) : ''}
                    {/* Bamidbar */}
                    {numbersCode && numbersCode.alts ? (numbersCode.alts.Parasha.nodes.map((option, index) => {
                        return <option
                            key={index}
                            value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>
                    })) : ''}
                    {/* Devarim */}
                    {deuteronomyCode && deuteronomyCode.alts ? (deuteronomyCode.alts.Parasha.nodes.map((option, index) => {
                        return <option
                            key={index}
                            value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>
                    })) : ''}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}
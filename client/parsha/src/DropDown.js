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
    const [genesisCode, setGenesisCode] = useState([]);
    const [exodusCode, setExodusCode] = useState([]);
    const [leviticusCode, setLeviticusCode] = useState([]);
    const [numbersCode, setNumbersCode] = useState([]);
    const [deuteronomyCode, setDeuteronomyCode]= useState([]);
  
    useEffect(() => {
        fetch('https://www.sefaria.org/api/v2/index/Genesis')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setGenesisCode(data);
                // console.log(data.alts.Parasha.nodes);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch('https://www.sefaria.org/api/v2/index/Exodus')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setExodusCode(data);
                // console.log(data.alts.Parasha.nodes);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
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
    }, []);

    useEffect(() => {
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
    }, []);

    useEffect(() => {
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
                <InputLabel htmlFor="Interview-Questions">{labelText}</InputLabel>
                <Select
                    native
                    onChange={
                        onChange
                    }
                    inputProps={inputProps}
                >
                    <option style={{ fontWeight: 'bold' }} label="Parsha list" value="Parsha list" />
                    <hr />
                    {genesisCode && genesisCode.alts ? (genesisCode.alts.Parasha.nodes.map(option => <option value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>)) : ''}
                    {exodusCode && exodusCode.alts ? (exodusCode.alts.Parasha.nodes.map(option => <option value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>)) : ''}
                    {leviticusCode && leviticusCode.alts ? (leviticusCode.alts.Parasha.nodes.map(option => <option value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>)) : ''}
                    {numbersCode && numbersCode.alts ? (numbersCode.alts.Parasha.nodes.map(option => <option value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>)) : ''}
                    {deuteronomyCode && deuteronomyCode.alts ? (deuteronomyCode.alts.Parasha.nodes.map(option => <option value={option.heTitle}>&nbsp;&nbsp;{option.heTitle}&nbsp;&nbsp;&nbsp;{option.title}</option>)) : ''}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}
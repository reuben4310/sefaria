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
    const [displayCode, setDisplayCode] = useState([]);
    // const userId = useSelector(state => state.userID)
    // const userType = useSelector(state => state.userType)

    console.log(displayCode);
    // 
    //     const handleChange = (event) => {
    //         setLevel(event);
    //         console.log("g ggygy gg77ggyg", event.target.results.results);
    // 
    //     };

    useEffect(() => {
        fetch('http://localhost:8080/parshos')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(data => {
                setDisplayCode(data);
                console.log("data", data);

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
                    <option aria-label="None" value="" />
                    {displayCode.map(option => <option key={option.id} value={option.parsha}>{option.parsha}</option>)}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}
import { Button, createTheme, MuiThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Homepage() {
    const [currentParsha, setCurrentParsha] = useState(null);
    const history = useHistory();
    useEffect(() => {
        fetch("https://www.sefaria.org/api/calendars/")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCurrentParsha(data.calendar_items[0].displayValue.he);
            })
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#64ffda'

            },
            secondary: {
                main: '#ff5252',
            }
        }
    });

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <h1 style={{ color: 'red' }}>Welcome to our Dvar-Torah generator</h1>
                {currentParsha && < h2 > This Week 's Parsha is {currentParsha}</h2>}
                <div> {
        /*this is where that week's divrei torah will go; */} </div>
                <form>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/drop")
                            }}


                        >
                            Choose any other parsha </Button></div>
                </form>
            </MuiThemeProvider>
        </div>

    );
}

export default Homepage;
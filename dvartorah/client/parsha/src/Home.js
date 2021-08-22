import { Button, createTheme, MuiThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Homepage() {
    const [currentParsha, setCurrentParsha] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch("https://www.sefaria.org/api/calendars/")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCurrentParsha(data.calendar_items[0].displayValue.he);
                console.log(data);
            });
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#64ffda'

            },
            secondary: {
                main: '#ff5252',
            },
            inherit: {
                main: '#FFD523'
            }
        }
    });

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <h1>Weekly Dvar Torah</h1>

                {currentParsha &&  <h2>This Week's Parsha is {currentParsha}</h2>}

                <h4>Choose the Difficulty</h4>
                <form>

                    <div className="button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/beginner")
                            }}
                        >Beginner</Button>
                        <Button
                            style={{ backgroundColor: "yellow" }}
                            variant="contained"
                            color="inherit"
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/medium")
                            }}
                        >Medium</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/advanced")
                            }}
                        >Advanced</Button>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/drop")
                            }}>Choose any other parsha </Button></div>
                </form>
            </MuiThemeProvider>
        </div>
    );
}

export default Homepage;

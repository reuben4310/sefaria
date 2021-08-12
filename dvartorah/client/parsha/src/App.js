import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from './DropDown'
import Home from './Home';
import Beginner from "./Beginner"
import Medium from "./Medium"
import Advanced from "./Advanced"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [level, setLevel] = useState("");
  const [displayed, setDisplayed] = useState('');
  const [selected, setSelected] = useState([]);
  const [parsha, setParsha] = useState([]);

  useEffect(async () => {
    await
      fetch('http://localhost:1819/vorts')
        .then(function (response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function (data) {
          setSelected((data));
          console.log("data", data);
        });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/drop">
            <React.Fragment>
              <div className="fadeIn">
                <DropDown
                  onChange={
                    (e) => {
                      console.log("val", e.target.value, "parsha", parsha, selected)
                      setParsha(e.target.value);
                    }}
                />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/beginner">
            <React.Fragment>
              <div className="fadeIn">
                <Beginner />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/medium">
            <React.Fragment>
              <div className="fadeIn">
                <Medium />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/advanced">
            <React.Fragment>
              <div className="fadeIn">
                <Advanced />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/">
            <div className="fadeIn">
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* Sefer Berishis */}
      {/* Berishis */}
      {parsha === "0" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "red" }}>{option.vort}</h1>)))}
      {/* Noach */}
      {parsha === "1" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "green" }}>{option.vort}</h1>)))}
      {/* Lech Lecha */}
      {parsha === "2" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "blue" }}>{option.vort}</h1>)))}
      {/* vayeira */}
      {parsha === "3" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "rgb(33,88,98)" }}>{option.vort}</h1>)))}
      {/* Chayei Sarah */}
      {parsha === "4" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "rgb(3,188,19)" }}>{option.vort}</h1>)))}
      {/* Toldos */}
      {parsha === "5" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "darkteal" }}>{option.vort}</h1>)))}
      {/* Vayeitzei */}
      {parsha === "6" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "crimson" }}>{option.vort}</h1>)))}
      {/* Vayishlach */}
      {parsha === "7" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#831" }}>{option.vort}</h1>)))}
      {/* Vayeishev */}
      {parsha === "8" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "##2ECC40" }}>{option.vort}</h1>)))}
      {/* Mikaitz */}
      {parsha === "9" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#F012BE" }}>{option.vort}</h1>)))}
      {/* Vayigash */}
      {parsha === "10" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "##4040a1" }}>{option.vort}</h1>)))}
      {/* Vayichi */}
      {parsha === "11" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#034f84" }}>{option.vort}</h1>)))}
      {/* Sefer Shmos */}
      {/* Shmos  */}
      {parsha === "12" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#01FF70" }}>{option.vort}</h1>)))}
      {/* Vuaira */}
      {parsha === "13" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#fe3c03" }}>{option.vort}</h1>)))}
      {/* Bo */}
      {parsha === "14" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#ff851b" }}>{option.vort}</h1>)))}
      {/* Bshalach */}
      {parsha === "15" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#85144b" }}>{option.vort}</h1>)))}
      {/* Yisro */}
      {parsha === "16" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#034f84" }}>{option.vort}</h1>)))}
      {/* Mishpatim */}
      {parsha === "17" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#ff012be" }}>{option.vort}</h1>)))}
      {/* Terumah */}
      {parsha === "18" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#b10dc9" }}>{option.vort}</h1>)))}
      {/* Tetzaveh */}
      {parsha === "19" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#04f84" }}>{option.vort}</h1>)))}
      {/* Ki Sisa */}
      {parsha === "20" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#040419" }}>{option.vort}</h1>)))}
      {/* Vayakhail */}
      {parsha === "21" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#008000" }}>{option.vort}</h1>)))}
      {/* Pekudai */}
      {parsha === "22" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#04939c8" }}>{option.vort}</h1>)))}
      {/* Sefer Vayikra */}
      {/* Vayikra */}
      {parsha === "23" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FD0E35" }}>{option.vort}</h1>)))}
      {/* Tzav */}
      {parsha === "24" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#E77200" }}>{option.vort}</h1>)))}
      {/* Shmini */}
      {parsha === "25" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#5E8C31" }}>{option.vort}</h1>)))}
      {/* Tatzria */}
      {parsha === "26" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#00468C" }}>{option.vort}</h1>)))}
      {/* Metzora */}
      {parsha === "27" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#0066FF" }}>{option.vort}</h1>)))}
      {/* Achrai */}
      {parsha === "28" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#652DC1" }}>{option.vort}</h1>)))}
      {/* Kedoshim */}
      {parsha === "29" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#A50B5E" }}>{option.vort}</h1>)))}
      {/* Emor */}
      {parsha === "30" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#E30B5C" }}>{option.vort}</h1>)))}
      {/* B'Har */}
      {parsha === "31" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#CA3435" }}>{option.vort}</h1>)))}
      {/* Bechukoishai */}
      {parsha === "32" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF6037" }}>{option.vort}</h1>)))}
      {/* Sefer Bamidbar */}
      {/*Bamidbar  */}
      {parsha === "33" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF9933" }}>{option.vort}</h1>)))}
      {/* Naso */}
      {parsha === "34" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF00CC" }}>{option.vort}</h1>)))}
      {/* Bahaloshcha */}
      {parsha === "35" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FA5B3D" }}>{option.vort}</h1>)))}
      {/* Shlach */}
      {parsha === "36" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#299617" }}>{option.vort}</h1>)))}
      {/* Korach */}
      {parsha === "37" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#2243B6" }}>{option.vort}</h1>)))}
      {/* Chukas */}
      {parsha === "38" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#9C51B6" }}>{option.vort}</h1>)))}
      {/* Balak */}
      {parsha === "39" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#A83731" }}>{option.vort}</h1>)))}
      {/* Pinchas */}
      {parsha === "40" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#E97451" }}>{option.vort}</h1>)))}
      {/* Matos */}
      {parsha === "41" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FFDB00" }}>{option.vort}</h1>)))}
      {/* Masei */}
      {parsha === "42" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF7A00" }}>{option.vort}</h1>)))}
      {/* Sefer Devarim */}
      {/* Devarim */}
      {parsha === "43" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF007C" }}>{option.vort}</h1>)))}
      {/* V'Eschanan */}
      {parsha === "44" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#C46210" }}>{option.vort}</h1>)))}
      {/* Akev */}
      {parsha === "45" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#9C2542" }}>{option.vort}</h1>)))}
      {/* Raieh */}
      {parsha === "46" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#58427C" }}>{option.vort}</h1>)))}
      {/* Shoftim */}
      {parsha === "47" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#85754E" }}>{option.vort}</h1>)))}
      {/* Tzeitzei */}
      {parsha === "48" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#319177" }}>{option.vort}</h1>)))}
      {/* Savo */}
      {parsha === "49" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#9C7C38" }}>{option.vort}</h1>)))}
      {/* Netzavim */}
      {parsha === "50" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#8D4E85" }}>{option.vort}</h1>)))}
      {/* Vayailech */}
      {parsha === "51" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#8FD400" }}>{option.vort}</h1>)))}
      {/* Hazinu */}
      {parsha === "52" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#0081AB" }}>{option.vort}</h1>)))}
      {/* V'Toz Habracha */}
      {parsha === "53" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#2E2D88" }}>{option.vort}</h1>)))}
    </div>

  );
}

export default App;

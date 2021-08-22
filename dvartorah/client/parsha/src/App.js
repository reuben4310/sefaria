import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from './DropDown'
import Home from './Home';
import Beginner from "./Beginner"
import Medium from "./Medium"
import Advanced from "./Advanced"
import { Route, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import { Button, createTheme, MuiThemeProvider } from "@material-ui/core";

function App() {
  const [selected, setSelected] = useState([]);
  let [parsha, setParsha] = useState([]);
  const [currentParsha, setCurrentParsha] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    await
      fetch('http://localhost:1818/vorts')
        .then(function (response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function (data) {
          setSelected((data));
          console.log(data);
        });
    fetch("https://www.sefaria.org/api/calendars/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCurrentParsha(data.calendar_items[0].displayValue.he);
        console.log(data);
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
                      e.preventDefault();
                      setParsha(e.target.value);
                    }}
                />
                <div className="vort-text">
                {/* Sefer Berishis */}
                {/* Berishis */}
                {parsha === "0" && (selected.map(option => option.id === 1 && option.parshaId === +parsha && (<p style={{ color: "red" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {console.log("sssss", selected.id)}
                {/* Noach */}
                {parsha === "1" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "green" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Lech Lecha */}
                {parsha === "2" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "blue" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* vayeira */}
                {parsha === "3" && (selected.map(option => option.id === 5 && option.parshaId === +parsha && (<p style={{ color: "rgb(33,88,98)" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Chayei Sarah */}
                {parsha === "4" && (selected.map(option => option.id === 7 && option.parshaId === +parsha && (<p style={{ color: "rgb(3,188,19)" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Toldos */}
                {parsha === "5" && (selected.map(option => option.id === 9 && option.parshaId === +parsha && (<p style={{ color: "darkteal" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayeitzei */}
                {parsha === "6" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "crimson" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayishlach */}
                {parsha === "7" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#831" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayeishev */}
                {parsha === "8" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "##2ECC40" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Mikaitz */}
                {parsha === "9" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#F012BE" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayigash */}
                {parsha === "10" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "##4040a1" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayichi */}
                {parsha === "11" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#034f84" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Sefer Shmos */}
                {/* Shmos  */}
                {parsha === "12" && (selected.map(option => option.parshaId === +parsha && (<p style={{color: "#01FF70" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vuaira */}
                {parsha === "13" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#fe3c03" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Bo */}
                {parsha === "14" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#ff851b" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Bshalach */}
                {parsha === "15" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#85144b" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Yisro */}
                {parsha === "16" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#034f84" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Mishpatim */}
                {parsha === "17" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#ff012be" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Terumah */}
                {parsha === "18" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#b10dc9" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Tetzaveh */}
                {parsha === "19" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#04f84" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Ki Sisa */}
                {parsha === "20" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#040419" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayakhail */}
                {parsha === "21" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#008000" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Pekudai */}
                {parsha === "22" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#04939c8" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Sefer Vayikra */}
                {/* Vayikra */}
                {parsha === "23" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FD0E35" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Tzav */}
                {parsha === "24" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#E77200" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Shmini */}
                {parsha === "25" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#5E8C31" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Tatzria */}
                {parsha === "26" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#00468C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Metzora */}
                {parsha === "27" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#0066FF" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Achrai */}
                {parsha === "28" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#652DC1" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Kedoshim */}
                {parsha === "29" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#A50B5E" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Emor */}
                {parsha === "30" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#E30B5C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* B'Har */}
                {parsha === "31" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#CA3435" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Bechukoishai */}
                {parsha === "32" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FF6037" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Sefer Bamidbar */}
                {/*Bamidbar  */}
                {parsha === "33" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FF9933" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Naso */}
                {parsha === "34" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FF00CC" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Bahaloshcha */}
                {parsha === "35" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FA5B3D" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Shlach */}
                {parsha === "36" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#299617" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Korach */}
                {parsha === "37" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#2243B6" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Chukas */}
                {parsha === "38" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#9C51B6" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Balak */}
                {parsha === "39" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#A83731" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Pinchas */}
                {parsha === "40" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#E97451" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Matos */}
                {parsha === "41" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FFDB00" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Masei */}
                {parsha === "42" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FF7A00" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Sefer Devarim */}
                {/* Devarim */}
                {parsha === "43" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#FF007C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* V'Eschanan */}
                {parsha === "44" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#C46210" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Akev */}
                {parsha === "45" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#9C2542" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Raieh */}
                {parsha === "46" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#58427C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Shoftim */}
                {parsha === "47" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#85754E" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Tzeitzei */}
                {parsha === "48" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#319177" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Savo */}
                {parsha === "49" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#9C7C38" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Netzavim */}
                {parsha === "50" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#8D4E85" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Vayailech */}
                {parsha === "51" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#8FD400" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* Hazinu */}
                {parsha === "52" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#0081AB" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                {/* V'Toz Habracha */}
                {parsha === "53" && (selected.map(option => option.parshaId === +parsha && (<p style={{ color: "#2E2D88" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</p>)))}
                </div>
                <button>
                <a href="/">Back to Home</a>
                </button>
              </div>

            </React.Fragment>
          </Route>
          <Route path="/beginner">
            <React.Fragment>
              <div className="fadeIn">
                <Beginner />
                <div className="vort-text">
                {currentParsha === "בראשית" ? (<p style={{ color: "#728f02" }}>{selected[0].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "נח" ? (<p style={{ color: "#00035b" }}>{selected[2].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "לך לך" ? (<p style={{ color: "#840000" }}>{selected[3].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "וירא" ? (<p style={{ color: "#1d0200" }}> {selected[4].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "חיי שרה" ? (<p style={{ color: "#3f012c" }}>{selected[6].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "תולדות" ? (<p style={{ color: "#112442" }}>{selected[8].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "ויצא" ? (<p style={{ color: "#424111" }}>{selected[10].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "וישלח" ? (<p style={{ color: "#421141" }}>{selected[11].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "וישב" ? (<p  style={{ color: "#94E007" }} >{selected[12].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "מקץ" ? (<p  style={{ color: "#260740" }}>{selected[13].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "ויגש" ? (<p  style={{ color: "#840000" }}>{selected[14].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "ויחי" ? (<p style={{ color: "#BD461A" }}>{selected[15].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {/*  */}
                {currentParsha === "שמות" ? (<p style={{ color: "red" }}>{selected[16].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "וארא" ? (<p style={{ color: "darkgreen" }}>{selected[17].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "בא" ? (<p>{selected[18].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "בשלח" ? (<p style={{ color: "azure" }}>{selected[19].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "יתרו" ? (<p style={{ color: "#FF7700" }}>{selected[20].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "משפטים" ? (<p style={{ color: "green" }}>{selected[21].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "תרומה" ? (<p style={{ color: "purple" }}>{selected[22].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "תצוה" ? (<p style={{ color: "#FEDE17" }}>{selected[23].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "כי תשא" ? (<p style={{ color: "grey" }}>{selected[24].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "ויקהל" ? (<p>{selected[25].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "פקודי" ? (<p style={{ color: "grey" }}>{selected[26].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {/*  */}
                {currentParsha === "ויקרא" ? (<p style={{ color: "crimson" }}>{selected[27].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "צו" ? (<p style={{ color: "red" }}>{selected[28].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "שמיני" ? (<p>{selected[29].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "תזריע" ? (<p style={{ color: "grey" }}>{selected[30].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "מצורע" ? (<p style={{ color: "green" }}>{selected[31].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "אחרי מות" ? (<p>{selected[32].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "קדושים" ? (<p style={{ color: "#FF7700" }}>{selected[33].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "אמור" ? (<p>{selected[34].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "בהר" ? (<p style={{ color: "green" }}>{selected[35].vort}</p>) : ''}
                {currentParsha === "בחוקתי" ? (<p>{selected[36].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {/*  */}
                {currentParsha === "במדבר" ? (<p style={{ color: "#E06F10" }}>{selected[37].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "נשא" ? (<p style={{ color: "crimson" }}>{selected[38].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "בהעלותך" ? (<p style={{ color: "#FF7700" }}>{selected[39].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "שלח" ? (<p style={{ color: "darkgreen" }}>{selected[40].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "קרח" ? (<p>{selected[41].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "חקת" ? (<p style={{ color: "red" }}>{selected[42].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "בלק" ? (<p>{selected[43].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "פנחס" ? (<p>{selected[44].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "מטות" ? (<p>{selected[45].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "מסעי" ? (<p style={{ color: "#E06F10" }}>{selected[46].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {/*  */}
                {currentParsha === "דברים" ? (<p style={{ color: "red" }}>{selected[47].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "ואתחנן" ? (<p style={{ color: "green" }}>{selected[47].vort.split("/").map(p => <p> {p}</p>)}{selected[48].vort}</p>) : ''}
                {currentParsha === "עקב" ? (<p style={{ color: "darkteal" }}>{selected[49].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "ראה" ? (<p style={{ color: "darkcyan" }}>{selected[50].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "שופטים" ? (<p style={{ color: "royalblue" }}>{selected[51].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "כי תצא" ? (<p style={{ color: "crimson" }}>{selected[52].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "כי תבוא" ? (<p style={{ color: "darkmagenta" }}>{selected[53].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "נצבים" ? (<p style={{ color: "olive" }}>{selected[54].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "וילך" ? (<p style={{ color: "cyan" }}>{selected[55].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "האזינו" ? (<p style={{ color: "blue" }}>{selected[56].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                {currentParsha === "וזאת הברכה" ? (<p style={{ color: "tomato" }}>{selected[57].vort.split("/").map(p => <p> {p}</p>)}</p>) : ''}
                </div>
                <button>
                <a href="/">Back to Home</a>
                </button>
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
    </div>

  );
}

export default App;

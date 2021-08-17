import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from './DropDown'
import Home from './Home';
import Beginner from "./Beginner"
import Medium from "./Medium"
import Advanced from "./Advanced"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [selected, setSelected] = useState([]);
  let [parsha, setParsha] = useState([]);
  const [currentParsha, setCurrentParsha] = useState([]);

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
                {/* Sefer Berishis */}
                {/* Berishis */}
                {parsha === "0" && (selected.map(option => option.id === 1 && option.parshaId === +parsha && (<h1 style={{ color: "red" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {console.log("sssss", selected.id)}
                {/* Noach */}
                {parsha === "1" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "green" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Lech Lecha */}
                {parsha === "2" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "blue" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* vayeira */}
                {parsha === "3" && (selected.map(option => option.id === 5 && option.parshaId === +parsha && (<h1 style={{ color: "rgb(33,88,98)" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Chayei Sarah */}
                {parsha === "4" && (selected.map(option => option.id === 7 && option.parshaId === +parsha && (<h1 style={{ color: "rgb(3,188,19)" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Toldos */}
                {parsha === "5" && (selected.map(option => option.id === 9 && option.parshaId === +parsha && (<h1 style={{ color: "darkteal" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayeitzei */}
                {parsha === "6" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "crimson" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayishlach */}
                {parsha === "7" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#831" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayeishev */}
                {parsha === "8" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "##2ECC40" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Mikaitz */}
                {parsha === "9" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#F012BE" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayigash */}
                {parsha === "10" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "##4040a1" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayichi */}
                {parsha === "11" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#034f84" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Sefer Shmos */}
                {/* Shmos  */}
                {parsha === "12" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#01FF70" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vuaira */}
                {parsha === "13" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#fe3c03" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Bo */}
                {parsha === "14" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#ff851b" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Bshalach */}
                {parsha === "15" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#85144b" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Yisro */}
                {parsha === "16" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#034f84" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Mishpatim */}
                {parsha === "17" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#ff012be" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Terumah */}
                {parsha === "18" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#b10dc9" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Tetzaveh */}
                {parsha === "19" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#04f84" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Ki Sisa */}
                {parsha === "20" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#040419" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayakhail */}
                {parsha === "21" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#008000" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Pekudai */}
                {parsha === "22" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#04939c8" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Sefer Vayikra */}
                {/* Vayikra */}
                {parsha === "23" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FD0E35" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Tzav */}
                {parsha === "24" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#E77200" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Shmini */}
                {parsha === "25" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#5E8C31" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Tatzria */}
                {parsha === "26" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#00468C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Metzora */}
                {parsha === "27" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#0066FF" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Achrai */}
                {parsha === "28" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#652DC1" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Kedoshim */}
                {parsha === "29" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#A50B5E" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Emor */}
                {parsha === "30" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#E30B5C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* B'Har */}
                {parsha === "31" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#CA3435" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Bechukoishai */}
                {parsha === "32" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF6037" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Sefer Bamidbar */}
                {/*Bamidbar  */}
                {parsha === "33" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF9933" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Naso */}
                {parsha === "34" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF00CC" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Bahaloshcha */}
                {parsha === "35" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FA5B3D" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Shlach */}
                {parsha === "36" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#299617" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Korach */}
                {parsha === "37" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#2243B6" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Chukas */}
                {parsha === "38" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#9C51B6" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Balak */}
                {parsha === "39" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#A83731" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Pinchas */}
                {parsha === "40" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#E97451" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Matos */}
                {parsha === "41" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FFDB00" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Masei */}
                {parsha === "42" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF7A00" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Sefer Devarim */}
                {/* Devarim */}
                {parsha === "43" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#FF007C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* V'Eschanan */}
                {parsha === "44" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#C46210" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Akev */}
                {parsha === "45" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#9C2542" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Raieh */}
                {parsha === "46" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#58427C" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Shoftim */}
                {parsha === "47" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#85754E" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Tzeitzei */}
                {parsha === "48" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#319177" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Savo */}
                {parsha === "49" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#9C7C38" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Netzavim */}
                {parsha === "50" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#8D4E85" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Vayailech */}
                {parsha === "51" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#8FD400" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* Hazinu */}
                {parsha === "52" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#0081AB" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
                {/* V'Toz Habracha */}
                {parsha === "53" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "#2E2D88" }}>{option.vort.split("/").map(p => <p> {p}</p>)}</h1>)))}
              </div>
            </React.Fragment>
          </Route>
          <Route path="/beginner">
            <React.Fragment>
              <div className="fadeIn">
                <Beginner />
                {currentParsha === "בראשית" ? (<h1 style={{ color: "#728f02" }}>{selected[0].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "נח" ? (<h1 style={{ color: "#00035b" }}>{selected[2].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "לך לך" ? (<h1 style={{ color: "#840000" }}>{selected[3].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "וירא" ? (<h1 h1 style={{ color: "#1d0200" }}> {selected[4].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "חיי שרה" ? (<h1 h1 style={{ color: "#3f012c" }}>{selected[6].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "תולדות" ? (<h1 h1 style={{ color: "#112442" }}>{selected[8].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "ויצא" ? (<h1 h1 style={{ color: "#424111" }}>{selected[10].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "וישלח" ? (<h1 h1 style={{ color: "#421141" }}>{selected[11].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "וישב" ? (<h1 h1 style={{ color: "#94E007" }} >{selected[12].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "מקץ" ? (<h1 h1 style={{ color: "#260740" }}>{selected[13].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "ויגש" ? (<h1 h1 style={{ color: "#840000" }}>{selected[14].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "ויחי" ? (<h1 h1 style={{ color: "#BD461A" }}>{selected[15].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {/*  */}
                {currentParsha === "שמות" ? (<h1 style={{ color: "red" }}>{selected[16].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "וארא" ? (<h1 style={{ color: "darkgreen" }}>{selected[17].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "בא" ? (<h1>{selected[18].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "בשלח" ? (<h1 style={{ color: "azure" }}>{selected[19].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "יתרו" ? (<h1 style={{ color: "#FF7700" }}>{selected[20].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "משפטים" ? (<h1 style={{ color: "green" }}>{selected[21].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "תרומה" ? (<h1 style={{ color: "purple" }}>{selected[22].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "תצוה" ? (<h1 style={{ color: "#FEDE17" }}>{selected[23].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "כי תשא" ? (<h1 style={{ color: "grey" }}>{selected[24].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "ויקהל" ? (<h1>{selected[25].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "פקודי" ? (<h1 style={{ color: "grey" }}>{selected[26].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {/*  */}
                {currentParsha === "ויקרא" ? (<h1 style={{ color: "crimson" }}>{selected[27].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "צו" ? (<h1 style={{ color: "red" }}>{selected[28].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "שמיני" ? (<h1>{selected[29].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "תזריע" ? (<h1 style={{ color: "grey" }}>{selected[30].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "מצורע" ? (<h1 style={{ color: "green" }}>{selected[31].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "אחרי מות" ? (<h1>{selected[32].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "קדושים" ? (<h1 style={{ color: "#FF7700" }}>{selected[33].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "אמור" ? (<h1>{selected[34].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "בהר" ? (<h1 style={{ color: "green" }}>{selected[35].vort}</h1>) : ''}
                {currentParsha === "בחוקתי" ? (<h1>{selected[36].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {/*  */}
                {currentParsha === "במדבר" ? (<h1 style={{ color: "#E06F10" }}>{selected[37].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "נשא" ? (<h1 style={{ color: "crimson" }}>{selected[38].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "בהעלותך" ? (<h1 style={{ color: "#FF7700" }}>{selected[39].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "שלח" ? (<h1 style={{ color: "darkgreen" }}>{selected[40].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "קרח" ? (<h1>{selected[41].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "חקת" ? (<h1 style={{ color: "red" }}>{selected[42].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "בלק" ? (<h1>{selected[43].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "פנחס" ? (<h1>{selected[44].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "מטות" ? (<h1>{selected[45].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "מסעי" ? (<h1 style={{ color: "#E06F10" }}>{selected[46].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {/*  */}
                {currentParsha === "דברים" ? (<h1 style={{ color: "red" }}>{selected[47].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "ואתחנן" ? (<h1 style={{ color: "green" }}>{selected[47].vort.split("/").map(p => <p> {p}</p>)}{selected[48].vort}</h1>) : ''}
                {currentParsha === "עקב" ? (<h1 style={{ color: "darkteal" }}>{selected[49].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "ראה" ? (<h1 style={{ color: "darkcyan" }}>{selected[50].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "שופטים" ? (<h1 style={{ color: "royalblue" }}>{selected[51].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "כי תצא" ? (<h1 style={{ color: "crimson" }}>{selected[52].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "כי תבוא" ? (<h1 style={{ color: "darkmagenta" }}>{selected[53].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "נצבים" ? (<h1 style={{ color: "olive" }}>{selected[54].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "וילך" ? (<h1 style={{ color: "cyan" }}>{selected[55].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "האזינו" ? (<h1 style={{ color: "blue" }}>{selected[56].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
                {currentParsha === "וזאת הברכה" ? (<h1 style={{ color: "tomato" }}>{selected[57].vort.split("/").map(p => <p> {p}</p>)}</h1>) : ''}
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

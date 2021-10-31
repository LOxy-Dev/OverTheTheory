import './App.css';
import React from "react";

for (let icon in document.getElementsByClassName("Champion")) {
    icon.addEventListener('click', iconClicked(icon));
}

function iconClicked(element) {
    let first_picks = document.getElementsByClassName("champ-1");

    for (var firstPicksKey in first_picks) {
        if (firstPicksKey.classList.contains("blue")) {
            first_picks = element
        }
    }
}

function App() {
  return (
<div className="App">
    <div id="TeamComposition">
        <h2>Team Composition</h2>

        <div id="Comps">
            <div className="CompTeam blue">
                <div className="Composition">
                    <h3 id="Blue_Compo_title">Blue Team Composition</h3>

                    <img alt="Blue Team 1st Champion" className="Champion champ-1 blue" src="Utilities/placeholder.png"/>
                    <img alt="Blue Team 2nd Champion" className="Champion champ-2 blue" src="Utilities/placeholder.png"/>
                    <img alt="Blue Team 3rd Champion" className="Champion champ-3 blue" src="Utilities/placeholder.png"/>
                    <img alt="Blue Team 4th Champion" className="Champion champ-4 blue" src="Utilities/placeholder.png"/>
                    <img alt="Blue Team 5th Champion" className="Champion champ-5 blue" src="Utilities/placeholder.png"/>
                    <img alt="Blue Team 6th Champion" className="Champion champ-6 blue" src="Utilities/placeholder.png"/>
                </div>

                <div className="Tank">
                    <h3 className="Tank-Title">Tank</h3>

                    <img alt="D.Va" className="Champion" src="Hero-icons/dva-icon.png"/>
                    <img alt="Orisa" className="Champion" src="Hero-icons/orisa-icon.png"/>
                    <img alt="Reinhardt" className="Champion" src="Hero-icons/reinhardt-icon.png"/>
                    <img alt="Roadhog" className="Champion" src="Hero-icons/roadhog-icon.png"/>
                    <img alt="Sigma" className="Champion" src="Hero-icons/sigma-icon.png"/>
                    <img alt="Winston" className="Champion" src="Hero-icons/winston-icon.png"/>
                    <img alt="Wrecking Ball" className="Champion" src="Hero-icons/wreckingball-icon.png"/>
                    <img alt="Zarya" className="Champion" src="Hero-icons/zarya-icon.png"/>
                </div>

                <div className="Damage">
                    <h3 className="Damage-title">DPS</h3>

                    <img alt="Ashe" className="Champion" src="Hero-icons/ashe-icon.png"/>
                    <img alt="Bastion" className="Champion" src="Hero-icons/bastion-icon.png"/>
                    <img alt="Doomfist" className="Champion" src="Hero-icons/doomfist-icon.png"/>
                    <img alt="Echo" className="Champion" src="Hero-icons/echo-icon.webp"/>
                    <img alt="Genji" className="Champion" src="Hero-icons/genji-icon.png"/>
                    <img alt="Hanzo" className="Champion" src="Hero-icons/hanzo-icon.png"/>
                    <img alt="Junkrat" className="Champion" src="Hero-icons/junkrat-icon.png"/>
                    <img alt="Cassidy" className="Champion" src="Hero-icons/cassidy-icon.png"/>
                    <img alt="Mei" className="Champion" src="Hero-icons/mei-icon.png"/>
                    <img alt="Pharah" className="Champion" src="Hero-icons/pharah-icon.png"/>
                    <img alt="Reaper" className="Champion" src="Hero-icons/reaper-icon.png"/>
                    <img alt="Soldier 76" className="Champion" src="Hero-icons/soldier76-icon.png"/>
                    <img alt="Sombra" className="Champion" src="Hero-icons/sombra-icon.png"/>
                    <img alt="Symmetra" className="Champion" src="Hero-icons/symmetra-icon.png"/>
                    <img alt="Torbjorn" className="Champion" src="Hero-icons/torbjorn-icon.png"/>
                    <img alt="Tracer" className="Champion" src="Hero-icons/tracer-icon.png"/>
                    <img alt="Widowmaker" className="Champion" src="Hero-icons/widowmaker-icon.png"/>
                </div>

                <div className="Support">
                    <h3 className={"Support-title"}>Support</h3>

                    <img alt="Ana" className="Champion" src="Hero-icons/ana-icon.png"/>
                    <img alt="Baptiste" className="Champion" src="Hero-icons/baptiste-icon.png"/>
                    <img alt="Brigitte" className="Champion" src="Hero-icons/brigitte-icon.png"/>
                    <img alt="Lucio" className="Champion" src="Hero-icons/lucio-icon.png"/>
                    <img alt="Mercy" className="Champion" src="Hero-icons/mercy-icon.png"/>
                    <img alt="Moira" className="Champion" src="Hero-icons/moira-icon.png"/>
                    <img alt="Zenyatta" className="Champion" src="Hero-icons/zenyatta-icon.png"/>
                </div>
            </div>

            <div className="CompTeam red">
                <div className="Composition">
                    <h3 id="Red_Compo_title">Red Team Composition</h3>

                    <img alt="Red Team 1st Champion" className="Champion champ-1 red" src="Utilities/placeholder.png"/>
                    <img alt="Red Team 2nd Champion" className="Champion champ-2 red" src="Utilities/placeholder.png"/>
                    <img alt="Red Team 3rd Champion" className="Champion champ-3 red" src="Utilities/placeholder.png"/>
                    <img alt="Red Team 4th Champion" className="Champion champ-4 red" src="Utilities/placeholder.png"/>
                    <img alt="Red Team 5th Champion" className="Champion champ-5 red" src="Utilities/placeholder.png"/>
                    <img alt="Red Team 6th Champion" className="Champion champ-6 red" src="Utilities/placeholder.png"/>
                </div>

                <div className="Tank">
                    <h3 className="Tank-Title">Tank</h3>

                    <img alt="D.Va" className="Champion" src="Hero-icons/dva-icon.png"/>
                    <img alt="Orisa" className="Champion" src="Hero-icons/orisa-icon.png"/>
                    <img alt="Reinhardt" className="Champion" src="Hero-icons/reinhardt-icon.png"/>
                    <img alt="Roadhog" className="Champion" src="Hero-icons/roadhog-icon.png"/>
                    <img alt="Sigma" className="Champion" src="Hero-icons/sigma-icon.png"/>
                    <img alt="Winston" className="Champion" src="Hero-icons/winston-icon.png"/>
                    <img alt="Wrecking Ball" className="Champion" src="Hero-icons/wreckingball-icon.png"/>
                    <img alt="Zarya" className="Champion" src="Hero-icons/zarya-icon.png"/>
                </div>

                <div className="Damage">
                    <h3 className="Damage-title">DPS</h3>

                    <img alt="Ashe" className="Champion" src="Hero-icons/ashe-icon.png"/>
                    <img alt="Bastion" className="Champion" src="Hero-icons/bastion-icon.png"/>
                    <img alt="Doomfist" className="Champion" src="Hero-icons/doomfist-icon.png"/>
                    <img alt="Echo" className="Champion" src="Hero-icons/echo-icon.webp"/>
                    <img alt="Genji" className="Champion" src="Hero-icons/genji-icon.png"/>
                    <img alt="Hanzo" className="Champion" src="Hero-icons/hanzo-icon.png"/>
                    <img alt="Junkrat" className="Champion" src="Hero-icons/junkrat-icon.png"/>
                    <img alt="Cassidy" className="Champion" src="Hero-icons/cassidy-icon.png"/>
                    <img alt="Mei" className="Champion" src="Hero-icons/mei-icon.png"/>
                    <img alt="Pharah" className="Champion" src="Hero-icons/pharah-icon.png"/>
                    <img alt="Reaper" className="Champion" src="Hero-icons/reaper-icon.png"/>
                    <img alt="Soldier 76" className="Champion" src="Hero-icons/soldier76-icon.png"/>
                    <img alt="Sombra" className="Champion" src="Hero-icons/sombra-icon.png"/>
                    <img alt="Symmetra" className="Champion" src="Hero-icons/symmetra-icon.png"/>
                    <img alt="Torbjorn" className="Champion" src="Hero-icons/torbjorn-icon.png"/>
                    <img alt="Tracer" className="Champion" src="Hero-icons/tracer-icon.png"/>
                    <img alt="Widowmaker" className="Champion" src="Hero-icons/widowmaker-icon.png"/>
                </div>

                <div className="Support">
                    <h3 className={"Support-title"}>Support</h3>

                    <img alt="Ana" className="Champion" src="Hero-icons/ana-icon.png"/>
                    <img alt="Baptiste" className="Champion" src="Hero-icons/baptiste-icon.png"/>
                    <img alt="Brigitte" className="Champion" src="Hero-icons/brigitte-icon.png"/>
                    <img alt="Lucio" className="Champion" src="Hero-icons/lucio-icon.png"/>
                    <img alt="Mercy" className="Champion" src="Hero-icons/mercy-icon.png"/>
                    <img alt="Moira" className="Champion" src="Hero-icons/moira-icon.png"/>
                    <img alt="Zenyatta" className="Champion" src="Hero-icons/zenyatta-icon.png"/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;

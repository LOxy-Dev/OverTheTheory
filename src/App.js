import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

function App() {
  return (
<div className="App">
    <div id="TeamComposition">
        <h2>Team Composition</h2>

        <div id="Comps">
            <div className="CompTeam blue">
                <div className="Tank">
                    <h3 className="Tank-Title">Tank</h3>

                    <img className="Champion" src="Hero-icons/dva-icon.png"/>
                    <img className="Champion" src="Hero-icons/orisa-icon.png"/>
                    <img className="Champion" src="Hero-icons/reinhardt-icon.png"/>
                    <img className="Champion" src="Hero-icons/roadhog-icon.png"/>
                    <img className="Champion" src="Hero-icons/sigma-icon.png"/>
                    <img className="Champion" src="Hero-icons/winston-icon.png"/>
                    <img className="Champion" src="Hero-icons/wreckingball-icon.png"/>
                    <img className="Champion" src="Hero-icons/zarya-icon.png"/>
                </div>

                <div className="Damage">
                    <h3 className="Damage-title">DPS</h3>

                    <img className="Champion" src="Hero-icons/ashe-icon.png"/>
                    <img className="Champion" src="Hero-icons/bastion-icon.png"/>
                    <img className="Champion" src="Hero-icons/doomfist-icon.png"/>
                    <img className="Champion" src="Hero-icons/echo-icon.webp"/>
                    <img className="Champion" src="Hero-icons/genji-icon.png"/>
                    <img className="Champion" src="Hero-icons/hanzo-icon.png"/>
                    <img className="Champion" src="Hero-icons/junkrat-icon.png"/>
                    <img className="Champion" src="Hero-icons/mccree-icon.png"/>
                    <img className="Champion" src="Hero-icons/mei-icon.png"/>
                    <img className="Champion" src="Hero-icons/pharah-icon.png"/>
                    <img className="Champion" src="Hero-icons/reaper-icon.png"/>
                    <img className="Champion" src="Hero-icons/soldier76-icon.png"/>
                    <img className="Champion" src="Hero-icons/sombra-icon.png"/>
                    <img className="Champion" src="Hero-icons/symmetra-icon.png"/>
                    <img className="Champion" src="Hero-icons/torbjorn-icon.png"/>
                    <img className="Champion" src="Hero-icons/tracer-icon.png"/>
                    <img className="Champion" src="Hero-icons/widowmaker-icon.png"/>
                </div>

                <div className="Support">
                    <h3 className={"Support-title"}>Support</h3>

                    <img className="Champion" src="Hero-icons/ana-icon.png"/>
                    <img className="Champion" src="Hero-icons/baptiste-icon.png"/>
                    <img className="Champion" src="Hero-icons/brigitte-icon.png"/>
                    <img className="Champion" src="Hero-icons/lucio-icon.png"/>
                    <img className="Champion" src="Hero-icons/mercy-icon.png"/>
                    <img className="Champion" src="Hero-icons/moira-icon.png"/>
                    <img className="Champion" src="Hero-icons/zenyatta-icon.png"/>
                </div>
            </div>
            <div className="CompTeam red">
                <div className="Tank">
                    <h3 className="Tank-Title">Tank</h3>

                    <img className="Champion" src="Hero-icons/dva-icon.png"/>
                    <img className="Champion" src="Hero-icons/orisa-icon.png"/>
                    <img className="Champion" src="Hero-icons/reinhardt-icon.png"/>
                    <img className="Champion" src="Hero-icons/roadhog-icon.png"/>
                    <img className="Champion" src="Hero-icons/sigma-icon.png"/>
                    <img className="Champion" src="Hero-icons/winston-icon.png"/>
                    <img className="Champion" src="Hero-icons/wreckingball-icon.png"/>
                    <img className="Champion" src="Hero-icons/zarya-icon.png"/>
                </div>

                <div className="Damage">
                    <h3 className="Damage-title">DPS</h3>

                    <img className="Champion" src="Hero-icons/ashe-icon.png"/>
                    <img className="Champion" src="Hero-icons/bastion-icon.png"/>
                    <img className="Champion" src="Hero-icons/doomfist-icon.png"/>
                    <img className="Champion" src="Hero-icons/echo-icon.webp"/>
                    <img className="Champion" src="Hero-icons/genji-icon.png"/>
                    <img className="Champion" src="Hero-icons/hanzo-icon.png"/>
                    <img className="Champion" src="Hero-icons/junkrat-icon.png"/>
                    <img className="Champion" src="Hero-icons/mccree-icon.png"/>
                    <img className="Champion" src="Hero-icons/mei-icon.png"/>
                    <img className="Champion" src="Hero-icons/pharah-icon.png"/>
                    <img className="Champion" src="Hero-icons/reaper-icon.png"/>
                    <img className="Champion" src="Hero-icons/soldier76-icon.png"/>
                    <img className="Champion" src="Hero-icons/sombra-icon.png"/>
                    <img className="Champion" src="Hero-icons/symmetra-icon.png"/>
                    <img className="Champion" src="Hero-icons/torbjorn-icon.png"/>
                    <img className="Champion" src="Hero-icons/tracer-icon.png"/>
                    <img className="Champion" src="Hero-icons/widowmaker-icon.png"/>
                </div>

                <div className="Support">
                    <h3 className={"Support-title"}>Support</h3>

                    <img className="Champion" src="Hero-icons/ana-icon.png"/>
                    <img className="Champion" src="Hero-icons/baptiste-icon.png"/>
                    <img className="Champion" src="Hero-icons/brigitte-icon.png"/>
                    <img className="Champion" src="Hero-icons/lucio-icon.png"/>
                    <img className="Champion" src="Hero-icons/mercy-icon.png"/>
                    <img className="Champion" src="Hero-icons/moira-icon.png"/>
                    <img className="Champion" src="Hero-icons/zenyatta-icon.png"/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;

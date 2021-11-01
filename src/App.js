import './App.css';
import React from "react";

let blue_pick_number = 1;
let red_pick_number = 1;

function championSelect(element) {
    if (element.target.classList.contains("Selected"))
        return;

    if (element.target.classList.contains("blue")) {
        // Get the class to find the element
        let class_to_find = "champ-"+blue_pick_number+" blue";
        // Get and configure the element
        let champ = document.getElementsByClassName(class_to_find).item(0);
        champ.src = element.target.src;
        champ.classList.add("Selected");

        blue_pick_number++;
    } else if (element.target.classList.contains("red") && red_pick_number > 0 && red_pick_number <= 6) {
        // Get the class to find the element
        let class_to_find = "champ-" + red_pick_number + " red";
        // Get and configure the element
        let champ = document.getElementsByClassName(class_to_find).item(0);
        champ.src = element.target.src;
        champ.classList.add("Selected");

        red_pick_number++;
    }

    element.target.classList.add("Selected");
}

function championUnselect(element) {
    if (!element.target.classList.contains("Selected"))
        return;

    let slots;
    let last_slot_src = "Utilities/placeholder.png";

    if (element.target.classList.contains("blue")) {
        slots = document.getElementsByClassName("champ-slot blue")
        blue_pick_number --;
    } else if (element.target.classList.contains("red")) {
        slots = document.getElementsByClassName("champ-slot red")
        red_pick_number --;
    }

    // Move all icons to the left
    for (let i = 5; i>0; i--) {
        let a = slots.item(i).src;
        slots.item(i).src = last_slot_src;
        last_slot_src = a;

        if (element.target === slots.item(i)) {
            break;
        }
    }

    // Reset
    slots.item(0).classList.remove("Selected");
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

                    <img alt="Blue Team 1st Champion" className="Champion champ-slot champ-1 blue" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Blue Team 2nd Champion" className="Champion champ-slot champ-2 blue" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Blue Team 3rd Champion" className="Champion champ-slot champ-3 blue" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Blue Team 4th Champion" className="Champion champ-slot champ-4 blue" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Blue Team 5th Champion" className="Champion champ-slot champ-5 blue" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Blue Team 6th Champion" className="Champion champ-slot champ-6 blue" src="Utilities/placeholder.png" onClick={championUnselect}/>
                </div>

                <div className="Tank">
                    <h3 className="Tank-Title">Tank</h3>

                    <img alt="D.Va" className="Champion blue" src="Hero-icons/dva-icon.png" onClick={championSelect}/>
                    <img alt="Orisa" className="Champion blue" src="Hero-icons/orisa-icon.png" onClick={championSelect}/>
                    <img alt="Reinhardt" className="Champion blue" src="Hero-icons/reinhardt-icon.png" onClick={championSelect}/>
                    <img alt="Roadhog" className="Champion blue" src="Hero-icons/roadhog-icon.png" onClick={championSelect}/>
                    <img alt="Sigma" className="Champion blue" src="Hero-icons/sigma-icon.png" onClick={championSelect}/>
                    <img alt="Winston" className="Champion blue" src="Hero-icons/winston-icon.png" onClick={championSelect}/>
                    <img alt="Wrecking Ball" className="Champion blue" src="Hero-icons/wreckingball-icon.png" onClick={championSelect}/>
                    <img alt="Zarya" className="Champion blue" src="Hero-icons/zarya-icon.png" onClick={championSelect}/>
                </div>

                <div className="Damage">
                    <h3 className="Damage-title">DPS</h3>

                    <img alt="Ashe" className="Champion blue" src="Hero-icons/ashe-icon.png" onClick={championSelect}/>
                    <img alt="Bastion" className="Champion blue" src="Hero-icons/bastion-icon.png" onClick={championSelect}/>
                    <img alt="Doomfist" className="Champion blue" src="Hero-icons/doomfist-icon.png" onClick={championSelect}/>
                    <img alt="Echo" className="Champion blue" src="Hero-icons/echo-icon.webp" onClick={championSelect}/>
                    <img alt="Genji" className="Champion blue" src="Hero-icons/genji-icon.png" onClick={championSelect}/>
                    <img alt="Hanzo" className="Champion blue" src="Hero-icons/hanzo-icon.png" onClick={championSelect}/>
                    <img alt="Junkrat" className="Champion blue" src="Hero-icons/junkrat-icon.png" onClick={championSelect}/>
                    <img alt="Cassidy" className="Champion blue" src="Hero-icons/cassidy-icon.png" onClick={championSelect}/>
                    <img alt="Mei" className="Champion blue" src="Hero-icons/mei-icon.png" onClick={championSelect}/>
                    <img alt="Pharah" className="Champion blue" src="Hero-icons/pharah-icon.png" onClick={championSelect}/>
                    <img alt="Reaper" className="Champion blue" src="Hero-icons/reaper-icon.png" onClick={championSelect}/>
                    <img alt="Soldier 76" className="Champion blue" src="Hero-icons/soldier76-icon.png" onClick={championSelect}/>
                    <img alt="Sombra" className="Champion blue" src="Hero-icons/sombra-icon.png" onClick={championSelect}/>
                    <img alt="Symmetra" className="Champion blue" src="Hero-icons/symmetra-icon.png" onClick={championSelect}/>
                    <img alt="Torbjorn" className="Champion blue" src="Hero-icons/torbjorn-icon.png" onClick={championSelect}/>
                    <img alt="Tracer" className="Champion blue" src="Hero-icons/tracer-icon.png" onClick={championSelect}/>
                    <img alt="Widowmaker" className="Champion blue" src="Hero-icons/widowmaker-icon.png" onClick={championSelect}/>
                </div>

                <div className="Support">
                    <h3 className={"Support-title"}>Support</h3>

                    <img alt="Ana" className="Champion blue" src="Hero-icons/ana-icon.png" onClick={championSelect}/>
                    <img alt="Baptiste" className="Champion blue" src="Hero-icons/baptiste-icon.png" onClick={championSelect}/>
                    <img alt="Brigitte" className="Champion blue" src="Hero-icons/brigitte-icon.png" onClick={championSelect}/>
                    <img alt="Lucio" className="Champion blue" src="Hero-icons/lucio-icon.png" onClick={championSelect}/>
                    <img alt="Mercy" className="Champion blue" src="Hero-icons/mercy-icon.png" onClick={championSelect}/>
                    <img alt="Moira" className="Champion blue" src="Hero-icons/moira-icon.png" onClick={championSelect}/>
                    <img alt="Zenyatta" className="Champion blue" src="Hero-icons/zenyatta-icon.png" onClick={championSelect}/>
                </div>
            </div>

            <div className="CompTeam red">
                <div className="Composition">
                    <h3 id="Red_Compo_title">Red Team Composition</h3>

                    <img alt="Red Team 1st Champion" className="Champion champ-slot champ-1 red" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Red Team 2nd Champion" className="Champion champ-slot champ-2 red" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Red Team 3rd Champion" className="Champion champ-slot champ-3 red" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Red Team 4th Champion" className="Champion champ-slot champ-4 red" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Red Team 5th Champion" className="Champion champ-slot champ-5 red" src="Utilities/placeholder.png" onClick={championUnselect}/>
                    <img alt="Red Team 6th Champion" className="Champion champ-slot champ-6 red" src="Utilities/placeholder.png" onClick={championUnselect}/>
                </div>

                <div className="Tank">
                    <h3 className="Tank-Title">Tank</h3>

                    <img alt="D.Va" className="Champion red" src="Hero-icons/dva-icon.png" onClick={championSelect}/>
                    <img alt="Orisa" className="Champion red" src="Hero-icons/orisa-icon.png" onClick={championSelect}/>
                    <img alt="Reinhardt" className="Champion red" src="Hero-icons/reinhardt-icon.png" onClick={championSelect}/>
                    <img alt="Roadhog" className="Champion red" src="Hero-icons/roadhog-icon.png" onClick={championSelect}/>
                    <img alt="Sigma" className="Champion red" src="Hero-icons/sigma-icon.png" onClick={championSelect}/>
                    <img alt="Winston" className="Champion red" src="Hero-icons/winston-icon.png" onClick={championSelect}/>
                    <img alt="Wrecking Ball" className="Champion red" src="Hero-icons/wreckingball-icon.png" onClick={championSelect}/>
                    <img alt="Zarya" className="Champion red" src="Hero-icons/zarya-icon.png" onClick={championSelect}/>
                </div>

                <div className="Damage">
                    <h3 className="Damage-title">DPS</h3>

                    <img alt="Ashe" className="Champion red" src="Hero-icons/ashe-icon.png" onClick={championSelect}/>
                    <img alt="Bastion" className="Champion red" src="Hero-icons/bastion-icon.png" onClick={championSelect}/>
                    <img alt="Doomfist" className="Champion red" src="Hero-icons/doomfist-icon.png" onClick={championSelect}/>
                    <img alt="Echo" className="Champion red" src="Hero-icons/echo-icon.webp" onClick={championSelect}/>
                    <img alt="Genji" className="Champion red" src="Hero-icons/genji-icon.png" onClick={championSelect}/>
                    <img alt="Hanzo" className="Champion red" src="Hero-icons/hanzo-icon.png" onClick={championSelect}/>
                    <img alt="Junkrat" className="Champion red" src="Hero-icons/junkrat-icon.png" onClick={championSelect}/>
                    <img alt="Cassidy" className="Champion red" src="Hero-icons/cassidy-icon.png" onClick={championSelect}/>
                    <img alt="Mei" className="Champion red" src="Hero-icons/mei-icon.png" onClick={championSelect}/>
                    <img alt="Pharah" className="Champion red" src="Hero-icons/pharah-icon.png" onClick={championSelect}/>
                    <img alt="Reaper" className="Champion red" src="Hero-icons/reaper-icon.png" onClick={championSelect}/>
                    <img alt="Soldier 76" className="Champion red" src="Hero-icons/soldier76-icon.png" onClick={championSelect}/>
                    <img alt="Sombra" className="Champion red" src="Hero-icons/sombra-icon.png" onClick={championSelect}/>
                    <img alt="Symmetra" className="Champion red" src="Hero-icons/symmetra-icon.png" onClick={championSelect}/>
                    <img alt="Torbjorn" className="Champion red" src="Hero-icons/torbjorn-icon.png" onClick={championSelect}/>
                    <img alt="Tracer" className="Champion red" src="Hero-icons/tracer-icon.png" onClick={championSelect}/>
                    <img alt="Widowmaker" className="Champion red" src="Hero-icons/widowmaker-icon.png" onClick={championSelect}/>
                </div>

                <div className="Support">
                    <h3 className={"Support-title"}>Support</h3>

                    <img alt="Ana" className="Champion red" src="Hero-icons/ana-icon.png" onClick={championSelect}/>
                    <img alt="Baptiste" className="Champion red" src="Hero-icons/baptiste-icon.png" onClick={championSelect}/>
                    <img alt="Brigitte" className="Champion red" src="Hero-icons/brigitte-icon.png" onClick={championSelect}/>
                    <img alt="Lucio" className="Champion red" src="Hero-icons/lucio-icon.png" onClick={championSelect}/>
                    <img alt="Mercy" className="Champion red" src="Hero-icons/mercy-icon.png" onClick={championSelect}/>
                    <img alt="Moira" className="Champion red" src="Hero-icons/moira-icon.png" onClick={championSelect}/>
                    <img alt="Zenyatta" className="Champion red" src="Hero-icons/zenyatta-icon.png" onClick={championSelect}/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;

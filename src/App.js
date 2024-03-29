import {useRef, useState} from "react";

function App() {
    let [name, setName] = useState('Enter your Name');
    let nameField = useRef('');

    let [strength, setStrength] = useState(0);
    let [agility, setAgility] = useState(0);
    let [intelligence, setIntelligence] = useState(0);
    let [charisma, setCharisma] = useState(0);

    let [health, setHealth] = useState(3 + strength)
    let [damage, setDamage] = useState(0);

    let [attack, setAttack] = useState(0);
    let [stealth, setStealth] = useState(0);
    let [archery, setArchery] = useState(0);
    let [educability, setEducability] = useState(0);
    let [survival, setSurvival] = useState(0);
    let [medicine, setMedicine] = useState(0);
    let [intimidation, setIntimidation] = useState(0);
    let [insight, setInsight] = useState(0);
    let [appearance, setAppearance] = useState(0);
    let [manipulation, setManipulation] = useState(0);

    const actionIncHealth = () => {
        if (strength < 10) {
            setStrength(++strength);
            setHealth(++health)
        }
    }
    const actionDecHealth = () => {
        if (strength > 0) {
            setStrength(--strength);
            setHealth(--health)
        }
    }
    const actionInc = (atr,setAtr) => {
        if (atr < 10) setAtr(++atr);
    }
    const actionDec = (atr,setAtr) => {
        if (atr > 0) setAtr(--atr);
    }
    const actionTakeDamage = () => {
        if((health - damage) > 0)setDamage(++damage);
    }
    const actionAddLvlRank = (lvl) => {
        switch (lvl) {
            case 0:
                return("0 Untrained");
            case 1:
                return("1 Beginner");
            case 2:
                return("2 Apprentice");
            case 3:
                return("3 Adept");
            case 4:
                return("4 Expert");
            case 5:
                return("5 Master*");
            default: alert("Fail");
        }
    }
    const handleChangeName = () => {
        setName(nameField.current.value);
    }
    const handleLevelUp = (atr, ability, setAbility, atrName) => {
        let atrLeft;
        switch (atrName) {
            case "strength":
                atrLeft = strength - attack;
                break;
            case "agility":
                atrLeft = agility - stealth - archery;
                break;
            case "intelligence":
                atrLeft = intelligence - educability - survival - medicine;
                break;
            case "charisma":
                atrLeft = charisma - intimidation - insight - appearance - manipulation;
                break;
            default: break;
        }
        if (atrLeft > 0 && ability < 5) {
            setAbility(++ability)
        }
    }
    const handleDownload = () => {
        let obj = {
            name,
            strength,
            agility,
            intelligence,
            charisma,
            health,
            damage,
            attack,
            stealth,
            archery,
            educability,
            survival,
            medicine,
            intimidation,
            insight,
            appearance,
            manipulation
        }
        return URL.createObjectURL(new Blob([JSON.stringify(obj)],{type: "application/json"}));
    }
    const handleUpload = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.addEventListener("loadend", (e) =>{
            let res = JSON.parse(e.target.result)
            setName(res.name);
            setStrength(res.strength);
            setAgility(res.agility)
            setIntelligence(res.intelligence);
            setCharisma(res.charisma);
            setHealth(res.health);
            setDamage(res.damage);
            setAttack(res.attack);
            setStealth(res.stealth);
            setArchery(res.archery);
            setEducability(res.educability);
            setSurvival(res.survival);
            setMedicine(res.medicine);
            setIntimidation(res.intimidation);
            setInsight(res.insight);
            setAppearance(res.appearance);
            setManipulation(res.manipulation);
        })
        reader.readAsText(file);
    }
  return (
    <div className="App">
        <div className="name">
          <h1>Name: {name}</h1>
          <input  type="text" ref={nameField}/>
          <button onClick={handleChangeName}>Save</button>
      </div>
        <h4>Your attributes</h4>
        <div className="attributes">
            <div className="strength">
                <label>Strength: {strength}</label>
                <button onClick={() => actionIncHealth()}>+</button>
                <button onClick={() => actionDecHealth()}>-</button>
            </div>
            <div className="agility">
                <label>Agility: {agility}</label>
                <button onClick={() => actionInc(agility,setAgility)}>+</button>
                <button onClick={() => actionDec(agility,setAgility)}>-</button>
            </div>
            <div className="intelligence">
                <label>Intelligence: {intelligence}</label>
                <button onClick={() => actionInc(intelligence,setIntelligence)}>+</button>
                <button onClick={() => actionDec(intelligence,setIntelligence)}>-</button>
            </div>
            <div className="charisma">
                <label>Charisma: {charisma}</label>
                <button onClick={() => actionInc(charisma,setCharisma)}>+</button>
                <button onClick={() => actionDec(charisma,setCharisma)}>-</button>
            </div>
        </div>
        <h4>Stats</h4>
        <div className="options">
            <div className="health">Health: {health - damage <= 0 ?"You are died" : health - damage }/{health}</div>
            <div className="evasion">Evasion: {10 + agility}</div>
            <div className="energy">Energy: {agility + intelligence}</div>
            <button onClick={actionTakeDamage}>Damage</button>
        </div>
        <h4>Abilities</h4>
        <div className="abilities">
            <div className="strength">
                <div className="attack" onClick={() => handleLevelUp(strength, attack, setAttack, "strength")}>Attack: level {actionAddLvlRank(attack)}</div>
            </div>
            <div className="agility">
                <div className="stealth" onClick={() => handleLevelUp(agility, stealth, setStealth, "agility")}>Stealth: level {actionAddLvlRank(stealth)}</div>
                <div className="archery" onClick={() => handleLevelUp(agility, archery, setArchery, "agility")}>Archery: level {actionAddLvlRank(archery)}</div>
            </div>
            <div className="intelligence">
                <div className="educability" onClick={() => handleLevelUp(intelligence, educability, setEducability, "intelligence")}>Educability: level {actionAddLvlRank(educability)}</div>
                <div className="survival" onClick={() => handleLevelUp(intelligence, survival, setSurvival, "intelligence")}>Survival: level {actionAddLvlRank(survival)}</div>
                <div className="medicine" onClick={() => handleLevelUp(intelligence, medicine, setMedicine, "intelligence")}>Medicine: level {actionAddLvlRank(medicine)}</div>
            </div>
            <div className="charisma">
                <div className="intimidation" onClick={() => handleLevelUp(charisma, intimidation, setIntimidation, "charisma")}>Intimidation: level {actionAddLvlRank(intimidation)}</div>
                <div className="insight" onClick={() => handleLevelUp(charisma, insight, setInsight, "charisma")}>Insight: level {actionAddLvlRank(insight)}</div>
                <div className="appearance" onClick={() => handleLevelUp(charisma, appearance, setAppearance, "charisma")}>Appearance: level {actionAddLvlRank(appearance)}</div>
                <div className="manipulation" onClick={() => handleLevelUp(charisma, manipulation, setManipulation, "charisma")}>Manipulation:level {actionAddLvlRank(manipulation)}</div>
            </div>
        </div>
        <div className="profile">
            <a href={handleDownload()} download>Download profile</a>
            <label>Upload your profile</label>
            <input type="file" accept=".json" onChange={handleUpload}/>
        </div>
    </div>
  );
}

export default App;

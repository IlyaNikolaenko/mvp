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
    let [medicine, setMidicine] = useState(0);
    let [intimidation, setIntimidation] = useState(0);
    let [insight, setInsigth] = useState(0);
    let [appearance, setAppearance] = useState(0);
    let [manipulation, setManipulation] = useState(0);


    const handleChangeName = () => {
       setName(nameField.current.value);
    }
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

  return (
    <div className="App">
        <div className="name">
          <h3>Name: {name}</h3>
          <input  type="text" ref={nameField}/>
          <button onClick={handleChangeName}>Save</button>
      </div>
        <div className="attributes">
            <h4>Your attributes</h4>
            <div className="strength">
                Strength:
                <button onClick={() => actionIncHealth()}>+</button>
                <label>{strength}</label>
                <button onClick={() => actionDecHealth()}>-</button>
            </div>
            <div className="agility">
                Agility:
                <button onClick={() => actionInc(agility,setAgility)}>+</button>
                <label>{agility}</label>
                <button onClick={() => actionDec(agility,setAgility)}>-</button>
            </div>
            <div className="intelligence">
                Intelligence:
                <button onClick={() => actionInc(intelligence,setIntelligence)}>+</button>
                <label>{intelligence}</label>
                <button onClick={() => actionDec(intelligence,setIntelligence)}>-</button>
            </div>
            <div className="charisma">
                Charisma:
                <button onClick={() => actionInc(charisma,setCharisma)}>+</button>
                <label>{charisma}</label>
                <button onClick={() => actionDec(charisma,setCharisma)}>-</button>
            </div>
        </div>
        <div className="options">
            <h4>Stats</h4>
            <div className="health">Health: {health - damage <= 0 ?"You are died" : health - damage }/{health}</div>
            <div className="evasion">Evasion: {10 + agility}</div>
            <div className="energy">Energy: {agility + intelligence}</div>
            <button onClick={actionTakeDamage}>Damage</button>
        </div>
        <div className="abilities">
            <h4>Abilities</h4>
            <div className="strength">
                <div className="attack">Attack: {attack}</div>
            </div>
            <div className="agility">
                <div className="stealth">Stealth: {stealth}</div>
                <div className="archery">Archery: {archery}</div>
            </div>
            <div className="intelligence">
                <div className="educability">Educability: {educability}</div>
                <div className="survival">Survival: {survival}</div>
                <div className="medicine">Medicine: {medicine}</div>
            </div>
            <div className="charisma">
                <div className="intimidation">Intimidation: {intimidation}</div>
                <div className="insight">Insight: {insight}</div>
                <div className="appearance">Appearance: {appearance}</div>
                <div className="manipulation">Manipulation:{manipulation}</div>
            </div>
        </div>
    </div>
  );
}

export default App;

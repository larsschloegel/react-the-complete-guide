import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function clickEdit() {
        setIsEditing((editing) => !editing);
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editPlayerMode = <span className="player-name">{playerName}</span>;
    let buttonName = "Edit";
    if (isEditing) {
        editPlayerMode = <input type="text" required value={playerName} onChange={handleChange}></input>;
        buttonName = "Save";
    }

    return(
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editPlayerMode}
          <span className="player-symbol">{symbol}</span>
          <button onClick={clickEdit}>{buttonName}</button>
        </span>
      </li>
    )
}
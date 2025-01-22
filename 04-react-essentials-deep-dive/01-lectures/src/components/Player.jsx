import { useState } from "react"

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function clickEdit() {
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>;
    let buttonName = "Edit";
    if (isEditing) {
        playerName = <input type="text" required></input>;
        buttonName = "Save";
    }

    return(
        <li>
        <span className="player">
            {playerName}
          <span className="player-symbol">{symbol}</span>
          <button onClick={clickEdit}>{buttonName}</button>
        </span>
      </li>
    )
}
import { useState } from "react"

export default function Player({initialName, symbol}){
    const [name, setName] = useState(initialName)
    const [ isEditing, setIsEditing] = useState(false)

    function handleEditClick(){
        setIsEditing((editing)=> !editing)
    }

    function handleChange(event){
        setName(event.target.value)
    }

    let playerName =  <span className="player-name" >{name}</span>

    if(isEditing){
        playerName = <input value={name} required onChange={handleChange}/>
    }

    return(
        <li>
        <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

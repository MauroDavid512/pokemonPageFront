import "./PokeCard.css"
import React from "react"
import { NavLink } from "react-router-dom"
import { mayus } from ".."
import pokebola from '../imgs/pokebola.png'

const PokeCard = (props) => {
    
    return (
        <NavLink class="link" to={`/pokeDetail/${props.id}`}>
        <div className="card">
            
                <img className="image" src={props.img? props.img : pokebola} alt={props.name}/>
            
                <hr />
                <h3>{props.name}</h3>
             
                <p><b>Tipo: {props.typesString}</b>
                </p>
                
            
        </div>
        </NavLink>
    )
}

export default PokeCard

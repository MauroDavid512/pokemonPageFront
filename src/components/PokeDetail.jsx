import './PokeDetail.css'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions"
import { NavLink } from 'react-router-dom';
import loading from "../imgs/loading.gif";
import pokebola from '../imgs/pokebola.png';

const PokeDetail = (props) => {
     let id = props.match.params.id
     const dispatch = useDispatch();
     React.useEffect(()=>{
        dispatch(actions.getPokeDetail(id));
     }, [dispatch]);

     let pokemon = useSelector((state) => state.pokemonDetail)

    return (
        <div class="superconteiner">
        <div className="container2">
            <div>
            <h2>{pokemon.name}</h2>
            <div>
            {Object.values(pokemon).length !== 0 ? <img className="image" src={pokemon.img? pokemon.img : pokebola} alt={pokemon.name}/>: <img className="image2" src={loading} alt="Cargando..." />}
            </div>
            </div>
            <div>
            <h4>Id: {pokemon.id}</h4>
            <h4>Vida: {pokemon.hp}</h4>
            <h4>Ataque: {pokemon.attack}</h4>
            <h4>Defensa: {pokemon.defense}</h4>
            <h4>Velocidad: {pokemon.speed}</h4>
            <h4>Altura: {pokemon.height}</h4>
            <h4>Peso: {pokemon.weight}</h4>
            
            </div>
            <hr />
           <h4>Tipo: {pokemon.typesString} </h4>

            <NavLink to="/home"><button className='create'>Volver</button></NavLink>
           
        </div>
        </div>

    )
};





export default PokeDetail
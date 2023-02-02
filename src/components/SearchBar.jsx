import "./SearchBar.css"
import React, { useState } from 'react';
import * as actions from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchBar() {
  const [poke, setPoke] = useState('')
  const dispatch = useDispatch()
  const allPokemons = useSelector(state=> state.allPokemons)
  const verificador = allPokemons.find(e=> e.name === poke.charAt(0).toUpperCase() + poke.slice(1).toLowerCase())
  const handleSubmit = (e) => {
    if (!poke) {
      e.preventDefault();
      //traba la funcion
    }else if(!verificador){
      e.preventDefault();
      dispatch(actions.notFound())
      setPoke("")
    } else {
      e.preventDefault();
      
      dispatch(actions.onSearch(e.target.value))
      dispatch(actions.setSelectO('all'))
      dispatch(actions.setSelectT('all'))
      setPoke("")
    }
  }
  const handleInput = (e) => {
    e.preventDefault();
    setPoke(e.target.value)
  }

  return (
    <form>
      <div class="containerInput">
      <input
        type="text"
        placeholder="Buscar Pokemón"
        class="input"
        value={poke}
        onChange={e => handleInput(e)}
      />
      </div>
      <br />
      <button className="create" onClick={e => handleSubmit(e)} value={poke}>Buscar</button>
    </form>
  )
};
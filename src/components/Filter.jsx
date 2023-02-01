import "./Filter.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions'
import { NavLink } from 'react-router-dom'
import SearchBar from "./SearchBar";

const Filter = () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
       dispatch(actions.getAllTypes());
    }, []);


    let selectT = useSelector(state => state.selectT)
    let selectO = useSelector(state => state.selectO)


    const handleGetAll = (e) => {
        dispatch(actions.getAllPokes())
        dispatch(actions.setSelectT('all'))
        dispatch(actions.setSelectO('all'))
    }

    const handleTypeFilter = (e) => {
        dispatch(actions.filterType(e.target.value))
        dispatch(actions.setSelectT(e.target.value))
        dispatch(actions.setSelectO('all'))
    }

    const handleAttackSort = (dir) => {
        dispatch(actions.attackSort(dir))
    }

    const handleNameSort = (dir) => {
        dispatch(actions.nameSort(dir))
    }

  

    const handleOriginFilter = (e) => {
        if(e.target.value==='Api'){
            dispatch(actions.filterOriginal())
            dispatch(actions.setSelectO('Api'))
            dispatch(actions.setSelectT('all'))
        }else if(e.target.value==='Db'){
            dispatch(actions.filterCreated())
            dispatch(actions.setSelectO('Db'))
            dispatch(actions.setSelectT('all'))
        }else{
            dispatch(actions.getAllPokes())
            dispatch(actions.setSelectT('all'))
        }
    }


    let types = useSelector((state) => state.types)
    return (
        <div className="filterContainer">
            <button  onClick={e => handleGetAll(e)}>Cargar pokemons nuevamente</button>
            <br />
            <div class="padding"></div>
            <SearchBar/>
            <p>Filtrar por tipo: </p>
                <select name="type" value={selectT} onChange={e => handleTypeFilter(e)}>
                    <option value="all">Todos</option>
                    {types.map(e=> <option value={e.name}>{e.name}</option>)}
                </select>
                <p>Ordenar:</p>
                Por nombre <br />
                <button class="arrowup" onClick={e => handleNameSort("up")}><div  class="iconoarrowup"></div></button>
                <button class="arrowdown"  onClick={e => handleNameSort("down")}><div class="iconoarrowdown"></div></button>
                <br />Por ataque<br/>
                <button class="arrowup" onClick={e => handleAttackSort("upA")}><div class="iconoarrowup"></div></button>
                <button class="arrowdown" onClick={e => handleAttackSort("downA")}><div class="iconoarrowdown"></div></button> <br />
                Ver: <br />
                <select name="defaults" value={selectO} onChange={e => handleOriginFilter(e)} onKeyUp={e => handleOriginFilter(e)}>
                    <option value="all">Todos</option>
                    <option value="Api">Originales</option>
                    <option value="Db">Creados</option>
                </select><hr />
                <NavLink to="/pokemonCreator"><button className="btn">¡Crea tu propio<br/>POKEMON!</button></NavLink>
        </div>
    )
}


export default Filter
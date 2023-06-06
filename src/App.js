import './App.css';
import React, { useEffect } from 'react';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx'
import PokeDetail from './components/PokeDetail';
import PokemonCreator from './components/PokemonCreator';
import { Autor } from './components/About';
import { Route } from 'react-router-dom'


function App() {

  const body = document.body

  let j = 1
  body.className = `body background${1}`
  const nextBackgound = () => {
    j == 15 ? j = 1 : j++
    body.className = `body background${j}`
    console.log(body.className)
  }

  setInterval(nextBackgound, 10000)



  







  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path={"/pokeDetail/:id"} component={PokeDetail} />
      <Route path="/pokemonCreator" component={PokemonCreator} />
      <Route path="/autor" component={Autor} />
      <div class="padding"></div>
    </div>
  );
}

export default App;

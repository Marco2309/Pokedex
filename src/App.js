import React from 'react';
import Card from './components/card';
import Pagination from './components/pagination';
import './App.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemones: [],
            currentPage: 1,
            pokemonPerPage: 10
        }
    }

    componentDidMount() {
        const limit = this.state.pokemonPerPage;
        const url = 'https://pokeapi.co/api/v2/pokemon';
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            })
    }

    fetchPage = (requestPage) => {
      //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
      const limit = this.state.pokemonPerPage;
      const url = 'https://pokeapi.co/api/v2/pokemon';
      fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * 10}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            })
    }

    getNumPokemon = (index) => {
      index++
      let numPokemon = ''
      if (index < 10){
        numPokemon = `00${index}`
      }else if(index < 100){
        numPokemon = `0${index}`
      }else if(index < 1000){
        numPokemon = `${index}`
      }else{
        console.log('muchos pokemons')
      }  
      return numPokemon
    }

    render() {
        return (
            <div className="pokedex-container">
              {
                this.state.pokemones.map( (pokemon, index) => {  
                  let pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getNumPokemon(index)}.png`
                  return (
                    <Card key={index + 1} name={pokemon.name} img={pokemonImg} />
                  )
                })
              }
              <Pagination fetchPageFn={this.fetchPage} />
            </div>
        )
    }
}

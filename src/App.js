import React from "react";
import PokemonDetail from "./components/pokemondetail/PokemonDetail";
import Card from "./components/card";
import Pagination from "./components/pagination";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemones: [],
      currentPage: 0,
      show: false,
      url: "",
      img: "",
    };
  }

  async componentDidMount() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    let data = await response.json();
    this.setState({ pokemones: data.results });
  }

  fetchPage = async (requestPage) => {
    window.scrollTo(0, 0);
    this.setState({ currentPage: requestPage });
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${requestPage * 10}`
    );
    let data = await response.json();
    this.setState({ pokemones: data.results });
  };

  getImage = (index) => {
    let pokemonImg = "";
    let id = index + 1 + this.state.currentPage * 10;
    if (id < 10) {
      pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
    } else if (id >= 10 && id < 100) {
      pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
    } else {
      pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    }
    return [pokemonImg, id];
  };
  setUrl = (url, img) => this.setState({ url: url, img: img });
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    return (
      <div className="pokedex-container">
        <h1 className="text-titt">Pokédex</h1>
        <div className="cards-container">
          {this.state.pokemones.map((pokemon, index) => {
            let pokemonImg = this.getImage(index);
            return (
              <Card
                key={index + 1}
                name={pokemon.name}
                img={pokemonImg[0]}
                id={pokemonImg[1]}
                Url={pokemon.url}
                handleShow={this.handleShow}
                setUrlFn={this.setUrl}
              />
            );
          })}
        </div>
        <PokemonDetail
          show={this.state.show}
          handleCloseFn={this.handleClose}
          url={this.state.url}
          img={this.state.img}
        />
        <Pagination
          fetchPageFn={this.fetchPage}
          page={this.state.currentPage}
        />
      </div>
    );
  }
}

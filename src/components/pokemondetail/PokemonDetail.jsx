import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

export default function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState({
    name: "",
    id: 0,
    types: [],
    stats: [],
  });

  useEffect(() => {
    if (props.url) {
      fetch(props.url)
        .then((response) => response.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.error("Error ==> ", error));
    }
  }, [props.url]);

  return (
    <Modal
      show={props.show}
      onHide={() => props.handleCloseFn()}
      animation={false}
      centered
    >
      <Modal.Header className="cont-header" closeButton>
        <Modal.Title className="cont-title">
          {pokemon.id} {pokemon.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="cont-body">
        <div className="img-cont">
          <img src={props.img} alt={pokemon.name} />
        </div>

        <div className="details-container">
          <div className="stats-container">
            <h5>Base stats</h5>
            {pokemon.stats.map((sts, i) => {
              return (
                <span key={i} className="span-stats">
                  {sts.stat.name}:{sts.base_stat}
                </span>
              );
            })}
          </div>

          <div className="types-container">
            {pokemon.types.map((obj, i) => {
              return (
                <span key={i} className={`span-type C${obj.type.name}`}>
                  {obj.type.name}
                </span>
              );
            })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

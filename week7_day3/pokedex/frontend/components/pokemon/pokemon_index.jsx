import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <ul className='pokemon-index-ul'>
      {this.props.pokemon.map((pokemon) => (
        <li key={pokemon.id} className='pokemon-index-li'>
          <img src={pokemon.image_url} style={{width: 40 + 'px'}}/>
          <span>{pokemon.name}</span>
        </li>
      ))}
      </ul>
    );
  }
}

export default PokemonIndex;

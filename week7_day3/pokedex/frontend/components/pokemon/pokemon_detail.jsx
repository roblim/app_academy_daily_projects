import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    let pokemonId = parseInt(this.props.match.params.pokemonId);
    this.props.requestSinglePokemon(pokemonId);
  }

  componentWillReceiveProps(newProps) {
    let oldPokemonId = this.props.match.params.pokemonId;
    let newPokemonId = newProps.match.params.pokemonId;
    if (oldPokemonId === newPokemonId) {return null;}
    this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  }

  render() {
    if (!this.props.pokemon) {
      return null;
    }
    return(
      <div className='pokemon-detail'>
        <img src={this.props.pokemon.image_url} />
        <h2>{this.props.pokemon.name}</h2>
        <h4>Type: {this.props.pokemon.poke_type}</h4>
        <h4>Attack: {this.props.pokemon.attack}</h4>
        <h4>Defense: {this.props.pokemon.defense}</h4>
        <h4>Moves: {this.props.pokemon.moves}</h4>
      </div>
    );
  }
}

export default PokemonDetail;

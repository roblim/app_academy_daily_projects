import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends React.Component {
  componentDidMount() {
    let pokemonId = parseInt(this.props.match.params.pokemonId);
    this.props.requestSinglePokemon(pokemonId);
  }

  componentWillReceiveProps(newProps) {
    let oldPokemonId = this.props.match.params.pokemonId;
    let newPokemonId = newProps.match.params.pokemonId;
    if (oldPokemonId === newPokemonId) {return ;}
    this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  }

  render() {
    if (!this.props.pokemon) {
      return null;
    }

    let itemImages = this.props.pokemon.item_ids.map((id) => {
      let url = this.props.state.entities.items[id].image_url;
      return (
        <Link to={`${this.props.location.pathname}/items/${id}`} >
          <img src={url} />
        </Link>
      );
    });

    return(
      <div className='pokemon-detail'>
        <img src={this.props.pokemon.image_url} />
        <h2>{this.props.pokemon.name}</h2>
        <p>Type: {this.props.pokemon.poke_type}</p>
        <p>Attack: {this.props.pokemon.attack}</p>
        <p>Defense: {this.props.pokemon.defense}</p>
        <p>Moves: {this.props.pokemon.moves}</p>
        <div className='item-area'>
          <h2>Items</h2>
          <div className='item-images'>
            {itemImages}
          </div>
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        </div>
      </div>
    );
  }
}

export default PokemonDetail;

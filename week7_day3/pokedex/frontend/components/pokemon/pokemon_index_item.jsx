import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => (
  <li className='pokemon-index-li'>
    <Link className='index-item-link' to={`/pokemon/${props.pokemon.id}`}>
      <img src={props.pokemon.image_url} />
      <span>{props.pokemon.name}</span>
    </Link>
  </li>
);

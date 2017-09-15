import React from 'react';

class ItemDetail extends React.Component {

  render () {
    return (
    <div>
      <h3>{this.props.item.name}</h3>
      <p>Happiness: {this.props.item.happiness}</p>
      <p>Price: ${this.props.item.price}</p>
    </div>
  );
  }
}

export default ItemDetail;

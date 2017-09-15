import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: state.entities.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);

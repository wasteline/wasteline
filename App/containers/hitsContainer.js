import { connect } from 'react-redux';
import Hits from './../components/Hits';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addItem: () => { dispatch({ type: 'ADD_ITEM' }); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hits);
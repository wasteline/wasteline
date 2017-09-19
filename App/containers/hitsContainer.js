import { connect } from 'react-redux';
import Hits from './../components/Hits';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  setProducts: (data) => { dispatch({ type: 'SET_PRODUCTS', payload: data }); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hits);
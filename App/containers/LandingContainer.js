import { connect } from 'react-redux';
import Landing from './../components/Landing';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  changeProfile: (target) => {
    dispatch({type: 'CHANGE_PROFILE', payload: target});
  },
  showItemList: () => {
    dispatch({type: 'SHOW_ITEMS', payload: true});
  },
  HideItemList: () => {
    dispatch({type: 'HIDE_ITEMS', payload: false});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
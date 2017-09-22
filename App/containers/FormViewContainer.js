import { connect } from 'react-redux';
import FormView from './../components/FormView';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  changeProfile: (target) => {
    dispatch({type: 'CHANGE_PROFILE', payload: target});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormView);
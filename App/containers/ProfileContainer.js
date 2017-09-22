import { connect } from 'react-redux';
import Profile from './../components/ItemProfile';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  showProfile: (target) => {
    dispatch({type: 'SHOW_PROFILE', payload: target});
  }, 
  upvote: () => {
    dispatch({type: 'UPVOTE'})
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
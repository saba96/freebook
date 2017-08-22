import {connect} from 'react-redux';
import Navigator from '../components/Navigator';
import { onAddClick, onFindClick } from '../actions/Navigator';

const mapStateToProps = (state) => {
  return {
    view : state.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => { dispatch(onAddClick()) },
    onFindClick: () => { dispatch(onFindClick()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);


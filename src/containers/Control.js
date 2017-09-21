import {connect} from 'react-redux';
import Control from '../components/Control';

const mapStateToProps = (state) => {
  return {
    view : state.view,
  };
};

export default connect(mapStateToProps)(Control);

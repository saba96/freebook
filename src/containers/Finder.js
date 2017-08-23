import {connect} from 'react-redux';
import Finder from '../components/Finder';
import { setFindFieldText, onSearchButtonClick, findByISBN } from '../actions/Finder';

const mapStateToProps = (state) => {
  return {
    findFieldText : state.findFieldText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchButtonClick: () => { dispatch(findByISBN()) },
    onTextBoxChange: (event) => {
      dispatch(setFindFieldText(event.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);



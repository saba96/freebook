import { connect } from 'react-redux';
import Adder from '../components/Adder';
import { addBook, setAdderTitleFieldText, setAdderISBNFieldText, setAdderGenreFieldText, setAdderLatFieldText, setAdderLngFieldText } from '../actions/Adder';

const mapStateToProps = (state) => {
  return {
    adderTitleFieldText: state.adderTitleFieldText,
    adderISBNFieldText: state.adderISBNFieldText,
    adderGenreFieldText: state.adderGenreFieldText,
    adderLatFieldText: state.adderTitleFieldText,
    adderLngFieldText: state.adderLngFieldText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleTextBoxChange: (event) => {
      dispatch(setAdderTitleFieldText(event.target.value))
    },
    onISBNTextBoxChange: (event) => {
      dispatch(setAdderISBNFieldText(event.target.value))
    },
    onGenreTextBoxChange: (event) => {
      dispatch(setAdderGenreFieldText(event.target.value))
    },
    onLatTextBoxChange: (event) => {
      dispatch(setAdderLatFieldText(event.target.value))
    },
    onLngTextBoxChange: (event) => {
      dispatch(setAdderLngFieldText(event.target.value))
    },
    onSubmit: () => {
      dispatch(addBook())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Adder);

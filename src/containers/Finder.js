import {connect} from 'react-redux';
import Finder from '../components/Finder';
import {
  setLocationSearchLatitudeFieldText,
  setLocationSearchLongitudeFieldText,
  setFindFieldText,
  setRadiusFieldText,
  setTitleFieldText,
  setAuthorFieldText,
  findByISBN,
  findByLocation,
  findByTitle,
  findByAuthor
} from '../actions/Finder';

const mapStateToProps = (state) => {
  return {
    findFieldText: state.findFieldText,
    foundBooks: state.foundBooks,
    searchRadius: state.searchRadius,
    latitudeFieldText: state.locationSearchLatitudeFieldText,
    longitudeFieldText: state.locationSearchLongitudeFieldText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchButtonClick: () => { dispatch(findByISBN()) },
    onTextBoxChange: (event) => {
      dispatch(setFindFieldText(event.target.value));
    },
    onLatitudeTextBoxChange: (event) => {
      dispatch(setLocationSearchLatitudeFieldText(event.target.value));
    },
    onLongitudeTextBoxChange: (event) => {
      dispatch(setLocationSearchLongitudeFieldText(event.target.value));
    },
    onRadiusTextBoxChange: (event) => {
      dispatch(setRadiusFieldText(event.target.value));
    },
    onTitleTextBoxChange: (event) => {
      dispatch(setTitleFieldText(event.target.value));
    },
    onAuthorTextBoxChange: (event) => {
      dispatch(setAuthorFieldText(event.target.value));
    },
    onLocationSearchButtonClick: () => dispatch(findByLocation()),
    onTitleSearchButtonClick: () => dispatch(findByTitle()),
    onAuthorSearchButtonClick: () => dispatch(findByAuthor())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);


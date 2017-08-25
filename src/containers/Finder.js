import {connect} from 'react-redux';
import Finder from '../components/Finder';
import {
  setLocSearchLatFieldText,
  setLocationSearchLongitudeFieldText,
  setFindFieldText,
  setRadiusFieldText,
  onSearchButtonClick,
  findByISBN,
  findByLocation
} from '../actions/Finder';

const mapStateToProps = (state) => {
  console.log('LAT: ' + state.locSearchLatFieldText);
  return {
    findFieldText: state.findFieldText,
    foundBooks: state.foundBooks,
    searchRadius: state.searchRadius,
    latitudeFieldText: state.locSearchLatFieldText,
    longitudeFieldText: state.locationSearchLongitudeFieldText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchButtonClick: () => { dispatch(findByISBN()) },
    onTextBoxChange: (event) => {
      dispatch(setFindFieldText(event.target.value));
    },
    onLatTextBoxChange: (event) => {
      dispatch(setLocSearchLatFieldText(event.target.value));
    },
    onLongitudeTextBoxChange: (event) => {
      dispatch(setLocationSearchLongitudeFieldText(event.target.value));
    },
    onRadiusTextBoxChange: (event) => {
      dispatch(setRadiusFieldText(event.target.value));
    },
    onLocationSearchButtonClick: () => dispatch(findByLocation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finder);


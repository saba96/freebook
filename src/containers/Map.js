import { connect } from 'react-redux';
import Map from '../components/Map';


const mapStateToProps = (state) => {
  console.log(state)
  let markers = [];
//   if(state.filterById !== null ){
//     markers.push({
//       id: state.filteredTruckInfo.id,
//       name: state.filteredTruckInfo.tripId,
//       latitude: state.filteredTruckInfo.position[0]
//       longitude: state.filteredTruckInfo.position[1]  
//     });
//     return {markers};
//   }
  for (let prop in state.records) {
    markers.push({
      ISBN: state.records[prop].ISBN,
      name: state.records[prop].name,  
      latitude: state.records[prop].latitude,
      longitude: state.records[prop].longitude,
      category: state.records[prop].category
    });
  } 

  return { markers : markers };
}

export default connect(mapStateToProps)(Map);
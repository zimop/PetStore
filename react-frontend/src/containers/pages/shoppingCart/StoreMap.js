import React, { Component } from "react";
import LocationPicker from "react-location-picker";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

{
  /* <script src="https://maps.googleapis.com/maps/api/js?key=<AIzaSyD1XGjf7uCGa_fbbxpN4DRVxKdwbOujg2k>&v=3.exp&libraries=geometry,drawing,places"></script>; */
}

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <div>Map</div>;
}

// /* Default position */
// const defaultPosition = {
//   lat: 37.8136,
//   lng: 144.9631,
// };

// class LocationPickerExample extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       address: "Unimelb",
//       position: {
//         lat: 37.7983,
//         lng: 144.961,
//       },
//     };

//     // Bind
//     this.handleLocationChange = this.handleLocationChange.bind(this);
//   }

//   handleLocationChange({ position, address, places }) {
//     // Set new location
//     this.setState({ position, address });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.address}</h1>
//         <div>
//           <LocationPicker
//             containerElement={<div style={{ height: "100%" }} />}
//             mapElement={<div style={{ height: "400px" }} />}
//             defaultPosition={defaultPosition}
//             onChange={this.handleLocationChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default LocationPickerExample;

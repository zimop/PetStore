// import React, { Component } from "react";
// import LocationPicker from "react-location-picker";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./storeMap.css";

function MapLoading() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  //   return <div><p>{this.googleMapsApiKey}</p></div>;
  return <Map />;
}

export default MapLoading;

function Map() {
  const center = { lat: 37.8136, lng: 144.9631 };
  return (
    <div>
      <GoogleMap
        mapContainerClassName="map-container"
        zoom={10}
        center={center}
      ></GoogleMap>
      <Marker position={center} />
      <p>succeed</p>
    </div>
  );
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

// <div>
//       <GoogleMap
//         mapContainerClassName="map-container"
//         zoom={10}
//         center={{ lat: 37.8136, lng: 144.9631 }}
//       >
//         <Marker position={{ lat: 37.8136, lng: 144.9631 }} />
//       </GoogleMap>
//       <p>succeed</p>
//     </div>

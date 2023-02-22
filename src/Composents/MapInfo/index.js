import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

function MapInfo(props) {
  console.log(props.position);

  const icon = L.icon({
    iconUrl:
      "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png",
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 16] // point of the icon which will correspond to marker's location
  }); // London

  return (
    <MapContainer center={props.position} zoom={2} style={{ height: "400px" }}>
      <TileLayer url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=fIN60HxGL6kobGt7N59g" />
      <Marker position={props.position} icon={icon}>
        <Popup>{props.name}</Popup>
      </Marker>
    </MapContainer>
  );
}
export default MapInfo;

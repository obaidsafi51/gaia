import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const Map = () => {
  const locations = [
    { lat: 40.730610, lng: -73.935242, description: 'Dangerous Zone 1' },
    { lat: 40.741610, lng: -73.935242, description: 'Dangerous Zone 2' },
  ];

  return (
    <MapContainer center={[40.730610, -73.935242]} zoom={12} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Center of Stockholm
const stockholm = [59.3293, 18.0686];

// Placeholder bike pump locations
const bikePumps = [
  { id: 1, position: [59.33258, 18.0649], name: "Bike Pump 1" },
  { id: 2, position: [59.3293, 18.0686], name: "Bike Pump 2" },
  { id: 3, position: [59.3275, 18.0707], name: "Bike Pump 3" },
];

// Custom icon for bike pumps
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="center">
        <Heading size="lg">Bike Pumps in Stockholm</Heading>
      </Flex>
      <Box height="calc(100vh - 64px)">
        <MapContainer center={stockholm} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumps.map((pump) => (
            <Marker key={pump.id} position={pump.position} icon={bikePumpIcon}>
              <Popup>{pump.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Container>
  );
};

export default Index;
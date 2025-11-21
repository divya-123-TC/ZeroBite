import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    let loc = await Location.getCurrentPositionAsync({});
    setLocation({ latitude: loc.coords.latitude, longitude: loc.coords.longitude });
  }

  async function showRoute() {
    const destination = { latitude: 12.9716, longitude: 77.5946 }; // example
    const points = [
      [location.latitude, location.longitude],
      [destination.latitude, destination.longitude]
    ];
    const coords = points.map(p => ({ latitude: p[0], longitude: p[1] }));
    setRouteCoords(coords);
  }

  if (!location) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} title="You are here" />
        {routeCoords.length > 0 && <Polyline coordinates={routeCoords} strokeWidth={4} />}
      </MapView>
      <Button title="Show Route" onPress={showRoute} />
    </View>
  );
}

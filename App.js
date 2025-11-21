import React from 'react';
import { SafeAreaView } from 'react-native';
import MapScreen from './src/services/screens/MapScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapScreen />
    </SafeAreaView>
  );
}

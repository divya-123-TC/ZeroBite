import { Platform } from 'react-native';

// DO NOT IMPORT MAPSCREEN HERE

let Screen;

if (Platform.OS === 'web') {
  // Web = show fallback simple screen
  Screen = require('./map.web').default;
} else {
  // Mobile = load actual map screen
  Screen = require('../src/screens/MapScreen').default;
}

export default Screen;

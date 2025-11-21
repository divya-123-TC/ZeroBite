import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function MapScreen() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text style={styles.msg}>Map only works on Mobile App</Text>
      </View>
    );
  }

  // Real map will be added later when API key is available
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>Mobile Map Screen (Google Maps coming soon)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center'},
  msg:{fontSize:18, fontWeight:'700'}
});

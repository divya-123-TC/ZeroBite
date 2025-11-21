import React from 'react';
import { View, Text } from 'react-native';

export default function MapWebFallback() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:'700',color:'red'}}>
        Map is not supported on Web. Use the Mobile App.
      </Text>
    </View>
  );
}

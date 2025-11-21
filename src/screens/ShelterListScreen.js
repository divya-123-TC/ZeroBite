import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const MOCK = [
  { id:'s1', name:'Anatha Ashram', address:'MG Road', distance:'1.2 km' },
  { id:'s2', name:'Local Shelter', address:'RR Nagar', distance:'2.1 km' },
];

export default function ShelterListScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>\n    <LanguageSwitcher />
      <Text style={styles.title}>Nearby Shelters</Text>
      <FlatList
        data={MOCK}
        keyExtractor={i=>i.id}
        renderItem={({item})=>(
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.small}>{item.address} · {item.distance}</Text>
            <Pressable style={styles.btn} onPress={()=>router.push('/volunteer-tasks')}>
              <Text style={{color:'#fff'}}>Request Pickup</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:16, backgroundColor:'#fff'},
  title:{fontSize:20, fontWeight:'700', marginBottom:12},
  card:{padding:12, backgroundColor:'#F4F8FF', borderRadius:8, marginBottom:10},
  name:{fontWeight:'700'},
  small:{color:'#666', marginTop:6},
  btn:{marginTop:8, backgroundColor:'#2B8AE2', padding:8, borderRadius:8, alignItems:'center'}
});
import LanguageSwitcher from '../components/LanguageSwitcher';

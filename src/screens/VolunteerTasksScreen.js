import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Alert } from 'react-native';

const MOCK = [
  { id:'t1', donor:'Hotel ABC', pickup:'12:30 PM', location:'Near MG Road', meals:12 },
  { id:'t2', donor:'College Canteen', pickup:'13:00 PM', location:'Hostel Road', meals:20 },
];

export default function VolunteerTasksScreen() {
  const [tasks] = useState(MOCK);

  function acceptTask(item) {
    Alert.alert('Accepted', `You accepted pickup from ${item.donor}`);

  }

  return (
    <View style={styles.container}>\n    <LanguageSwitcher />
      <Text style={styles.title}>Available Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={i=>i.id}
        renderItem={({item})=>(
          <View style={styles.card}>
            <Text style={styles.bold}>{item.donor}</Text>
            <Text>{item.location} � {item.pickup}</Text>
            <Text>Meals: {item.meals}</Text>
            <Pressable style={styles.btn} onPress={()=>acceptTask(item)}>
              <Text style={{color:'#fff'}}>Accept Task</Text>
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
  card:{padding:12, backgroundColor:'#F6F9FF', borderRadius:8, marginBottom:10},
  bold:{fontWeight:'700', marginBottom:6},
  btn:{marginTop:8, backgroundColor:'#2B8AE2', padding:10, borderRadius:8, alignItems:'center'}
});
import LanguageSwitcher from '../components/LanguageSwitcher';

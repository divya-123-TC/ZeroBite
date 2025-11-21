import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>\n    <LanguageSwitcher />
      <Text style={styles.heading}>ZeroBite Dashboard</Text>

      <Pressable style={styles.card} onPress={() => router.push('/upload-food')}>
        <Text style={styles.cardTitle}>Upload Food</Text>
        <Text style={styles.cardSub}>Post surplus food for pickup</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => router.push('/map')}>
        <Text style={styles.cardTitle}>Nearby Shelters</Text>
        <Text style={styles.cardSub}>Find NGOs, shelters & animal centers</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => router.push('/volunteer-tasks')}>
        <Text style={styles.cardTitle}>Volunteer Tasks</Text>
        <Text style={styles.cardSub}>Accept pickup tasks</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => router.push('/dashboard')}>
        <Text style={styles.cardTitle}>Analytics</Text>
        <Text style={styles.cardSub}>Meals served & waste diverted</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:20, backgroundColor:'#fff'},
  heading:{fontSize:22, fontWeight:'700', marginBottom:16},
  card:{padding:16, borderRadius:10, backgroundColor:'#F4F8FF', marginBottom:12},
  cardTitle:{fontSize:16, fontWeight:'700'},
  cardSub:{fontSize:12, color:'#666', marginTop:6}
});
import LanguageSwitcher from '../components/LanguageSwitcher';

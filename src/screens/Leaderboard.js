// src/screens/Leaderboard.js
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    async function fetchLeaders() {
      const q = query(collection(db, "volunteers"), orderBy("mealsDelivered", "desc"));
      const snapshot = await getDocs(q);
      const data = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      setLeaders(data);
    }
    fetchLeaders();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ZeroBite Leaderboard</Text>
      {leaders.map((vol, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.rank}>#{index + 1}</Text>
          <Text style={styles.name}>{vol.name}</Text>
          <Text style={styles.meals}>Meals Delivered: {vol.mealsDelivered}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 15, backgroundColor: "#fff", borderRadius: 10, marginBottom: 15, elevation: 3 },
  rank: { fontSize: 18, fontWeight: "bold" },
  name: { fontSize: 16, color: "#333" },
  meals: { fontSize: 14, color: "#555" },
});

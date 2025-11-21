// src/screens/Dashboard.js
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { calculateMeals } from "../utils/calculations";
import { BarChart, ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {
  const [totalMeals, setTotalMeals] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const [volunteers, setVolunteers] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // Fetch donations
      const donationsSnapshot = await getDocs(collection(db, "donations"));
      let meals = 0;
      donationsSnapshot.forEach(doc => {
        meals += calculateMeals(doc.data());
      });
      setTotalMeals(meals);
      setTotalDonations(donationsSnapshot.size);

      // Fetch volunteers
      const volunteersSnapshot = await getDocs(collection(db, "volunteers"));
      setVolunteers(volunteersSnapshot.size);
    }

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ZeroBite Dashboard</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Meals Served</Text>
        <Text style={styles.cardValue}>{totalMeals}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Donations</Text>
        <Text style={styles.cardValue}>{totalDonations}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Volunteers Active</Text>
        <Text style={styles.cardValue}>{volunteers}</Text>
      </View>

      <Text style={styles.chartTitle}>Meals Progress</Text>
      <ProgressChart
        data={{ data: [totalMeals / 100] }} // assuming 100 meals goal
        width={screenWidth - 40}
        height={150}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 15, backgroundColor: "#fff", borderRadius: 10, marginBottom: 15, elevation: 3 },
  cardTitle: { fontSize: 16, color: "#555" },
  cardValue: { fontSize: 22, fontWeight: "bold" },
  chartTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
});

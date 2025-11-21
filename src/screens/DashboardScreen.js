import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LanguageSwitcher from '../components/LanguageSwitcher';
import I18n from '../locales/i18n';

export default function DashboardScreen() {
  const totalMeals = 120;
  const totalDonations = 15;
  const volunteers = 8;
  const wasteDivertedKg = 45;

  return (
    <View style={styles.container}>

      {/* Language Switch Button */}
      <LanguageSwitcher />

      <Text style={styles.title}>{I18n.t("analytics")}</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.num}>{totalMeals}</Text>
          <Text>{I18n.t("estimated_meals")}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.num}>{totalDonations}</Text>
          <Text>{I18n.t("upload_food")}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.num}>{volunteers}</Text>
          <Text>{I18n.t("volunteer_tasks")}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.num}>{wasteDivertedKg} kg</Text>
          <Text>Waste Diverted</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:20, backgroundColor:'#fff'},
  title:{fontSize:22, fontWeight:'700', marginBottom:12},
  row:{flexDirection:'row', justifyContent:'space-between', marginBottom:12},
  card:{flex:1, padding:14, marginHorizontal:6, backgroundColor:'#F4F8FF', borderRadius:10, alignItems:'center'},
  num:{fontSize:20, fontWeight:'700', marginBottom:6}
});

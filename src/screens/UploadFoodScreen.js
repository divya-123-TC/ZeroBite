import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import LanguageSwitcher from '../components/LanguageSwitcher';
import i18n from '../locales/i18n';

export default function UploadFoodScreen() {
  const [type, setType] = useState('veg');
  const [kg, setKg] = useState('');
  const [boxes, setBoxes] = useState('');
  const [chapatis, setChapatis] = useState('');
  const [image, setImage] = useState(null);

  function submit() {
    if (!kg && !boxes && !chapatis) {
      Alert.alert(i18n.t("error"), i18n.t("enter_quantity"));
      return;
    }
    Alert.alert("Success", i18n.t("donation_posted"));
  }

  return (
    <ScrollView style={styles.container}>
      <LanguageSwitcher />

      <Text style={styles.title}>{i18n.t("upload_food")}</Text>

      <View style={styles.row}>
        <Pressable style={[styles.typeBtn, type === 'veg' && styles.typeActive]} onPress={() => setType('veg')}>
          <Text>Veg</Text>
        </Pressable>
        <Pressable style={[styles.typeBtn, type === 'nonveg' && styles.typeActive]} onPress={() => setType('nonveg')}>
          <Text>Non-Veg</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>{i18n.t("rice_kg")}</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={kg} onChangeText={setKg} />

      <Text style={styles.label}>{i18n.t("meal_boxes")}</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={boxes} onChangeText={setBoxes} />

      <Text style={styles.label}>{i18n.t("chapatis")}</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={chapatis} onChangeText={setChapatis} />

      <Pressable style={styles.submitBtn} onPress={submit}>
        <Text style={{ color: "#fff" }}>{i18n.t("post_donation")}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  row: { flexDirection: "row", gap: 10, marginBottom: 12 },
  typeBtn: { padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 8 },
  typeActive: { backgroundColor: "#2B8AE2", borderColor: "#2B8AE2" },
  label: { marginTop: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8 },
  submitBtn: {
    backgroundColor: "#2B8AE2",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  }
});

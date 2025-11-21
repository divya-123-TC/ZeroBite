import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../locales/i18n';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.locale);

  async function changeLanguage(code) {
    i18n.locale = code;
    setLang(code);
    await AsyncStorage.setItem('appLanguage', code);
  }

  return (
    <View style={styles.container}>
      <Pressable style={[styles.btn, lang==='en' && styles.active]} onPress={() => changeLanguage('en')}>
        <Text style={styles.text}>EN</Text>
      </Pressable>

      <Pressable style={[styles.btn, lang==='kn' && styles.active]} onPress={() => changeLanguage('kn')}>
        <Text style={styles.text}>KN</Text>
      </Pressable>

      <Pressable style={[styles.btn, lang==='hi' && styles.active]} onPress={() => changeLanguage('hi')}>
        <Text style={styles.text}>HI</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flexDirection:'row', gap:10, marginTop:20 },
  btn:{ padding:10, backgroundColor:'#eee', borderRadius:8 },
  active:{ backgroundColor:'#2B8AE2' },
  text:{ color:'#000', fontWeight:'700' }
});

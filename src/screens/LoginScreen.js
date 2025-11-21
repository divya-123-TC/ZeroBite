import LanguageSwitcher from "../components/LanguageSwitcher";
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import I18n from '../locales/i18n';

export default function LoginScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  function onContinue() {
    if (!phone || phone.length < 6) {
      Alert.alert(i18n.t('login'), i18n.t('enter_valid_phone'));
      return;
    }
    router.replace('/home');
  }

  return (
    <View style={styles.container}>
      {/* Language switcher */}
      <LanguageSwitcher />

      <Text style={styles.title}>ZeroBite</Text>
      <Text style={styles.subtitle}>{i18n.t('donate_surplus')}</Text>

      <TextInput
        style={styles.input}
        placeholder={i18n.t('phone_email')}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Pressable style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>{i18n.t('continue')}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, padding:24, justifyContent:'center', backgroundColor:'#fff'},
  title:{fontSize:34, fontWeight:'700', marginBottom:6},
  subtitle:{fontSize:14, color:'#666', marginBottom:20},
  input:{borderWidth:1, borderColor:'#ddd', padding:12, borderRadius:8, marginBottom:16},
  button:{backgroundColor:'#2B8AE2', padding:14, borderRadius:8, alignItems:'center'},
  buttonText:{color:'#fff', fontWeight:'600'}
});

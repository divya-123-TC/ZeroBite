import { Stack } from 'expo-router';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../src/locales/i18n';

export default function RootLayout() {
  useEffect(() => {
    async function loadLang() {
      const saved = await AsyncStorage.getItem('appLanguage');
      if (saved) i18n.locale = saved;
    }
    loadLang();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}

import { Tabs } from 'expo-router';

export default function TabNavigator() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="upload-food" options={{ title: 'Upload' }} />
      <Tabs.Screen name="shelters" options={{ title: 'Shelters' }} />
      <Tabs.Screen name="volunteer-tasks" options={{ title: 'Tasks' }} />
      <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' }} />
    </Tabs>
  );
}

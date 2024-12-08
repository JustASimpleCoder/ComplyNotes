import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => null, // Add a tab icon here if needed
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => null, // Add a tab icon here if needed
        }}
      />
    </Tabs>
  );
}

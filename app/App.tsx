// app/components/Button.tsx
import React from 'react';
import Navigator from '@/navigation';

import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';


export default function App() {
    return <Navigator />;  // Render the navigator
  }

interface ButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2e86de',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

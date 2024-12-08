import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { RootStackParamList } from '@/navigation/types'; // Import types
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>; // Type for navigation

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation hook

  const handleCreateSession = () => {
    navigation.navigate('NoteTakingScreen'); // This should match the screen name in the navigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ComplyNotes</Text>
      <Text style={styles.subtitle}>Your smart solution for compliance and note-taking.</Text>

      {/* Create Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreateSession}>
        <Text style={styles.createButtonText}>+ Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#2e86de',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
